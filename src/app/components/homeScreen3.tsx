'use client'

export default function HomeScreen3() {

  return (
    <div className="h-screen flex flex-col justify-center items-center pt-20">
      <div className="h-full w-[2px] bg-foreground" />
      <p className="text-4xl md:text-5xl font-bold mb-2">Summery</p>
      <div className="flex px-4 w-full md:max-w-[60%] justify-center">
        <p className="text-center">Yusuf Juanda is a recent graduate with expertise in Frontend Development, specializing in the creation of User Interfaces (UI) for websites.
          He has dedicated 1.5 years of study to ReactJS and less than a year to NextJS. Yusuf Juanda has applied his knowledge in developing the <b>"Staff
          Attendance Information System Using QR Code for the Gandasoli Village Office"</b> as his final project/thesis. During the course of this project,
          he assumed the role of a Fullstack Web Developer, utilizing ReactJS for the Frontend and FastAPI for the Backend, along with a MySQL
          database. Nevertheless, Yusuf Juanda's primary focus remains on the ongoing development of Frontend applications using ReactJS and NextJS,
          demonstrating a consistent dedication to mastering these technologies.</p>
      </div>
      <div className="h-full w-[2px] bg-foreground mt-2" />
    </div>
  )

}