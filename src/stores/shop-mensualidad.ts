import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { MensualidadDeuda } from "../types/cobros-type";

interface CartMensualidad {
  mensualidad: MensualidadDeuda
  quantity: number
}

interface ShoppingCart {
  items: CartMensualidad[]
  addItem: (mensualidad: MensualidadDeuda, quantity?: number) => void
  removeItem: (mensualidadId: number) => void
  increaseQuantity: (mensualidadId: number, quantity?: number) => void
  decreaseQuantity: (mensualidadId: number, quantity?: number) => void
  getTotalPrice: () => number
  clearCart: () => void
}

export const useShopCart = create<ShoppingCart>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (mensualidad, quantity = 1) => {
        const { items } = get()
        const item = items.find(item => item.mensualidad.id === mensualidad.id)

        if (item) {
          return
        }

        set({ items: [...items, { mensualidad: mensualidad, quantity }] })
      },
      removeItem: mensualidadId => {
        const { items } = get()

        set({ items: items.filter(item => item.mensualidad.id !== mensualidadId) })
      },
      increaseQuantity: (mensualidadId, quantity = 1) => {
        const { items } = get()

        const newItems = structuredClone(items)
        const itemIndex = newItems.findIndex(item => item.mensualidad.id === mensualidadId)
        const itemData = newItems[itemIndex]

        newItems[itemIndex] = { ...itemData, quantity: itemData.quantity + quantity }

        set({ items: newItems })
      },
      decreaseQuantity: (mensualidadId, quantity = 1) => {
        const { items } = get()

        const newItems = structuredClone(items)
        const itemIndex = newItems.findIndex(item => item.mensualidad.id === mensualidadId)
        const itemData = newItems[itemIndex]

        const newQuantity = itemData.quantity !== 1 ? itemData.quantity - quantity : quantity

        newItems[itemIndex] = { ...itemData, quantity: newQuantity }

        set({ items: newItems })
      },
      getTotalPrice: () => {
        const { items } = get()

        return items.reduce((total, item) => total + item.mensualidad.costo * item.quantity, 0)
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'shopping-cart',
    }
  )
)
