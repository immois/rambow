import { Header } from "@components/header"
import { Children } from "@interfaces/children"

const AppLayout = ({ children }: Children) => {

  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default AppLayout