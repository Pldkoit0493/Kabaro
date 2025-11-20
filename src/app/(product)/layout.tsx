import FrontAnnouncement from "@/components/front/announcement"
import FrontNavbar from "@/components/front/navbar"
import FrontFooter from "@/components/front/footer"

import "./index.css"
import { CartProvider } from "@/context/cart-context"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FrontAnnouncement />
      {children}
      <FrontFooter />
    </>
  )
}