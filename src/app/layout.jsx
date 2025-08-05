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
  title: 'Free Tailwind CSS + Next.js Admin Template - CodedThemes',
  description:
    'Datta Able, a free Tailwind CSS + NextJS admin template to build your project faster, better and deliver the ultimate user experience.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontOpenSans.className} antialiased`}>{children}</body>
    </html>
  );
}

RootLayout.propTypes = { children: PropTypes.any };
