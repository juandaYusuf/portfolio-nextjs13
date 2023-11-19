import { Metadata } from "next"

export const metadata : Metadata = {
  title: 'About',
  alternates: {
    canonical: 'about',
    languages: {
      'en-US': '/en-US/about',
      'id-ID': '/id-ID/about',
    },
  },
}


export default function About() {
  return (
    <div className="h-screen w-full">
      <h1>About Page</h1>
    </div>
  )
}

