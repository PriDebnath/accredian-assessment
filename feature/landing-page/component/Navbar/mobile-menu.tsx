"use client"

import * as React from "react"
import Link from "next/link"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NAVIGATION_ITEMS, type PAGE_ITEMS } from "@/constants"
import { CrossMenuSvg, MenuSvg } from "./svg"

interface Props {
  active: keyof typeof PAGE_ITEMS;
  handleNavClick: (key: keyof typeof PAGE_ITEMS) => void
}

export default function MobileMenu(props: Props) {
  let { active, handleNavClick } = props

  return (
    <NavigationMenu
    >
      <NavigationMenuList>
        <NavigationMenuItem value="mobile-menu">
          <NavigationMenuTrigger
            render={<MenuSvg />}
          >
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid text-left" >
              {
                NAVIGATION_ITEMS?.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="relative px-4 py-2 text-sm font-medium text-left"
                    >
                      <span
                        className={`relative capitalize text-base z-10 
                          ${isActive ? "text-primary font-semibold" : "text-black"}
                          ${isActive ? " border-transparent border-b-primary border-2" : "border-transparent"}
                          `}
                      >
                        {item.id}
                      </span>
                    </button>
                  )
                })
              }
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

