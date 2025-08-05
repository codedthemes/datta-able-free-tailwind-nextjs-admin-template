'use client';

import PropTypes from 'prop-types';

// project imports
import Breadcrumbs from '@/components/Breadcrumbs';
import MainDrawer from './Drawer';
import Footer from './Footer';
import Header from './Header';

// ==============================|| DASHBOARD LAYOUT ||============================== //

export default function DashboardLayout({ children }) {
  return (
    <>
      <MainDrawer />
      <Header />
      <div className="pc-container">
        <div className="pc-content">
          <Breadcrumbs />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

DashboardLayout.propTypes = { children: PropTypes.node };
