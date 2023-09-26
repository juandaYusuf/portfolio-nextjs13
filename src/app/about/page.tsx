import { Metadata } from "next"

export const metadata : Metadata = {
  title: 'About | Portfolio - Yusuf Juanda',
}


export default function About() {
  return (
    <div className="h-screen w-full bg-amber-200">
      <h1>About Page</h1>
    </div>
  )
}

