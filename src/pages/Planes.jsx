import { Prices } from "@/widgets"
import HeaderPLans from "@/widgets/home/sections/planes/HeaderPLans"

function Planes() {

  const bg_color_secondary = "bg-gray-500/10"

  function BackgroundElement({ children }) {
    return (
      <div className={`py-7`}>
        {children}
      </div>
    )
  }

  return (
    <div className="w-full">
      <BackgroundElement>
        <HeaderPLans />
      </BackgroundElement>
      <BackgroundElement>
        <Prices />
      </BackgroundElement>
    </div>
  )
}

export default Planes