

import { CircleDot, Copyright } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="container">
      <div className="flex justify-center mb-2 ">
        <div className="flex flex-row items-center relative md:left-5">
          <Copyright className="h-2 w-2 mr-2 font-bold text-black"/>
          <p className="text-center leading-normal tracking-tighter text-black text-sm md:text-xs font-semibold opacity-75">
            {" "}
            Miguel Galperin
            , derivado del UI{" "}
            <a
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              SHADCN
            </a>
            . {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
