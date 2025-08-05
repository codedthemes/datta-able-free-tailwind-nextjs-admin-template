'use client';

import PropTypes from 'prop-types';

import { Fragment, useCallback, useEffect, useState } from 'react';

// next
import { usePathname } from 'next/navigation';

// project imports
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';

// ==============================|| NAVIGATION - GROUP ||============================== //

export default function NavGroup({
  item,
  lastItem,
  remItems,
  lastItemId,
  setSelectedID,
  setSelectedItems,
  selectedItems,
  setSelectedLevel,
  selectedLevel
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentItem, setCurrentItem] = useState(item);
  const pathname = usePathname();
  const openMini = Boolean(anchorEl);

  useEffect(() => {
    if (lastItem && item.id === lastItemId) {
      const updatedItem = { ...item };
      const combinedChildren = remItems.flatMap((ele) => ele?.children || []);
      updatedItem.children = combinedChildren;
      setCurrentItem(updatedItem);
    } else {
      setCurrentItem(item);
    }
  }, [item, lastItem, lastItemId, remItems]);

  const checkOpenForParent = useCallback(
    (children, id) => {
      children.forEach((ele) => {
        if (ele.children?.length) {
          checkOpenForParent(ele.children, currentItem.id);
        }

        const path = ele.link || ele.url;
        if (path && pathname.startsWith(path)) {
          setSelectedID(id);
        }
      });
    },
    [pathname, currentItem.id, setSelectedID]
  );

  const checkSelectedOnload = useCallback(
    (data) => {
      const children = data.children ?? [];
      children.forEach((itemCheck) => {
        if (!itemCheck) return;

        if (itemCheck.children?.length) {
          checkOpenForParent(itemCheck.children, currentItem.id);
        }

        const path = itemCheck.link || itemCheck.url;
        if (path && pathname.startsWith(path)) {
          setSelectedID(currentItem.id);
        }
      });
    },
    [pathname, currentItem.id, checkOpenForParent, setSelectedID]
  );

  useEffect(() => {
    checkSelectedOnload(currentItem);
    if (openMini) setAnchorEl(null);
  }, [pathname, currentItem, checkSelectedOnload, openMini]);

  const navCollapse = currentItem.children?.map((menuItem, index) => {
    const key = menuItem.id || `${menuItem.type}-${index}`;
    switch (menuItem.type) {
      case 'collapse':
        return (
          <NavCollapse
            key={key}
            menu={menuItem}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            level={1}
            parentId={currentItem.id}
          />
        );
      case 'item':
        return <NavItem key={key} item={menuItem} level={1} />;
      default:
        return (
          <h6 key={`fix-${index}`} className="text-center text-red-500">
            Fix - Group Collapse or Items
          </h6>
        );
    }
  });

  return (
    <Fragment>
      <li className="pc-item pc-caption" key={item.id}>
        <label>{item.title}</label>
      </li>
      {navCollapse}
    </Fragment>
  );
}

NavGroup.propTypes = {
  item: PropTypes.any,
  lastItem: PropTypes.number,
  remItems: PropTypes.array,
  lastItemId: PropTypes.string,
  setSelectedID: PropTypes.oneOfType([PropTypes.any, PropTypes.func]),
  setSelectedItems: PropTypes.oneOfType([PropTypes.any, PropTypes.func]),
  selectedItems: PropTypes.any,
  setSelectedLevel: PropTypes.func,
  selectedLevel: PropTypes.number
};
