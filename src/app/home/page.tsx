import React from 'react';
import Navbar from '@/components/ui/navbar';
import Banner from '@/components/ui/banner';
import TopSection from '@/components/ui/topSection';
import ServicesSection from '@/components/ui/servicesSection';
import Testimonials from '@/components/ui/testimonials';
import ContentSection from '@/components/ui/contentSection';
import Footer from '@/components/ui/footer';
import FloatingIcons from '@/components/ui/floating';

const Home = () => {

  return (
    <div className="border-b">
      <Banner></Banner>
      <Navbar></Navbar>
      <TopSection></TopSection>
      <ServicesSection/>
      <Testimonials></Testimonials>
      <ContentSection></ContentSection>
      <Footer></Footer>
      <FloatingIcons></FloatingIcons>
    </div>
  );
};

export default Home;