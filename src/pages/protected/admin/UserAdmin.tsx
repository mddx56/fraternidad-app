import { useEffect } from 'react'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../app/hook'
import UserAdmin from '../../../features/User/UserAdmin'

function InternalPage(){
  const dispatch = useAppDispatch()

  useEffect(() => {
        dispatch(setPageTitle({ title : "Admin. Usuario"}))
  })
    return(
        <UserAdmin />
    )
}

export default InternalPage