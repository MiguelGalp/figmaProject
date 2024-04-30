"use client"

import * as React from "react"
import { useState } from "react"
import next from "next"
import Image from "next/image"
import Link from "next/link"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import {
  ArrowBigRight,
  BoxIcon,
  CalendarDays,
  ChevronsRightIcon,
  Cloud,
  CreditCard,
  Croissant,
  CupSoda,
  Github,
  Keyboard,
  LifeBuoy,
  LogIn,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  RadioIcon,
  Rotate3dIcon,
  Settings,
  User,
  UserPlus,
  Users,
  WifiIcon,
  WrenchIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { ClipLoader } from "react-spinners"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DemoIndicator } from "./demo_indicator"
import ImageComponent from "./imagecomponent"
import LatestRepo from "./latestRepo"
import VideoComponent from "./videocomponent"

const HoverCard = ({ children, ...props }) => (
  <HoverCardPrimitive.Root openDelay={150} closeDelay={0} {...props}>
    {children}
  </HoverCardPrimitive.Root>
)

type SideType = "bottom" | "right" | "top" | "left" | undefined;

const CustomHoverCardContent = ({ children, ...props }) => {
  const [side, setSide] = React.useState<SideType>("bottom");
  const [sideOffset, setSideOffset] = React.useState<number | undefined>(0);
  const [transform, setTransform] = React.useState<string | undefined>("");
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 1280px)").matches) {
        setSide("right");
        setSideOffset(-25);
        setTransform("translateY(100px)");
        setStyle({
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.7)"
        });
      } else {
        setSide("bottom");
        setSideOffset(-30);
        setTransform("translateX(125px)");
        setStyle({
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.7)"
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HoverCardContent side={side} sideOffset={sideOffset} style={{ ...style, transform: transform }} {...props}>
      {children}
    </HoverCardContent>
  );
};

const CustomHoverCardContent2 = ({ children, ...props }) => {
  const [side, setSide] = React.useState<SideType>("bottom");
  const [sideOffset, setSideOffset] = React.useState<number | undefined>(0);
  const [transform, setTransform] = React.useState<string | undefined>("");
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 1280px)").matches) {
        setSide("right");
        setSideOffset(-25);
        setTransform("translateY(100px)");
        setStyle({
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.7)"
        });
      } else {
        setSide("bottom");
        setSideOffset(-30);
        setTransform("translateX(125px)");
        setStyle({
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.7)"
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HoverCardContent side={side} sideOffset={sideOffset} style={{ ...style, transform: transform }} {...props}>
      {children}
    </HoverCardContent>
  );
};

const CustomHoverCard = ({ children, ...props }) => {
  const handleClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div onClick={handleClick} style={{ display: "inline-block" }}>
      <HoverCard {...props}>{children}</HoverCard>
    </div>
  )
}

const CustomListItem = ({ children, ...props }) => {
  const handleClick = (event) => {
    event.stopPropagation()
  }

  return (
    <ListItem onClick={handleClick} {...props}>
      {children}
    </ListItem>
  )
}

const CustomNavigationMenu = ({ children, ...props }) => {
  const handleClick = (event) => {
    event.stopPropagation()
  }

  return (
    <NavigationMenu onClick={handleClick} {...props}>
      {children}
    </NavigationMenu>
  )
}



