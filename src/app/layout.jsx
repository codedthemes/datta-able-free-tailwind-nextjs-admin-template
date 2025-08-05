import PropTypes from 'prop-types';
import { Open_Sans } from 'next/font/google';

// CSS
import './globals.css';

// Fonts
const fontOpenSans = Open_Sans({
  subsets: ['latin'],
  style: 'normal',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Datta Able - Next.js Tailwind Admin Template',
  description: 'Download Datta Able Tailwind CSS Template, a premium Tailwind CSS Admin Template developed by CodedThemes.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontOpenSans.className} antialiased`}>{children}</body>
    </html>
  );
}

RootLayout.propTypes = { children: PropTypes.any };
