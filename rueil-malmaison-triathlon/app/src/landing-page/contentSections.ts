import type { NavigationItem } from '../client/components/NavBar/NavBar';
import { DocsUrl, BlogUrl } from '../shared/common';
import { routes } from 'wasp/client/router';
import daBoiAvatar from '../client/static/da-boi.webp';
import avatarPlaceholder from '../client/static/avatar-placeholder.webp';

export const landingPageNavigationItems: NavigationItem[] = [
  { name: 'About Us', to: routes.AboutUsRoute.to },
  { name: 'Our Services', to: routes.PricingPageRoute.to },
];
export const features = [  
  {  
    name: 'Pack 1',  
    description: 'Break into interviews',  
    icon: '🏊',  
    href: DocsUrl,  
  },  
  {  
    name: 'Pack 2',  
    description: 'Interviews master',  
    icon: '🚴',  
    href: DocsUrl,  
  },  
  {  
    name: 'Pack 3',  
    description: 'Modelling master',  
    icon: '🏃',  
    href: DocsUrl,  
  },  
  {  
    name: 'Triathlon',  
    description: 'Combine les trois disciplines pour relever de nouveaux défis.',  
    icon: '🏅',  
    href: DocsUrl,  
  },  
];

export const testimonials = [
  {
    name: 'Da Boi',
    role: 'Wasp Mascot',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://twitter.com/wasplang',
    quote: "I don't even know how to code. I'm just a plushie.",
  },
  {
    name: 'Mr. Foobar',
    role: 'Founder @ Cool Startup',
    avatarSrc: avatarPlaceholder,
    socialUrl: '',
    quote: 'This product makes me cooler than I already am.',
  },
  {
    name: 'Jamie',
    role: 'Happy Customer',
    avatarSrc: avatarPlaceholder,
    socialUrl: '#',
    quote: 'My cats love it!',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Whats the meaning of life?',
    answer: '42.',
    href: 'https://en.wikipedia.org/wiki/42_(number)',
  },
];
export const footerNavigation = {
  app: [
    { name: 'Les Horaires', href: '#horaires' }, // Remplacez par la page des horaires
    { name: 'Les Lieux', href: '/lieux' }, // Remplacez par la page des lieux
  ],
  company: [
    { name: 'Mentions Légales', href: '/mentions-legales' }, // Remplacez par la page des mentions légales
  ],
};
