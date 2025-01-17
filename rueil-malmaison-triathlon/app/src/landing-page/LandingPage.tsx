import { features, faqs, footerNavigation, testimonials } from './contentSections';
import Hero from './components/Hero';
import Clients from './components/Trainers';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DiscoverTraining from './components/DiscoverTraining';
import Alumnies from './components/Alumnies';
import Trainers from './components/Trainers';
import Presentation from './components/Presentations';
import JoinBank from './components/Joinbank';
import Packages from './components/Packages';

export default function LandingPage() {
  return (
    <div className='bg-white dark:text-white dark:bg-boxdark-2'>
      <main className='isolate dark:bg-boxdark-2'>
        <Hero />
        <Presentation />
        <DiscoverTraining />
        <Alumnies />
        <JoinBank />
        <Trainers />
        <Packages />
      </main>
      <Footer footerNavigation={footerNavigation} />
    </div>
  );
}
