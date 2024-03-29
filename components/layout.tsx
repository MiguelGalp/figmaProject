"use client"

import { useState, useEffect, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader'

import { Analytics } from "@vercel/analytics/react"

import { SiteHeader } from "@/components/site-header"
import ContactForm from "./contact_form"
import { SiteFooter } from "./footer"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Separator } from "./ui/separator"


interface LayoutProps {
  children: React.ReactNode
}

// Define the CSS override for the spinner
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


export function Layout({ children }: LayoutProps) {
  const [loaded, setLoaded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [color, setColor] = useState("#ffffff"); // You can set this to any color you prefer

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== 'undefined') {
      setIsSmallScreen(window.innerWidth <= 640);

      // Listen for window resize events
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 640);
      };
      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div id="cuerpo" className={`transition-opacity duration-1000 ease-in-out ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {!videoLoaded && (
        <div className="sweet-loading">
          {/* Spinner from react-spinners */}
          <ClipLoader
            color={color}
            loading={!videoLoaded}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="opacity-100" style={{ display: "flex", flexDirection: "column", minHeight: "100vh"}}>
        <div
          className=""
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
        >
          <video 
          id="myVideo"
          preload='auto'
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onLoadedData={handleVideoLoad}
        >
          <source src={isSmallScreen ? "/nuevo_loop.mp4" : "/nuevo_loop.mp4"} type="video/mp4" />
          Oops, tu navegador...uhm...
        </video>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Dialog>
            <DialogTrigger className="relative md:left-5 z-10">
              <Button className="text-bold bg-opacity-50 text-base text-slate-100">
                Contacto
              </Button>
            </DialogTrigger>
            <div className="flex items-center justify-center bg-white">
              <DialogContent className="sm:max-w-[425px]">
                <div className="flex space-x-6">
                  <div className="space-y-1">
                    <h4 className="font-base text-lg font-extrabold leading-none text-black">
                      MIGUEL GALPERIN
                    </h4>
                    <p className="text-sm text-black opacity-75 dark:text-slate-400">
                      Desarrollador Fullstack: Figma a Python, Figma a React...
                    </p>
                  </div>
                </div>
                <Separator className="bg-black bg-opacity-75" />
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 items-center gap-4">
                    <Label htmlFor="name" className=""></Label>
                  </div>
                  <div className="-ml[1px] mb-16 w-full">
                    <div className="rounded-md bg-transparent p-6">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </DialogContent>
            </div>
          </Dialog>
        </div>
        <SiteHeader toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen} />
        <main style={{ flex: 1 }}>{children}</main>
        <Analytics />
        <SiteFooter />
      </div>
    </div>
  )
}
