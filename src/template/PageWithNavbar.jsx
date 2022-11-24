import { Navbar } from '@/components'

const PageWithNavbar = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
export default PageWithNavbar
