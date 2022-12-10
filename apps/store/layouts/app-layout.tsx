import { useState } from "react"
import { Header } from "@components/header"
import { Children } from "@interfaces/children"
import SidebarMenu from "@components/sidebar/sidebar-menu"

const AppLayout = ({ children }: Children) => {
  const [isActive, setIsActive] = useState(false)

  const toogleSideMenu = () => setIsActive(!isActive)
  const closeSidebarMenu = () => isActive && setIsActive(false)

  return (
    <>
      <SidebarMenu />

      <div onClick={closeSidebarMenu} className={`w-screen h-screen bg-slate-200 relative z-10 duration-300 ${isActive ?
        'scale-x-100 scale-y-90 translate-x-[58%] rounded-2xl' : ''}`}
      >
        <Header clickMenu={toogleSideMenu} />
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default AppLayout