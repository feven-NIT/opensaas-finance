import type { NavigationItem } from '../NavBar/NavBar';
import { routes } from 'wasp/client/router';
import { BlogUrl, DocsUrl } from '../../../shared/common';

export const appNavigationItems: NavigationItem[] = [
  { name: 'About Us', to: routes.AboutUsRoute.to },
  { name: 'Our Services', to: routes.PricingPageRoute.to },
  { name: 'Break Into Interviews', to: routes.BreakIntoInterviewsRoute.to },
  { name: 'Interviews Master', to: routes.InterviewsMasterRoute.to },
  { name: 'Modelling Master', to: routes.ModellingMasterRoute.to },
];

