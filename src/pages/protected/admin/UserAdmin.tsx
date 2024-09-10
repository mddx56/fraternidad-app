import { useEffect } from 'react'
import { useAppDispatch } from '../../../stores/dispatch'
import { setPageTitle } from '../../../features/common/headerSlice'
import UserAdmin from '../../../features/user/UserAdmin'

function InternalPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: "Admin. Usuario" }))
  })
  return (
    <UserAdmin />
  )
}

export default InternalPage