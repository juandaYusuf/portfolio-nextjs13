'use client'

import { Button, Card, CardBody, Image, Link, Progress, ScrollShadow } from "@nextui-org/react"
import { useEffect, useRef, useState } from "react"

type TMusicControl = {
  status: string
  pause: boolean
  stop: boolean
}

type TMusicList = {
  title: string
  src: string
  thumbnail: string
  musicSrc: string
  audioRef: React.RefObject<HTMLAudioElement>
}

type TMusicController = {
  isPaused: boolean
  isStoped: boolean
  refElement: React.RefObject<HTMLAudioElement>
}


const pauseIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-pause-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
  </svg>
)

const playIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
  </svg>
)

const nextIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
    <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
  </svg>
)

const previousIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
    <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
  </svg>
)

const stopIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
  </svg>
)


export default function FavMusic() {
  

  const [isMusicPause, setIsMusicPause] = useState<TMusicControl>({ status: "Play", pause: true, stop: true })
  const [switchSong, setSwitchSong] = useState<number>(0)
  const [musicDuration, setmusicDuration] = useState<string>("00:00")
  const [musicProgress, setMusicProgress] = useState<number | null>(0)
  const progresBarRef = useRef<HTMLDivElement>(null)
  const musicList: TMusicList[] = [
    {
      title: "Kana Boon LoFi Remix",
      // src: '/assets/music/naruto_kanaboon_lofi.mp3',
      src: 'https://rr6---sn-2uuxa3vh-jb3e.googlevideo.com/videoplayback?expire=1698883657&ei=6ZNCZeqpD-q26dsP_a2O6AI&ip=2a01%3A4f8%3A190%3A8094%3A%3A2&id=o-ALSJwIOSRMI0YO9cQVIaEGyV4AsFjAfxy590aNftf4C-&itag=140&source=youtube&requiressl=yes&spc=UWF9f4JxMi0PLvDgoOUsdUwBHNId3bRIQvei0QrZuw&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=WoU97dfhXcnzkZirb1gLVLAP&gir=yes&clen=2669573&dur=164.908&lmt=1626172203642336&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=WEB&txp=5432434&n=ZY-Sn-1N54OCAgMbBIVr0&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AGM4YrMwRAIgHB-noo-QbBZmpmapUYj6leaeMJc0hsl4ze3JEd91Hz4CIEYd-K-TgVnJ-DseNFF3AtomDMUfISJAspgJWRR1_Smp&rm=sn-4g5e6d7e&req_id=10267d1f6a15a3ee&redirect_counter=2&cm2rm=sn-2uuxa3vh-jb3k7e&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=e6&mip=180.244.161.24&mm=29&mn=sn-2uuxa3vh-jb3e&ms=rdu&mt=1698861674&mv=m&mvi=6&pcm2cms=yes&pl=20&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AK1ks_kwRQIhAKOulO5mS6_H6oDqKjvcPyK9dg3hhrYsOPy7__PnLI87AiAF2SaOHetBZiEW69GVq2dPSMd6Dz8FwQLidR_DseL-NA%3D%3D',
      musicSrc: 'https://www.youtube.com/watch?v=zIXFUNfp8ac',
      thumbnail: '/assets/images/naruto.jpg',
      audioRef: useRef<HTMLAudioElement>(null)
    },
    {
      title: "Viva La Vida LoFi Remix",
      src: 'https://rr5---sn-4g5ednz7.googlevideo.com/videoplayback?expire=1698883907&ei=45RCZd7PG5i76dsPpvGbsAk&ip=2a01%3A4f8%3A190%3A8094%3A%3A2&id=o-APHopZYOTrKSTs8hYUCIDBkWX3L5fh_QFwUq5VlMmBTp&itag=140&source=youtube&requiressl=yes&mh=XD&mm=31%2C26&mn=sn-4g5ednz7%2Csn-f5f7kn7z&ms=au%2Conr&mv=m&mvi=5&pl=41&initcwndbps=432500&spc=UWF9fxJBhAB6k8-KK1ehXBfVqaIqJvEFmkKrFNr0CA&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=OH2EdxKBWdSA6qb5JkQYq_oP&gir=yes&clen=2480196&dur=153.205&lmt=1686011934425684&mt=1698861914&fvip=5&keepalive=yes&fexp=24007246&beids=24350018&c=WEB&txp=4432434&n=aNkTckBKshY6kQikf6w9k&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AK1ks_kwRQIgPQSD8XaIXNb7MVMO1srEE_K236KmOCs10MPJ2H_PrToCIQDqlyf9gQyGR8fX1TxvU223FhrEp47mD_IVs3OWdw26uA%3D%3D&sig=NGAGM4YrMwRQIgbolbMlM8nZ3Q8pbLhQPL7f9PvE-G8Ron7EMb8HCixvsCIfD0wv_OQjYAC=vRe4WO2_bn6APb2MD3kTQD00xerZHvVA=z',
      thumbnail: '/assets/images/vivalavida.jpg',
      musicSrc: 'https://www.youtube.com/watch?v=i0lW7x62Zfk',
      audioRef: useRef<HTMLAudioElement>(null)
    },
    {
      title: "Lofi Instrumental",
      src: 'https://rr2---sn-4g5e6nsd.googlevideo.com/videoplayback?expire=1698883960&ei=GJVCZZHjI8TD1gKc-YmQAQ&ip=2a01%3A4f8%3A190%3A8094%3A%3A2&id=o-ADChRIBTCmmAcNiqW1g5O6hJsuz7Qe7x71e1E06G58Cr&itag=140&source=youtube&requiressl=yes&mh=y3&mm=31%2C29&mn=sn-4g5e6nsd%2Csn-4g5edndk&ms=au%2Crdu&mv=m&mvi=2&pl=41&initcwndbps=432500&spc=UWF9f-VQxVWLwnr4AHlHWLeFMzm4oOKDCbpZZIDpmA&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=5SrjBGSW-xv1pVBF2_JCTo4P&gir=yes&clen=2141637&dur=132.284&lmt=1676541406813264&mt=1698861914&fvip=3&keepalive=yes&fexp=24007246&beids=24350018&c=WEB&txp=5318224&n=EoqGGMo7N_kdQaA3ISUQk&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AGM4YrMwRQIgF0zUngbkONStmfxMXGMEHZcoRZacoDvbBXIUt7wdbJYCIQCZI9y4kGLcTQIRdD1FOzA5Nrz6BSOFlwTHRi0cowtbxA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AK1ks_kwRAIgIughUpJzPdWNI5n0wgAm4hMUXztg-GtJt96qnBw3Va4CIBsfH6LoB852mLHQ9LnCXkVVZ_YAArFREdtn9HzaQCYj',
      thumbnail: '/assets/images/lofi.jpg',
      musicSrc: 'https://www.youtube.com/watch?v=HGMQbVfYVmI',
      audioRef: useRef<HTMLAudioElement>(null)
    }
  ]

  const nextTrackHandler = () => {
    setIsMusicPause(prev => {
      return {
        ...prev,
        stop: true,
        pause: true
      }
    })
    setSwitchSong(prev => prev >= musicList.length - 1 ? musicList.length - 1 : prev + 1)
  }

  const previousTrackHandler = () => {
    setIsMusicPause(prev => {
      return {
        ...prev,
        stop: true,
        pause: true
      }
    })
    setSwitchSong(prev => prev <= 0 ? 0 : prev - 1)
  }

  const progressBarMusicHandler = (refElement: React.RefObject<HTMLAudioElement>) => {
    refElement.current?.addEventListener('timeupdate', () => {
      if (refElement.current) {
        const percentage = (refElement.current.currentTime / refElement.current.duration) * 100
        setMusicProgress(percentage)
        if (percentage === 100) {
          nextTrackHandler()
          setIsMusicPause(prev => {
            return {
              ...prev,
              pause: false,
              stop: false
            }
          })
        }
      } else {
        setMusicProgress(null)
      }
    })
  }



  const musicDurationsHandler = (refElement: React.RefObject<HTMLAudioElement>) => {
    if (refElement.current) {
      if (!!refElement.current.duration) {
        const minutes = Math.floor(refElement.current.duration / 60)
        const seconds = Math.floor(refElement.current.duration % 60)
        let duration = `${minutes}:${seconds}`
        setmusicDuration(duration)
      } else {
        setmusicDuration("00:00")
        setMusicProgress(null)
      }
    }
  }

  const playOrResumeMusicHandler = ({ isPaused, isStoped, refElement }: TMusicController) => {
    if (refElement.current) {

      musicDurationsHandler(refElement)
      progressBarMusicHandler(refElement)

      if (isPaused) {
        refElement.current.pause()
        setIsMusicPause({
          status: "Play",
          pause: isPaused,
          stop: isStoped
        })
      } else {
        refElement.current.play()
        setIsMusicPause({
          status: "Pause",
          pause: isPaused,
          stop: isStoped
        })
      }
    }
  }

  const stopMusicHandler = (stopRefElement: React.RefObject<HTMLAudioElement>) => {
    if (stopRefElement.current) stopRefElement.current.currentTime = 0
  }

  const musicControlHandler = (playOrResume: TMusicController, isStop: boolean) => {
    if (isStop) {
      stopMusicHandler(playOrResume.refElement)
      playOrResumeMusicHandler(playOrResume)
    } else {
      playOrResumeMusicHandler(playOrResume)
    }
  }


  useEffect(() => {
    musicControlHandler({
      isPaused: isMusicPause.pause,
      isStoped: isMusicPause.stop,
      refElement: musicList[switchSong].audioRef
    }, isMusicPause.stop)
  }, [switchSong, isMusicPause.pause, isMusicPause.stop])


  return (
    <div className="h-full w-full p-7 flex flex-col rounded-t-3xl justify-between items-center font-bold bg-[url(/assets/images/music_bg.jpg)] bg-cover bg-center">
      <ScrollShadow className="w-full md:max-w-[610px] h-[15%] md:h-auto mb-1 md:mt-6">
        {
          musicList.map((item, index) => {
            return (
              <Card key={index} isBlurred shadow="sm" className="mb-2 h-[40px] border-t-2 border-l-2 border-r border-b border-danger/60 bg-background/60 dark:bg-default-100/50 w-full">
                <CardBody className="p-2">
                  <p className="text-sm">{item.title}</p>
                </CardBody>
              </Card>
            )
          })
        }
      </ScrollShadow>

      <Card
        isBlurred
        className="border-t-2 border-l-2 border-r border-b border-danger/60 bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="Album cover"
                className="object-cover"
                height={150}
                shadow="md"
                src={musicList[switchSong].thumbnail}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              {
                musicList.map((item, index) => {
                  return switchSong === index
                    &&
                    <div className="flex justify-between items-start" key={index}>
                      <div className="flex flex-col gap-0" >
                        <h3 className="font-semibold text-foreground/90">{item.title}</h3>
                        <p className="text-small text-foreground/80">{index + 1} of {musicList.length} Tracks</p>
                        <Link isExternal showAnchorIcon href={item.musicSrc} color="primary" className="text-large font-medium mt-2">
                          Music source.
                        </Link>
                      </div>
                      <Button
                        isIconOnly
                        className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                        radius="full"
                        variant="light"
                        onPress={() => setIsMusicPause(prev => {
                          return {
                            ...prev,
                            stop: true,
                            pause: true
                          }
                        })}
                      >
                        {stopIcon}
                      </Button>
                      <audio ref={item.audioRef} >
                        <source src={item.src} type="audio/mpeg" />
                        Your browser does not support the audio element
                      </audio>
                    </div>
                })
              }

              <div className="flex flex-col mt-3 gap-1">
                <Progress
                  ref={progresBarRef}
                  aria-label="Music progress"
                  classNames={{
                    indicator: "bg-default-800 dark:bg-white",
                    track: "bg-default-500/30",
                  }}
                  color="default"
                  size="sm"
                  value={musicProgress ? musicProgress : 0}
                />
                <div className="flex justify-between">
                  {/* <p className="text-small">1:23</p> */}
                  <p className="text-small text-foreground/50">{musicDuration}</p>
                </div>
              </div>

              <div className="flex w-full items-center justify-center gap-2">
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                  onPress={() => previousTrackHandler()}
                >
                  {previousIcon}
                </Button>
                <Button
                  isIconOnly
                  className="w-auto h-auto data-[hover]:bg-foreground/10 p-1 border-2 border-foreground"
                  radius="full"
                  variant="light"
                  onClick={() => setIsMusicPause(prev => {
                    return {
                      ...prev,
                      pause: !prev.pause,
                      stop: false
                    }
                  })
                  }
                >
                  {isMusicPause.status === "Play" ? playIcon : pauseIcon}
                </Button>
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                  onPress={() => nextTrackHandler()}
                >
                  {nextIcon}
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div >
  )
}