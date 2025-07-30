// next
import Link from 'next/link';

// =============================|| FOOTER ||============================== //

export default function Footer() {
  return (
    <footer className="pc-footer">
      <div className="footer-wrapper container-fluid mx-10">
        <div className="grid grid-cols-12 gap-1.5">
          <div className="col-span-12 my-1 md:col-span-6">
            <p className="m-0">
              <Link
                href="https://codedthemes.com/"
                target="_blank"
                className="text-theme-bodycolor dark:text-themedark-bodycolor hover:text-primary-500 dark:hover:text-primary-500"
              >
                CodedThemes
              </Link>
              , Built with ♥ for a smoother web presence.
            </p>
          </div>
          <div className="col-span-12 my-1 md:col-span-6">
            <ul className="*:text-theme-bodycolor dark:*:text-themedark-bodycolor *:hover:text-primary-500 dark:*:hover:text-primary-500 mb-0 ltr:sm:text-right rtl:sm:text-left">
              <li className="inline-block max-sm:mr-2 sm:ml-2">
                <Link href="/">Home</Link>
              </li>
              <li className="inline-block max-sm:mr-2 sm:ml-2">
                <Link href="https://codedthemes.gitbook.io/datta/datta-able-tailwind" target="_blank">
                  Documentation
                </Link>
              </li>
              <li className="inline-block max-sm:mr-2 sm:ml-2">
                <Link href="https://codedthemes.support-hub.io/" target="_blank">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
