'use client';

import { useEffect, useRef, useState } from 'react';

// next
import Image from 'next/image';
import Link from 'next/link';

// projects imports
import { handlerDrawerOpen, useGetMenuMaster } from '@/api/menu';
import DrawerContent from './DrawerContent';

// assets
const LogoWhite = '/assets/images/logo-white.svg';
const fevicon = '/assets/images/favicon.svg';

// ==============================|| MAIN DRAWER ||============================== //

export default function MainDrawer() {
  const { menuMaster } = useGetMenuMaster();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedItems, setSelectedItems] = useState();
  const overlayRef = useRef(null);
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current?.contains(event.target)) {
        handlerDrawerOpen(false);
      }
    };
    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  return (
    <nav className={`pc-sidebar pc-trigger ${drawerOpen ? 'pc-sidebar-hide mob-sidebar-active' : ''}`}>
      <div className="navbar-wrapper">
        <div className="m-header h-header-height flex items-center px-6 py-4">
          <Link href="/" className="b-brand flex items-center gap-3">
            <Image src={LogoWhite} className="img-fluid logo logo-lg h-auto w-full" alt="logo" width={0} height={0} />
            <Image src={fevicon} className="img-fluid logo logo-sm h-auto w-full" alt="logo" width={0} height={0} />
          </Link>
        </div>
        <div className="navbar-content py-2.5">
          <DrawerContent selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
      </div>
      {drawerOpen && isMobile && <div className="pc-menu-overlay" ref={overlayRef} />}
    </nav>
  );
}
