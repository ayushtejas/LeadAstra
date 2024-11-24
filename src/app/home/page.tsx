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
import Navbar from '@/components/ui/navbar';
import Banner from '@/components/ui/banner';
import TopSection from '@/components/ui/topSection';
import ServicesSection from '@/components/ui/servicesSection';
import Testimonials from '@/components/ui/testimonials';
import ContentSection from '@/components/ui/contentSection';
import Footer from '@/components/ui/footer';

const Home = () => {
  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="border-b">
      <Banner></Banner>
      <Navbar></Navbar>
      <TopSection></TopSection>
      <ServicesSection/>
      <Testimonials></Testimonials>
      <ContentSection></ContentSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;