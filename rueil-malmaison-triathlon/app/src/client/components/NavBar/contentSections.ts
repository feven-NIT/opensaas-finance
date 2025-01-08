import type { NavigationItem } from '../NavBar/NavBar';
import { routes } from 'wasp/client/router';
import { BlogUrl, DocsUrl } from '../../../shared/common';

export const appNavigationItems: NavigationItem[] = [
  { name: 'Mes Documents', to: routes.FileUploadRoute.to },
  { name: 'Inscriptions', to: routes.PricingPageRoute.to },
];
