import PropTypes from 'prop-types';
// next
import { usePathname } from 'next/navigation';

import { useCallback, useEffect, useState } from 'react';

// project imports
import SimpleBarScroll from '@/components/third-party/SimpleBar';

// project imports
import Navigation from './Navigation';
import menuItems from '@/menu-items';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

export default function DrawerContent({ selectedItems, setSelectedItems }) {
  const [selectTab, setSelectTab] = useState(menuItems.items[0]);

  const pathname = usePathname();

  const isActive = useCallback(
    (item) => {
      if (!item.url) return false;
      return pathname.toLowerCase().includes(item.url.toLowerCase());
    },
    [pathname]
  );

  const autoOpenParents = useCallback(
    (items) => {
      const openMap = {};

      const findAndMark = (entries = []) => {
        entries.forEach((item) => {
          if (item.children) {
            const match = item.children.find((child) => isActive(child) || child.children?.some(isActive));
            if (match) openMap[item.id] = true;

            findAndMark(item.children);
          }
        });
      };

      findAndMark(items);
    },
    [isActive]
  );

  useEffect(() => {
    autoOpenParents(selectTab?.children);
  }, [autoOpenParents, selectTab]);

  return (
    <SimpleBarScroll style={{ height: 'calc(100vh - 74px)' }}>
      <Navigation selectedItems={selectedItems} setSelectedItems={setSelectedItems} setSelectTab={setSelectTab} />
    </SimpleBarScroll>
  );
}

DrawerContent.propTypes = { selectedItems: PropTypes.any, setSelectedItems: PropTypes.oneOfType([PropTypes.any, PropTypes.func]) };
