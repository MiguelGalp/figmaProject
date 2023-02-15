"use client"

import Image from "next/image"
import Copia_de_Cagando_lg from '../public/Copia_de_Cagando_lg.png'
import sin_cabeza from '../public/sin_cabeza_blanco.png'
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function CoverImage() {
  return (
    <AspectRatio ratio={9 / 16} className="bg-dracula-aro-50 dark:bg-dracula-aro-900 sm:-mt-16 md:-mt-36 md:mr-40 lg:mr-50 max-w-6xl gradient-mask-t-50">
      <Image 
        src={sin_cabeza}
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
    )
}
