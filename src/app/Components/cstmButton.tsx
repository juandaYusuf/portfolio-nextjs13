import { Button } from "@nextui-org/react"
import { useTheme } from "next-themes"

function CstmButton() {

  const { theme } = useTheme()

  return (
    <Button className={theme === "dark" ? "p-2 rounded-lg bg-white drop-shadow-lg hover:bg-slate-100 transition duration-150" : "p-2 rounded-lg bg-black drop-shadow-lg hover:bg-slate-800 transition duration-150"}>
      <p className={theme === "dark" ? "text-black font-bold" : "text-white font-bold"}>Download CV</p>
    </Button>
  )
}

export default CstmButton
