import React from 'react';
import Hero from '../components/Hero';
import Industries from '../components/Industries';
import WhyChooseUs from '../components/WhyChooseUs';
import GlobalReach from '../components/GlobalReach';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <Industries />
      <GlobalReach />
      <Testimonials />
    </div>
  );
}