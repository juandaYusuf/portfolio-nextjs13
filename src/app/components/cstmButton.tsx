import { Button } from "@nextui-org/react"
import { useTheme } from "next-themes"


type TProps = {
  name?: string | null
  children?: React.ReactNode | null
  className?: string | null
  chieldren2?: React.ReactNode | null
  onPress?: () => void
}

function CstmButton(props: TProps) {

  const { theme } = useTheme()
  return (
    <div className={`${props.className} ${theme === "dark" ? "p-2 bg-white drop-shadow-lg rounded-xl cursor-pointer hover:bg-slate-100 transition duration-150 " : "p-2 bg-black drop-shadow-lg rounded-xl hover:bg-slate-800 transition duration-150"}`}>
      {
        props.name
          ?
          <p className={theme === "dark" ? "text-black font-bold capitalize" : "text-white font-bold capitalize"}>{props.name}</p>
          :
          !!props.children
          &&
          props.children
      }
      {props.children}
    </div>
  )
}

export default CstmButton
