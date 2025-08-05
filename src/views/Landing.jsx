// next
import Image from 'next/image';
import Link from 'next/link';

// assets
const Logo = '/assets/images/logo-white.svg';
const DashboardImg = '/assets/images/landing/img-header-main.jpg';

// ==============================|| LANDING PAGE ||============================== //

export default function Landing() {
  return (
    <header
      id="home"
      className="bg-theme-sidebarbg dark:bg-dark-500 relative flex flex-col items-center justify-center overflow-hidden pt-[100px] pb-0 sm:pt-[180px]"
    >
      <nav className="navbar group bg-theme-sidebarbg dark:bg-themedark-cardbg fixed top-0 z-50 w-full !bg-transparent shadow-[0_0_24px_rgba(27,46,94,.05)] backdrop-blur dark:shadow-[0_0_24px_rgba(27,46,94,.05)]">
        <div className="container">
          <div className="static flex items-center justify-between py-4 sm:relative">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center justify-between">
                <a href="#">
                  <Image className="h-auto" src={Logo} alt="Your Company" width={130} height={0} />
                </a>
              </div>
              <div className="grow">
                <div className="me-3 flex flex-row justify-end space-x-2 p-0">
                  <Link
                    href="/dashboard/default"
                    target="_blank"
                    className="hidden rounded-md px-3 py-2 text-base font-medium text-white/60 transition-all hover:text-white sm:inline-block"
                  >
                    Live Preview
                  </Link>
                  <Link
                    href="https://codedthemes.com/item/datta-able-free-tailwind-nextjs-admin-template/"
                    type="button"
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 p-1 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none sm:hidden"
                  >
                    <i className="ti ti-file-text"></i>
                  </Link>
                  <Link
                    href="/dashboard/default"
                    type="button"
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 p-1 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none sm:hidden"
                  >
                    <i className="ti ti-dashboard"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/codedthemes/datta-able-free-tailwind-nextjs-admin-template"
                target="_blank"
                className="btn btn-outline-dark border-secondary-500 rounded-full text-white"
              >
                <i className="ti ti-brand-github"></i>
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://codedthemes.com/item/datta-able-tailwind-admin-template/"
                target="_blank"
                className="btn-dark btn ml-3 rounded-full"
              >
                <span className="hidden md:inline-block">Purchase Now</span> <i className="ti ti-external-link"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative z-10 container">
        <div className="mx-auto w-full text-center md:w-10/12">
          <h1 className="wow animate__fadeInUp mb-5 text-[22px] leading-[1.2] text-white md:text-[36px] lg:text-[48px]">
            Datta Able Free Tailwind CSS + Next.js Admin Template
          </h1>
          <div className="wow animate__fadeInUp">
            <div className="mx-auto sm:w-8/12">
              <p className="mb-0 text-[14px] text-white/80 sm:text-[16px]">
                Datta able is the one of the Featured admin dashboard template in CodedThemes, with over 25K+ global users across various
                technologies.
              </p>
            </div>
          </div>
          <div className="wow animate__fadeInUp my-5 sm:my-12">
            <Link
              href="/dashboard/default"
              className="btn text-dark-500 mt-1 mr-2 rounded-full border border-white bg-white hover:opacity-70 focus:opacity-70 active:opacity-70"
            >
              Live Preview
            </Link>
          </div>
          <div className="mt8 wow animate__fadeInUp sm:mt-10">
            <Image
              src={DashboardImg}
              alt="Dashboard"
              width={1200}
              height={700}
              className="w-full rounded-t-[14px] border-4 border-white shadow-[0px_-6px_10px_0px_rgba(12,21,70,0.03)]"
              priority
            />
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/landing/img-wave.svg"
        alt="Wave"
        width={1440}
        height={100}
        className="absolute right-0 bottom-0 left-0 z-10 w-full object-contain drop-shadow-[0px_-6px_10px_rgba(12,21,70,0.05)] dark:brightness-[0.1]"
        priority
      />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(0deg,rgba(0,0,0,0.5019607843),transparent)]"></div>
    </header>
  );
}
