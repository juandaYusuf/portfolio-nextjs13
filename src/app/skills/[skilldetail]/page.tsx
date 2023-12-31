import Image from "next/image"

import { skills } from "@/app/lib/types/card-skill"
import React from "react"
import type { Metadata, ResolvingMetadata } from 'next'


export async function generateMetadata(
  { params }: { params: { skilldetail: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  let skillName = params.skilldetail === 'HTML%26CSS' ? 'HTML & CSS' : params.skilldetail
  return {
    title: `Skill - ${skillName === "HTML%20%26%20CSS" ? "HTML & CSS" : skillName}`,
    alternates: {
      canonical: 'skill',
      languages: {
        'en-US': '/en-US/skill',
        'id-ID': '/id-ID/skill',
      },
    },
  }
}


export default function SkillDetail({ params }: { params: { skilldetail: string } }) {

  return (
    <div className="min-h-screen w-full flex p-2 flex-col gap-2">
      {
        skills.map((item) => {
          let skill = params.skilldetail === 'HTML%26CSS' ? 'HTML&CSS' : params.skilldetail
          return (
            item.name === skill
            &&
            <React.Fragment key={item.name}>
              <p className="text-5xl font-bold">{item.name}</p>
              <p className="text-slate-500 mb-10">Here what i learned about {item.name}</p>
              <div className="overflow-hidden rounded-xl w-full h-[400px] bg-slate-700 flex justify-center items-center">
                <Image style={{ objectFit: "cover", width: "100%", height: "100%", objectPosition: "center" }} src={item.thumbnail} alt="skill" />
              </div>
            </React.Fragment>
          )
        })
      }
    </div>
  )
}




