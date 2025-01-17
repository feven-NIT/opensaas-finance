interface NavigationItem {
  name: string;
  href: string;
};

export default function Footer({ footerNavigation }: {
  footerNavigation: {
    app: NavigationItem[];
    company: NavigationItem[];
  };
}) {
  return (
    <div className='lg:px-8 bg-[#020048] text-white'>
      <footer
        aria-labelledby='footer-heading'
        className='relative border-t border-gray-900/10 py-24 sm:mt-32'
      >
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='text-center mb-10'>
          <h3 className='text-2xl font-semibold'>
            Future Crafters
          </h3>
          <p className='mt-2 text-sm'>
            Greenwood Lane, Hawthorn Hill, Kent, CT12 4YZ01234567890
          </p>
        </div>
      </footer>
    </div>
  );
}
