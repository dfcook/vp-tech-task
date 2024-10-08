import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const categories = [
  {
    name: 'bathroom-suites',
    displayName: 'Suites',
  },
  {
    name: 'toilets',
    displayName: 'Toilets',
  },
  {
    name: 'basins',
    displayName: 'Basins',
  },
  {
    name: 'baths',
    displayName: 'Baths',
  },
  {
    name: 'bathroom-furniture',
    displayName: 'Furniture',
  },
  {
    name: 'showers',
    displayName: 'Showers',
  },
  {
    name: 'shower-enclosures',
    displayName: 'Shower Enclosures',
  },
  {
    name: 'taps',
    displayName: 'Taps',
  },
  {
    name: 'bathroom-accessories',
    displayName: 'Accessories',
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-300 `}>
        <NavigationMenu className="w-full max-w-full flex align-middle py-2">
          <NavigationMenuList>
            {categories.map((category) => (
              <NavigationMenuItem key={category.name}>
                <Link href={`/${category.name}`} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} capitalize`}
                  >
                    {category.displayName}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {children}
      </body>
    </html>
  )
}
