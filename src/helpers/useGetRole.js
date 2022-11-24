import { useAuthState } from '@/redux/store'

const useGetRole = () => {
  const { authData } = useAuthState()
  return authData?.user?.rol_id
}
export default useGetRole
