import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import NavigationBar from './navigationBar/navigationBar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {

  title: {
    default: 'Portfolio - Yusuf Juanda',
    template: `%s | Portfolio - Yusuf Juanda`,
  },
  description: "Welcome to my personal portfolio, Yusuf Juanda.I am a dedicated frontend developer committed to creating engaging and functional web experiences. With experience and expertise in the latest web technologies, I work tirelessly to deliver solutions that bring captivating and responsive designs to every project. Explore my portfolio to see a variety of projects I have worked on, including the creation of modern websites, interactive web applications, and performance optimization. I am always enthusiastic about delivering innovative and creative solutions in the world of web development. Let's collaborate and bring your ideas to life in the digital realm.",
  keywords: 'portfolio, yusuf juanda, frontend, reactjs, nextjs',
  metadataBase: new URL('https://yusufjuanda.vercel.app/'),
  alternates: {
    canonical: 'https://yusufjuanda.vercel.app/',
    languages: {
      'en-US': '/en-US',
      'id-ID': '/id-ID',
    },
  },

  icons: {
    icon: ['/icons/favicon.ico?v=4'],
    apple: ['/icons/apple-touch-icon.png?=4'],
    shortcut: ['/icons/favicon.ico?v=4'],
  },

  verification :{
    google:'jkgFaAenky2Nlhiz1EOvH9cEbicACsrfgIyKnnve5W4',
  },

  openGraph: {
    title: 'Portfolio - Yusuf Juanda',
    description: "Welcome to my personal portfolio, Yusuf Juanda.I am a dedicated frontend developer committed to creating engaging and functional web experiences. With experience and expertise in the latest web technologies, I work tirelessly to deliver solutions that bring captivating and responsive designs to every project. Explore my portfolio to see a variety of projects I have worked on, including the creation of modern websites, interactive web applications, and performance optimization. I am always enthusiastic about delivering innovative and creative solutions in the world of web development. Let's collaborate and bring your ideas to life in the digital realm.",
    url: 'https://yusufjuanda.vercel.app/',
    siteName: 'Portfolio Yusuf Juanda',
    images: [
      {
        url: '/metadataIMG/thumbnail.png',
        width: 800,
        height: 600,
      },
      {
        url: '/metadataIMG/thumbnail.png',
        width: 1800,
        height: 1600,
        alt: 'Thumbnail',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  authors: [{
    name: 'Yusuf Juanda',
    url: 'https://yusufjuanda.vercel.app/'
  }],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 1,
      'max-image-preview': 'large',
      'max-snippet': 1,
    },
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Yusuf Juanda',
    description: "Welcome to my personal portfolio, Yusuf Juanda.I am a dedicated frontend developer committed to creating engaging and functional web experiences. With experience and expertise in the latest web technologies, I work tirelessly to deliver solutions that bring captivating and responsive designs to every project. Explore my portfolio to see a variety of projects I have worked on, including the creation of modern websites, interactive web applications, and performance optimization. I am always enthusiastic about delivering innovative and creative solutions in the world of web development. Let's collaborate and bring your ideas to life in the digital realm.",
    // siteId: '1467726470533754880',
    creator: '@JuandaYusuf2',
    // creatorId: '1467726470533754880',
    images: ['/metadataIMG/thumbnail.png'],
  },

  manifest: '/site.webmanifest',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed bottom-0 left-0 h-64 w-56 md:h-[40rem] md:w-96 translate-x-14 -rotate-[30deg] blur-2xl md:blur-3xl -z-10 r-0 b-0 bg-gradient-to-r from-sky-500 via-purple-500 opacity-[0.3]" />
        <div className="fixed right-0 h-96 w-48 md:h-[40rem] md:w-96 translate-x-20 md:translate-x-14 translate-y-20 -rotate-[80deg] rounded-t-full blur-3xl -z-10 r-0 b-0 bg-gradient-to-r from-sky-600 to-purple-400 opacity-[0.25] " />
        <Providers>
          <NavigationBar>
            {children}
          </NavigationBar>
        </Providers>
      </body>
    </html>
  )
}
