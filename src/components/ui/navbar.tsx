import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '../../components/ui/sheet';
import { Button } from '../../components/ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const Navbar = () => {
  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
<nav className="sticky top-0 sm:top-16 z-50 border-b bg-indigo-200 shadow-sm">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                alt="LeadAstra logo"
                width={120}
                height={100}
                src="/logo.png"
                className="h-15 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-indigo-900 hover:text-white px-4 py-2 rounded-md text-lg font-bold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-50 shadow-lg">
                <VisuallyHidden>
                  <SheetTitle>Mobile Navigation Menu</SheetTitle>
                </VisuallyHidden>
                <div className="flex items-center justify-between">
                  <Image
                    alt="LeadAstra logo"
                    width={120}
                    height={120}
                    src="/logo.png"
                    className="h-14 w-auto"
                  />
                </div>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
