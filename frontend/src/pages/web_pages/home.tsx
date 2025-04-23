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
  FeaturesDesigns,
  AboutUsDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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

  const features_points = [
    {
      name: 'Lead Management',
      description:
        'Efficiently track and manage leads with real-time updates. Categorize and assign leads to ensure no opportunity is missed.',
      icon: 'mdiAccountMultiple',
    },
    {
      name: 'Integrated Communication',
      description:
        'Seamlessly connect with clients and team members. Access all communication history in one place for better collaboration.',
      icon: 'mdiMessageText',
    },
    {
      name: 'Performance Analytics',
      description:
        "Gain insights into your firm's performance with detailed analytics. Make informed decisions to drive growth and success.",
      icon: 'mdiChartLine',
    },
  ];

  const testimonials = [
    {
      text: "${projectName} has transformed our workflow, making it easier to manage client interactions and track leads. It's a game-changer for our firm!",
      company: 'Lexis Solutions',
      user_name: 'John Doe, Senior Partner',
    },
    {
      text: 'The integration capabilities of ${projectName} have streamlined our communication across departments, enhancing our overall efficiency.',
      company: 'Legal Innovators',
      user_name: 'Jane Smith, Operations Manager',
    },
    {
      text: "With ${projectName}, we can now focus more on our clients and less on administrative tasks. It's a must-have for any law firm.",
      company: 'Justice Partners',
      user_name: 'Emily Johnson, Client Relations',
    },
    {
      text: 'The analytics feature in ${projectName} provides us with valuable insights, helping us make informed decisions to grow our business.',
      company: 'Advocate Alliance',
      user_name: 'Michael Brown, Marketing Director',
    },
    {
      text: 'Our team loves the user-friendly interface of ${projectName}. It has made managing our cases and client data so much easier.',
      company: 'Barrister Group',
      user_name: 'Sarah Lee, Legal Assistant',
    },
    {
      text: 'Thanks to ${projectName}, our firm has seen a significant improvement in client satisfaction and team collaboration.',
      company: 'Counsel Connect',
      user_name: 'David Wilson, Customer Service Lead',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`CRM Solutions for the Law Industry | Connect & Optimize`}</title>
        <meta
          name='description'
          content={`Discover our CRM app tailored for the law industry, designed to connect departments, streamline operations, and enhance client interactions. Explore features, testimonials, and get in touch today.`}
        />
      </Head>
      <WebSiteHeader projectName={'test32'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test32'}
          image={['Law professionals collaborating efficiently']}
          mainText={`Revolutionize Your Law Firm's CRM`}
          subTitle={`Experience seamless integration with ${projectName}, the CRM tailored for the law industry. Connect departments, streamline operations, and enhance client interactions effortlessly.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'test32'}
          image={['Dashboard showcasing CRM features']}
          withBg={0}
          features={features_points}
          mainText={`Unlock Your Firm's Potential with ${projectName}`}
          subTitle={`Discover how ${projectName} can transform your law firm's operations with these powerful features.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'test32'}
          image={['Team collaborating in modern office']}
          mainText={`Empowering Law Firms with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to revolutionizing the legal industry by providing a comprehensive CRM solution. Our mission is to streamline operations, enhance client interactions, and drive success for law firms worldwide.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <TestimonialsSection
          projectName={'test32'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'test32'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on a laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime for inquiries or support. Our team at ${projectName} is here to assist you promptly and efficiently.`}
        />
      </main>
      <WebSiteFooter projectName={'test32'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
