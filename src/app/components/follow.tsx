import Image from "next/image"

type TProps = {
  avatar_url: string,
  login: string,
  html_url: string,
}

export default function Follow({ props, animate }: { props: TProps, animate?: string }) {

  const { avatar_url, login, html_url } = props

  return (
    <div className={`flex gap-2 my-2 ${!!animate ? animate : ''}`}>
      <div className="border-2 border-slate-400 rounded-full p-[2px]">
        <Image
          className="bg-slate-100 rounded-full"
          src={avatar_url}
          height={40}
          width={40}
          alt="follower" />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold">{login}</span>
        <span className="text-tiny text-slate-400 lowercase">
          <a className="text-blue-500" href={html_url} target="_blank" rel="noreferrer" >Profile</a>
        </span>
      </div>
    </div>
  )
}