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
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

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

  const features_points = [
    {
      name: 'Client Management',
      description:
        'Effortlessly manage client information and interactions in one centralized platform. Enhance client relationships with organized data and seamless communication.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Task Automation',
      description:
        'Automate routine tasks to save time and reduce errors. Focus on what matters most while ${projectName} handles the repetitive work.',
      icon: 'mdiRobot',
    },
    {
      name: 'Document Management',
      description:
        'Securely store and manage legal documents with ease. Access files anytime, anywhere, ensuring your team stays productive and informed.',
      icon: 'mdiFileDocumentOutline',
    },
    {
      name: 'Analytics \u0026 Reporting',
      description:
        "Gain insights into your firm's performance with comprehensive analytics. Make data-driven decisions to optimize operations and drive growth.",
      icon: 'mdiChartBar',
    },
    {
      name: 'Customizable Workflows',
      description:
        "Tailor workflows to fit your firm's unique needs. Adapt ${projectName} to your processes for maximum efficiency and effectiveness.",
      icon: 'mdiCogOutline',
    },
    {
      name: 'Secure Communication',
      description:
        'Ensure confidential client communications with robust security features. Protect sensitive information and maintain trust with your clients.',
      icon: 'mdiLockOutline',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has revolutionized our client management process. The intuitive interface and robust features have made our operations smoother and more efficient.',
      company: 'Legal Visionaries',
      user_name: 'Anna Roberts, Managing Partner',
    },
    {
      text: 'The task automation feature in ${projectName} has saved us countless hours. Our team can now focus on strategic tasks rather than mundane ones.',
      company: 'Justice Innovators',
      user_name: 'Mark Thompson, Operations Manager',
    },
    {
      text: 'With ${projectName}, we have complete control over our document management. Accessing files is quick and secure, which is crucial for our firm.',
      company: 'Advocate Solutions',
      user_name: 'Emily Clark, Senior Attorney',
    },
    {
      text: "The analytics provided by ${projectName} have been a game-changer. We can now make informed decisions that drive our firm's growth.",
      company: 'Barrister Group',
      user_name: 'James White, Marketing Director',
    },
    {
      text: "Customizable workflows in ${projectName} have allowed us to tailor the system to our needs. It's like having a CRM built just for us.",
      company: 'Counsel Connect',
      user_name: 'Sarah Lee, IT Specialist',
    },
    {
      text: 'The secure communication feature in ${projectName} gives us peace of mind. We know our client interactions are protected and confidential.',
      company: 'Lexis Partners',
      user_name: 'David Brown, Client Relations Lead',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services | Enhance Your Legal Operations`}</title>
        <meta
          name='description'
          content={`Explore the comprehensive services offered by our CRM solution tailored for the law industry. Discover how we can streamline your operations and improve client interactions.`}
        />
      </Head>
      <WebSiteHeader projectName={'test32'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'test32'}
          image={['Law firm team in discussion']}
          mainText={`Transform Your Legal Services with ${projectName}`}
          subTitle={`Discover the range of services offered by ${projectName} to streamline your legal operations. Enhance efficiency, improve client interactions, and drive success with our tailored CRM solutions.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'test32'}
          image={['Dashboard with CRM features']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName} Features for Legal Excellence`}
          subTitle={`Uncover the powerful features of ${projectName} designed to elevate your legal practice. Streamline operations and enhance client satisfaction with our innovative solutions.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'test32'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Client Success Stories with ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'test32'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
