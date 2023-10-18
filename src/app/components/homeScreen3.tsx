export default function HomeScreen3() {

  return (
    <div className="h-screen flex flex-col items-center pt-20">
      <p className="text-4xl md:text-6xl font-bold mb-3 md:mb-5">My Biography</p>
      <div className="flex h-full justify-center relative">
        <div className="h-full w-[3px] bg-foreground rounded-full absolute -z-10" />
        <div className="w-4 h-4 rounded-full bg-amber-400 sticky top-[40%] blur-[2px] drop-shadow-[0px_3px_3px_rgba(251,191,36,1)]" />
      </div>
    </div>
  )

}