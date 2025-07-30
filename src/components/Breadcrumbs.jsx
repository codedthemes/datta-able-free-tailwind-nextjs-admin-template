'use client';
// next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useState, useEffect, useCallback } from 'react';

// project-imports
import navigation from '@/menu-items';

// ==============================|| MAIN BREADCRUMB ||============================== //

export default function Breadcrumbs() {
  const pathname = usePathname();

  const [main, setMain] = useState({});
  const [item, setItem] = useState({});

  const getCollapse = useCallback(
    (item) => {
      if (item.children) {
        item.children.forEach((collapse) => {
          if (collapse.type === 'collapse') {
            getCollapse(collapse);
          } else if (collapse.type === 'item' && pathname === collapse.url) {
            setMain({
              type: 'collapse',
              title: typeof item.title === 'string' ? item.title : undefined
            });
            setItem({
              type: 'item',
              title: typeof collapse.title === 'string' ? collapse.title : undefined,
              breadcrumbs: collapse.breadcrumbs !== false
            });
          }
        });
      }
    },
    [pathname]
  );

  useEffect(() => {
    navigation.items.forEach((navItem) => {
      if (navItem.type === 'group') {
        getCollapse(navItem);
      }
    });
  }, [pathname, getCollapse]);

  let mainContent;
  let itemContent;
  let breadcrumbContent;
  let title = '';

  if (main?.type === 'collapse') {
    mainContent = <li className="breadcrumb-item">{main.title}</li>;
  }

  if (item?.type === 'item') {
    title = item.title ?? '';
    itemContent = (
      <li className="breadcrumb-item">
        <Link href="#" className="text-capitalize">
          {title}
        </Link>
      </li>
    );

    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <div className="page-header">
          <div className="page-block">
            <div className="page-header-title">
              <h5 className="mb-0 font-medium">{title}</h5>
            </div>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              {mainContent}
              {itemContent}
            </ul>
          </div>
        </div>
      );
    }
  }

  return <>{breadcrumbContent}</>;
}
