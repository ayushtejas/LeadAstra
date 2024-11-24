"use client"
import React from 'react';
import {
  Card,
  CardContent,
} from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Progress } from "../../components/ui/progress";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowUpRight } from 'lucide-react';

// Review data
const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, TechCorp',
    review: 'This service has significantly boosted our lead generation efforts. We saw an increase in conversions within the first month!',
  },
  {
    name: 'Jane Smith',
    title: 'Marketing Director, SoftSolutions',
    review: 'The teams approach to cold email and LinkedIn outreach is second to none. They truly understand how to generate quality leads.',
  },
  {
    name: 'Alice Brown',
    title: 'Founder, EcoGoods',
    review: 'We have been extremely satisfied with the results. The appointment setters have been pivotal in getting us in front of the right decision-makers.',
  },
];

// Stats data
const stats = [
  {
    label: 'Leads Generated',
    value: '10,000+',
    progress: 85,
    trend: '+12% from last month'
  },
  {
    label: 'Clients Served',
    value: '200+',
    progress: 70,
    trend: '+5% from last month'
  },
  {
    label: 'Conversions Increased',
    value: '50%',
    progress: 50,
    trend: '+8% from last month'
  },
  {
    label: 'Years of Experience',
    value: '5+',
    progress: 90,
    trend: 'Growing strong'
  },
];

const Testimonials = () => {
  const [api] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="py-12 px-6 md:px-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Stats Section (Dashboard-like) */}
        <div>
          <h2 className="text-3xl font-extrabold text-blue-600 mb-6">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                    </div>
                    <ArrowUpRight className="text-green-500" size={24} />
                  </div>
                  <Progress value={stat.progress} className="my-2" />
                  <p className="text-sm text-gray-600 mt-2">{stat.trend}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reviews Section (Carousel) */}
        <div className='mx-4'>
          <h2 className="text-3xl font-extrabold text-blue-600 mb-6">What Our Clients Say</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-6">
                    <CardContent className="space-y-4">
                      <p className="text-lg text-gray-600 italic">"{testimonial.review}"</p>
                      <div>
                        <p className="font-semibold text-blue-600">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;