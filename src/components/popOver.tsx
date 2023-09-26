import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@nextui-org/react"


type TProps = {
  title: string,
  content?: string | null,
  children: React.ReactNode
}


export default function CstmPopOver(props: TProps) {
  return (
    <Popover placement="bottom" showArrow>
      <PopoverTrigger>
        {props.children}
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 overflow-hidden">
          <div className="text-small font-bold mb-2">What's new</div>
          {
            props.content
              ?
              <div className="text-tiny flex flex-col">
                <span>{props.title}</span>
                <span className="text-slate-400">{props.content}</span>
              </div>
              :
              <div className="text-tiny">Not yet updates</div>

          }
        </div>
      </PopoverContent>
    </Popover>
  )
}


