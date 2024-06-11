import { useEffect } from 'react'
import { setPageTitle } from '../../features/common/headerSlice'
import { Skull } from 'lucide-react'
import { useAppDispatch } from '../../stores/dispatch'

function InternalPage() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "404" }))
    })

    return (
        <div className="hero h-4/5 bg-base-200">
            <div className="hero-content text-accent text-center">
                <div className="max-w-md">
                    <Skull className="h-48 w-48 inline-block" />
                    <h1 className="text-5xl  font-bold">404 - Pagina no encontrado.</h1>
                </div>
            </div>
        </div>
    )
}

export default InternalPage