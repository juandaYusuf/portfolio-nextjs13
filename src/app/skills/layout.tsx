import LeftSideBar from "@/app/components/leftSideBar"

import dynamic from "next/dynamic"


const DynamicIconsWithNoSSR = dynamic(() => import('../svg/dynamicIcons'), {
  ssr: false,
})

export default function skillsLayout({
  children
}: { children: React.ReactNode }) {


  const sideBarMenus = [
    {
      no: 1,
      key: 'NextJS',
      lable: 'NextJS',
      startIcon: <div className="rounded-lg bg-secondary border border-danger p-[6px]"><DynamicIconsWithNoSSR iconName="nextjsoutline" size={18} /></div>
    },
    {
      no: 2,
      key: 'TypeScript',
      lable: 'TypeScript',
      startIcon: <div className="rounded-lg bg-secondary border border-danger p-[3px]"><DynamicIconsWithNoSSR iconName="typescriptoutline" size={24} color="#007ACC" /></div>
    },
    {
      no: 3,
      key: 'JavaScript',
      lable: 'JavaScript',
      startIcon: <div className="rounded-lg bg-secondary border border-danger p-[6px]"><DynamicIconsWithNoSSR iconName="Javascriptoutline" size={18} color="#F0DB4F" /></div>
    },
    {
      no: 4,
      key: 'HTML & CSS',
      lable: 'HTML & CSS',
      startIcon: <div className="rounded-lg bg-secondary border border-danger p-[6px]"><DynamicIconsWithNoSSR iconName="htmloutline" size={18} color="#E44D26" /></div>
    },
    {
      no: 5,
      key: 'Linux',
      lable: 'Linux',
      startIcon: <div className="rounded-lg bg-secondary border border-danger p-[6px]"><DynamicIconsWithNoSSR iconName="linux" size={18} color="default" /></div>
    },
    {
      no: 6,
      key: 'Tailwind',
      lable: 'Tailwind',
      startIcon: <div className="rounded-lg bg-secondary border border-danger p-[6px]"><DynamicIconsWithNoSSR iconName="tailwind" size={18} color="#06B6D4" /></div>
    },
    {
      no: 7,
      key: 'ReactJS',
      lable: 'ReactJS',
      startIcon: <div className="rounded-lg bg-secondary border border-danger p-[6px]"><DynamicIconsWithNoSSR iconName="reactjs" size={18} color="#007ACC" /></div>
    },

  ]

  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="pt-10 w-full md:w-[80%] flex justify-between">
        <div className="hidden md:inline">
          <LeftSideBar items={sideBarMenus} className="sticky top-[104px] w-full h-[85vh]" />
        </div>
        <div className="flex justify-center w-full flex-col px-10">
          {children}
        </div>
        <div className="min-w-[20%] hidden md:inline">
          <p>Display sub menu</p>
        </div>
      </div>
    </div>
  )
}