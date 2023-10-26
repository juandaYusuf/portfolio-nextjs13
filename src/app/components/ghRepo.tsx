import { Card, CardBody, Chip, Link, ScrollShadow } from "@nextui-org/react";
import { IRespositories } from "../lib/interfaces/githubDatas";


function GHRepos({ repoDatas, elementRef}: { repoDatas: Partial<IRespositories>[], elementRef?: React.RefObject<HTMLDivElement> }) {
  return (
    <ScrollShadow hideScrollBar className="max-h-full p-7" ref={elementRef}>
      {repoDatas.map((item, index) => (
        <Card
          key={index}
          isPressable
          shadow="sm"
          isBlurred
          className="mb-3 w-full"
          onPress={() => { window.open(item.html_url, '_blank') }}>
          <CardBody>
            <div className="flex w-full flex-col md:flex-row justify-between">
              <div>
                <p className="font-bold text-blue-500 hover:underline">{item.name}</p>
                <div className="flex gap-3 mb-2">
                  {!!item.language && <small className="text-slate-400">{item.language}</small>}
                  <small className="text-slate-400">⭐ {item.stargazers_count}</small>
                  <small className="text-slate-400">{item.updated_at?.split('T')[0]}</small>
                </div>
              </div>
              <div className="flex flex-col md:items-end">
                <Chip size="sm"><small className="px-2">{item.visibility}</small></Chip>
                <small className="text-slate-400 mt-2">{item.created_at?.split('T')[0]}</small>
              </div>
            </div>
            <Link
              isExternal
              showAnchorIcon
              href={item.html_url}
              className="mt-2 max-w-[250px]"
            >
              Visit source code on GitHub.
            </Link>
          </CardBody>
        </Card>
      ))}
    </ScrollShadow>
  )
}

export default  GHRepos