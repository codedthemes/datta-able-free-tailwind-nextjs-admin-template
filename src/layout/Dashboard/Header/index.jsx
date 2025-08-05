'use client';

// project imports
import { handlerDrawerOpen, useGetMenuMaster } from '@/api/menu';
import HeaderNotification from './HeaderContent/Notification';
import HeaderSearch from './HeaderContent/Search';
import HeaderSetting from './HeaderContent/Setting';
import HeaderUserProfile from './HeaderContent/UserProfile';

// ==============================|| HEADER ||============================== //

export default function Header() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  return (
    <>
      <header className="pc-header">
        <div className="header-wrapper flex grow px-[25px] max-sm:px-[15px]">
          <div className="pc-mob-drp me-auto">
            <ul className="*:min-h-header-height inline-flex *:inline-flex *:items-center">
              <li className="pc-h-item pc-sidebar-collapse max-lg:hidden lg:inline-flex">
                <a
                  href="#"
                  className="pc-head-link ltr:!ml-0 rtl:!mr-0"
                  id="sidebar-hide"
                  onClick={() => {
                    handlerDrawerOpen(!drawerOpen);
                  }}
                >
                  <i className="ph ph-list"></i>
                </a>
              </li>
              <li className="pc-h-item pc-sidebar-popup lg:hidden">
                <a
                  href="#"
                  className="pc-head-link ltr:!ml-0 rtl:!mr-0"
                  id="mobile-collapse"
                  onClick={() => handlerDrawerOpen(!drawerOpen)}
                >
                  <i className="ph ph-list"></i>
                </a>
              </li>
              <HeaderSearch />
            </ul>
          </div>
          <div className="ms-auto">
            <ul className="*:min-h-header-height inline-flex *:inline-flex *:items-center">
              <HeaderSetting />
              <HeaderNotification />
              <HeaderUserProfile />
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
