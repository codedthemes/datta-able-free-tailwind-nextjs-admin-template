import PropTypes from 'prop-types';
import AuthLayout from '@/layout/Auth';

// ==============================|| DASHBOARD LAYOUT ||============================== //

export default function Layout({ children }) {
  return <AuthLayout>{children}</AuthLayout>;
}

Layout.propTypes = { children: PropTypes.node };
