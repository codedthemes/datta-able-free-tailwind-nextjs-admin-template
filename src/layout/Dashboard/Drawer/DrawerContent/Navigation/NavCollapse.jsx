'use client';

import PropTypes from 'prop-types';

import { useEffect, useState, useMemo, useCallback } from 'react';

// next
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// project imports
import NavItem from './NavItem';
import { useGetMenuMaster } from '@/api/menu';

// ==============================|| NAVIGATION - COLLAPSE ||============================== //

export default function NavCollapse({ menu, level, parentId, setSelectedItems, selectedItems, setSelectedLevel, selectedLevel }) {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClick = (isRedirect) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;
    setSelectedLevel(level);

    if (isMobile || !drawerOpen) {
      const isNew = !selected;
      setOpen(!open);
      setSelected(isNew ? menu.id : null);
      setSelectedItems(isNew ? menu : selectedItems);
      if (menu.url && isRedirect) router.push(menu.url);
    }
  };

  useMemo(() => {
    if (selected === selectedItems?.id) {
      if (level === 1) setOpen(true);
    } else {
      if (level === selectedLevel) {
        setOpen(false);
        if (drawerOpen) setSelected(null);
      }
    }
  }, [selectedItems, level, selected, drawerOpen, selectedLevel]);

  useEffect(() => {
    if (pathname === menu.url) {
      setSelected(menu.id);
      setOpen(true);
    }
  }, [pathname, menu.id, menu.url]);

  const checkOpenForParent = useCallback(
    (child, id) => {
      child.forEach((item) => {
        if (item.url === pathname) {
          setOpen(true);
          setSelected(id);
        }
      });
    },
    [pathname]
  );

  useEffect(() => {
    setOpen(false);
    if (menu.children) {
      menu.children.forEach((item) => {
        if (item.children?.length) {
          checkOpenForParent(item.children, menu.id);
        }

        if (item.link && pathname.startsWith(item.link)) {
          setSelected(menu.id);
          setOpen(true);
        }

        if (item.url === pathname) {
          setSelected(menu.id);
          setOpen(true);
        }
      });
    }
  }, [pathname, menu.id, menu.children, checkOpenForParent]);

  const navCollapse = menu.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return (
          <NavCollapse
            key={item.id}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            menu={item}
            level={level + 1}
            parentId={parentId}
          />
        );
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <h6 key={item.id} className="text-center text-red-600">
            Fix - Collapse or Item
          </h6>
        );
    }
  });

  return (
    <>
      <li className={`pc-item pc-hasmenu ${open ? 'pc-trigger' : ''}`}>
        <Link className="pc-link" href={menu.url || '#'} onClick={() => handleClick(true)}>
          {menu.icon && (
            <span className="pc-micon">
              <i className={menu.icon} />
            </span>
          )}
          <span className="pc-mtext">{menu.title}</span>
          <span className="pc-arrow">
            <i className={`ti ti-chevron-right`} />
          </span>
          {menu.badge && <span className="pc-badge">{menu.badge}</span>}
        </Link>
        {open && <ul className={`pc-submenu`}>{navCollapse}</ul>}
      </li>
    </>
  );
}

NavCollapse.propTypes = {
  menu: PropTypes.any,
  level: PropTypes.number,
  parentId: PropTypes.string,
  setSelectedItems: PropTypes.oneOfType([PropTypes.any, PropTypes.func]),
  selectedItems: PropTypes.any,
  setSelectedLevel: PropTypes.func,
  selectedLevel: PropTypes.number
};
