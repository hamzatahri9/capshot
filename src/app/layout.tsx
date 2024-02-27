import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Heart } from "../components/icons/Heart";
import Link from "next/link";
import { Guestbook } from "@/components/icons/guestbook";
import {useState} from 'react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BoomSnap",
  description: "BoomSnap Gallery",
};

function SideMenu() {

  return (
  <div className="pb-12 w-1/4">
  <div className="space-y-4 py-4 ">
    <div className="px-3 py-2">
      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
        Manage
      </h2>
      <div className="space-y-1">
        <Link href="/gallery">
        <Button variant="ghost" className="w-full justify-start flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          Gallery
        </Button>
        </Link>
        <Link href="/albums">
        <Button variant="ghost" className="w-full justify-start flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
        </svg>
          Albums
        </Button>
        </Link>
        <Link href="/favorites">
        <Button variant="ghost" className="w-full justify-start flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
           <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
          Favorites
        </Button>
        </Link>
        <Link href="/guestbook">
        <Button variant="ghost" className="w-full justify-start flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
          Guestbook
        </Button>
        </Link>
      </div>
    </div>
   </div>
 </div>
 )
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
      <div className="border-b ">
          <div className="flex h-16 items-center px-4 container mx-auto">
            BoomSnap
            <div>
            </div>
            {/* <TeamSwitcher />
            <MainNav className="mx-6" /> */}
            <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
              {/* <Search />
              <UserNav /> */}
            </div>
          </div>
        </div>
        <div className="flex">
          <SideMenu/>
        <div className="w-full px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