export function Dropdown_menu({ toggleDropdown, isDropdownOpen }) {
  const handleOpen = () => {
    const videoElement = document.getElementById('myVideo');
    if (videoElement) {
      videoElement.classList.add('blur');
    }
    toggleDropdown();
  };

  const handleClose = () => {
    const videoElement = document.getElementById('myVideo');
    if (videoElement) {
      videoElement.classList.remove('blur');
    }
    toggleDropdown();
  };
  const [imageLoading, setImageLoading] = useState(true)

  // Simulate image loading delay
  setTimeout(() => {
    setImageLoading(false)
  }, 5000) // Adjust the delay as needed
  const { theme } = useTheme()
  return (
    <DropdownMenu onOpenChange={isOpen => isOpen ? handleOpen() : handleClose()}>
      <DropdownMenuTrigger asChild className="data-[state=open]:bg-pink">
        <Button
          variant="ghost"
          className="w-17 h-17 relative right-2 scale-75 md:scale-110 p-1 mt-2 md:mt-8 md:flex"
        >
          <Avatar className="h-16 w-16">
            <AvatarImage
              src="/Gallery.png"
              className="relative top-1 h-16 w-16"
            />
            <AvatarFallback className="ml-[-1px] tracking-[-3px]">
              MG
            </AvatarFallback>
          </Avatar>

          <DemoIndicator className="left-12 -mt-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="hover:none">
              <span className="font-bold">Servicios</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <CustomNavigationMenu open={true}>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible bg-transparent">
                        <NavigationMenuTrigger className="text-black w-2/3 leading-tight md:w-full font-bold">
                          Desarrollos con Python, Javascript, SQL
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="overflow-visible">
                          <ul className="grid md:grid-cols-[1fr,1fr] gap-0 p-4 md:p-3 w-[300px] md:w-[370px] -ml-10 mt-0 md:ml-0 md:mt-0 rounded-md md:rounded-none bg-transparent shadow-md md:shadow-none">
                            <li className="-mr-2">
                              <CustomListItem title="Front">
                                <div className="mt-1 text-base font-bold leading-4 tracking-tighter">
                                  Servicio de desarrollo de Frontend. Utilizo
                                  el framework, las librerías y el manejo de
                                  contenidos más adecuado para cada proyecto.
                                </div>

                                <CustomHoverCard>
                                  <HoverCardTrigger className="hover:brightness-0">
                                    <div className="opacity-85 text-sm px-10 py-6 relative right-10 bottom-4 md:hover:opacity-50">
                                      <Link href={"https://www.atlanticx.org"} className="md:hidden">
                                        <button className="w-full h-full">Ver más</button>
                                      </Link>
                                      <span className="hidden md:block">Ver más</span>
                                    </div>
                                  </HoverCardTrigger>
                                  <CustomHoverCardContent className="flex space-x-3 w-[550px] rounded-md px-3 py-2 bg-white/75 shadow-md">
                                    {/* Left Column */}
                                    <div className="flex flex-col justify-between space-y-3 w-full">
                                      <Avatar className="hidden">
                                        <AvatarImage src="/ATX_AVATAR.png" />
                                        <AvatarFallback>ATX</AvatarFallback>
                                      </Avatar>
                                      <div className="space-y-2 px-4 py-0">
                                        <h4 className="text-sm opacity-75">
                                          <Link href={"https://instagram.com/atlantic.x"} target="_blank">
                                            <u>@atlantic.x</u>
                                          </Link>
                                        </h4>
                                        <p className="mb-2 text-base font-bold leading-4 text-black">
                                          Lead Web Developer de Atlanticx. Plan y ejecución de una app que permite la edición "live" y versiones persistentes en GitHub.
                                        </p>
                                        <div className="flex items-center pt-1 pb-4">
                                          <CalendarDays className="mr-2 h-3 w-3 opacity-70" />{" "}
                                          <span className="text-muted-foreground text-xs mt-[0.5px]">
                                            Diciembre 2023
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Right Column */}
                                    <div className="flex flex-col items-center justify-center w-2/3 -mt-5 scale-120">
                                      {imageLoading ? (
                                        <div className="flex h-32 items-center justify-center">
                                          <ClipLoader />
                                        </div>
                                      ) : (
                                        <Link href={"https://atlanticx.org"} target="_blank">
                                          <Image
                                            src="/ATX_AVATAR.png"
                                            alt="Portada ATX"
                                            width={100} // adjust as needed
                                            height={100} // adjust as needed
                                            objectFit="cover"
                                            className="rounded-md mt-8"
                                            priority
                                            loading="eager"
                                            onLoad={() => setImageLoading(false)}
                                          />
                                        </Link>
                                      )}
                                    </div>
                                  </CustomHoverCardContent>

                                </CustomHoverCard>
                              </CustomListItem>
                            </li>
                            <li className="-mr-3 -mt-12 md:mt-0">
                              <CustomListItem title="Back">
                                <div className="mt-1 text-base font-bold leading-4 tracking-tighter">
                                  Servicio de desarrollo FullStack con Python
                                  (Django/Flask/Jinja) y Htmx. Hago MPVs y estoy
                                  estudiando Data Science de manera autónoma.
                                </div>
                                <CustomHoverCard>
                                  <HoverCardTrigger className="hover:brightness-0">
                                    <div className="opacity-85 text-sm p-6 relative right-6 bottom-4 md:hover:opacity-50">
                                      <Link href={"https://twitter-temperature.onrender.com/"} className="md:hidden">
                                        <button className="w-full h-full">Ver más</button>
                                      </Link>
                                      <span className="hidden md:block">Ver más</span>
                                    </div>
                                  </HoverCardTrigger>
                                  <CustomHoverCardContent2
                                    className="w-[450px] rounded-md px-2 py-2 shadow-md"
                                  >
                                    <div className="flex space-x-6 p-4">
                                      {/* Left Column */}
                                      <div className="flex flex-col justify-between space-y-4 w-full">
                                        <div className="space-y-2">
                                          <h4 className="text-sm text-sm opacity-75">
                                            <Link href={"https://twitter-temperature.onrender.com/"} target="_blank">
                                              <u>@OpioDeLosPueblos</u>
                                            </Link>
                                          </h4>
                                          <p className="mb-4 text-base font-bold leading-4 tracking-tighter">
                                            El proyecto{" "}
                                            <Link href={"https://twitter-temperature.onrender.com/"} target="_blank">
                                              {" "}
                                              <i>El Opio de los Pueblos</i>
                                            </Link>{" "}
                                            es un proyecto OSS que genera métricas de
                                            Twitter/X.

                                          </p>
                                          <div className="flex items-center">
                                            <CalendarDays className="mr-2 h-3 w-3 opacity-70" />{" "}
                                            <span className="text-muted-foreground text-xs">En proceso</span>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Right Column */}
                                      <div className="flex flex-col w-1/2">
                                        {imageLoading ? (
                                          <div className="flex h-32 items-center justify-center">
                                            <ClipLoader />{" "}
                                          </div>
                                        ) : (
                                          <Link href={"https://twitter-temperature.onrender.com/"} target="_blank">
                                            <Image
                                              src="/Avatar_Negro.png"
                                              alt="Portada ATX"
                                              width={100} // adjust as needed
                                              height={100} // adjust as needed
                                              objectFit="cover"
                                              className="rounded-md mt-6"
                                              loading="eager"
                                              onLoad={() => setImageLoading(false)}
                                            />
                                          </Link>
                                        )}
                                      </div>
                                    </div>

                                  </CustomHoverCardContent2>
                                </CustomHoverCard>
                              </CustomListItem>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </CustomNavigationMenu>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span className="font-bold">Sonido</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <CustomNavigationMenu open={true}>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible">
                        <NavigationMenuTrigger className="font-bold text-black w-2/3 leading-tight md:w-full">
                          En instalaciones y obras inmersivas
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="overflow-visible">
                          <ul className="grid gap-3 px-6 py-4 w-[370px] md:w-[300px] lg:w-[450px] lg:grid-cols-1 -ml-24 mt-0 md:ml-0 md:mt-0 rounded-md md:rounded-none bg-transparent shadow-md md:shadow-none">
                            <li>
                              <NavigationMenuLink>
                                <Link
                                  href="https://superuber.com/light-energy-museum-2/"
                                  className="relative flex h-full min-h-[200px] w-full select-none flex-col justify-end rounded-md p-5 no-underline outline-none focus:shadow-md"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <VideoComponent />
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <CustomListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="SuperUber (Brasil)"
                              className="pointer-events-none space-y-2 p-5 -mt-10 font-bold"
                            >
                              <i>Túnel da Light</i>: Unity + SuperCollider trackean hasta 5 usuarios en simultáneo.

                            </CustomListItem>
                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="Teatro Colón (CETC, Argentina)"
                              className="pointer-events-none space-y-2 p-5 -mt-10 font-bold"
                            >
                              Lideré más de 10 años a equipos artísticos y técnicos en el Teatro Colón (CETC).
                            </ListItem>
                          </ul>
                        </NavigationMenuContent>

                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </CustomNavigationMenu>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuGroup className="hidden md:block">
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span className="font-bold">Ahora</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <CustomNavigationMenu open={true}>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible">
                        <NavigationMenuTrigger className="text-black font-bold">
                          Estoy trabajando en este repositorio
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="overflow-visible">
                          <ul className=" md:w-[400px] lg:w-[500px]">

                            <li className="p-4 mt-2">

                              <div className="mb-2">
                                <LatestRepo />
                              </div>


                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </CustomNavigationMenu>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuGroup className="hidden md:block">
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span className="font-bold">Más...</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <CustomNavigationMenu open={true}>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible">
                        <NavigationMenuTrigger className="text-black font-bold">
                         Sobre Miguel, sus intereses.
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="overflow-visible p-6">
                          <ul className=" md:w-[300px] lg:w-[300px]">

                            <li className="text-base text-black font-bold">Originalmente académico, un "nerd", y alguien que trabaja entre las cosas, casi siempre experimentales.</li>
                            <li className="text-base text-slate-100 font-bold bg-black mt-4 p-5 rounded-md">"Mi foco está puesto en generar, accesibilizar y abogar por más relaciones entre los datos y los artistas."</li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </CustomNavigationMenu>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          rel="noopener noreferrer"
          target="_blank"
          ref={ref}
          className={cn(
            "block select-none space-y-0 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-base leading-[0.9rem] text-black dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
