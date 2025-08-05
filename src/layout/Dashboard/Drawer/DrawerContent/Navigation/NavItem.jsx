'use client';

import PropTypes from 'prop-types';

// next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// project imports
import { handlerDrawerOpen } from '@/api/menu';

// ==============================|| NAVIGATION - ITEM ||============================== //

export default function NavItem({ item }) {
  const pathname = usePathname();
  const itemPath = item?.link || item?.url;

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  const isSelected = itemPath ? pathname === itemPath : false;

  return (
    <li className={`pc-item ${isSelected ? 'active' : ''}`}>
      <Link
        href={item?.url || '#'}
        className="pc-link"
        target={itemTarget}
        onClick={() => {
          handlerDrawerOpen(false);
        }}
      >
        {item?.icon && (
          <span className="pc-micon">
            <i className={item.icon} />
          </span>
        )}
        {item?.title && <span className="pc-mtext">{item.title}</span>}
      </Link>
    </li>
  );
}

NavItem.propTypes = { item: PropTypes.any };
