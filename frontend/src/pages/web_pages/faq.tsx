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
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = '321';

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

  const faqs = [
    {
      question: 'What is ${projectName} and how does it benefit law firms?',
      answer:
        '${projectName} is a CRM solution tailored for the law industry. It streamlines operations by integrating client management, task automation, and secure communication, enhancing efficiency and client satisfaction.',
    },
    {
      question: 'How secure is the data stored in ${projectName}?',
      answer:
        '${projectName} employs robust security measures, including encryption and access controls, to ensure that all client data and communications are protected and confidential.',
    },
    {
      question: "Can ${projectName} be customized to fit our firm's needs?",
      answer:
        "Yes, ${projectName} offers customizable workflows and features, allowing you to tailor the system to your firm's unique processes and requirements.",
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        'Our dedicated support team is available to assist you with any inquiries or technical issues. We provide prompt responses to ensure you get the most out of ${projectName}.',
    },
    {
      question: 'Is there a trial period available for ${projectName}?',
      answer:
        'Yes, we offer a trial period for new users to explore the features and benefits of ${projectName}. Contact us to learn more about starting your trial.',
    },
    {
      question: 'How does ${projectName} handle document management?',
      answer:
        '${projectName} provides a secure and efficient document management system, allowing you to store, access, and manage legal documents with ease, ensuring your team stays productive.',
    },
    {
      question: 'What analytics features are available in ${projectName}?',
      answer:
        "${projectName} offers comprehensive analytics and reporting tools, providing insights into your firm's performance and helping you make data-driven decisions to optimize operations.",
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`FAQ | Frequently Asked Questions about ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our CRM solutions and how they can benefit your law firm.`}
        />
      </Head>
      <WebSiteHeader projectName={'321'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'321'}
          image={['Person reading FAQ on tablet']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Learn how our CRM solutions can enhance your legal operations.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'321'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions about ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'321'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
