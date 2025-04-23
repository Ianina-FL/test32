import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  AboutUsDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'test32';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has been a game-changer for our firm. The seamless integration and user-friendly interface have significantly improved our workflow.',
      company: 'Legal Pioneers',
      user_name: 'Alice Thompson, Managing Partner',
    },
    {
      text: "Thanks to ${projectName}, our team can now focus more on client relationships and less on administrative tasks. It's a must-have tool!",
      company: 'Justice Innovators',
      user_name: 'Robert Green, Client Relations Manager',
    },
    {
      text: 'The analytics provided by ${projectName} have given us invaluable insights into our operations, helping us make data-driven decisions.',
      company: 'Advocate Solutions',
      user_name: 'Linda White, Operations Director',
    },
    {
      text: 'Our communication across departments has never been better. ${projectName} has truly streamlined our processes and improved efficiency.',
      company: 'Barrister Connect',
      user_name: 'James Brown, IT Specialist',
    },
    {
      text: 'The support team at ${projectName} is exceptional. They are always ready to assist and ensure we get the most out of the platform.',
      company: 'Counsel Partners',
      user_name: 'Emma Wilson, Customer Support Lead',
    },
    {
      text: "Implementing ${projectName} was one of the best decisions we've made. It has transformed the way we manage our cases and client data.",
      company: 'Lexis Group',
      user_name: 'Michael Davis, Senior Attorney',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us | Discover Our Mission & Values`}</title>
        <meta
          name='description'
          content={`Learn more about our mission, values, and the team behind our innovative CRM solutions for the law industry. Explore client testimonials and our journey to revolutionize legal operations.`}
        />
      </Head>
      <WebSiteHeader projectName={'test32'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test32'}
          image={['Team brainstorming in modern office']}
          mainText={`Meet the Visionaries Behind ${projectName}`}
          subTitle={`Discover the passion and dedication driving ${projectName}. Our mission is to empower law firms with cutting-edge CRM solutions that streamline operations and enhance client relationships.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Learn More About Us`}
        />

        <AboutUsSection
          projectName={'test32'}
          image={['Team members discussing project goals']}
          mainText={`Our Journey with ${projectName}`}
          subTitle={`At ${projectName}, we are committed to transforming the legal industry with innovative CRM solutions. Our team is dedicated to providing tools that enhance efficiency and client satisfaction.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Discover Our Story`}
        />

        <TestimonialsSection
          projectName={'test32'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL_DIVERSITY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied Clients `}
        />
      </main>
      <WebSiteFooter projectName={'test32'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
