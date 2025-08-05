'use client';

// next
import Image from 'next/image';

// project imports
import SimpleBarScroll from '@/components/third-party/SimpleBar';
import { useDetectOutsideClick } from '@/components/useDetectOutsideClick';

// assets
const Avatar2 = '/assets/images/user/avatar-2.png';

// ==============================|| HEADER CONTENT - USER PROFILE ||============================== //

export default function HeaderUserProfile() {
  const { ref, isOpen, setIsOpen } = useDetectOutsideClick(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`dropdown pc-h-item header-user-profile ${isOpen ? 'drp-show' : ''}`} ref={ref}>
      <a className="pc-head-link dropdown-toggle arrow-none me-0" data-pc-toggle="dropdown" href="#" role="button" onClick={toggleDropdown}>
        <i className="ph ph-user-circle"></i>
      </a>

      {isOpen && (
        <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown overflow-hidden p-2">
          <div className="dropdown-header bg-primary-500 flex items-center justify-between px-5 py-4">
            <div className="mb-1 flex items-center">
              <div className="shrink-0">
                <Image src={Avatar2} alt="user-image" className="rounded-full" width={40} height={40} />
              </div>
              <div className="ms-3 grow">
                <h6 className="mb-1 text-white">Carson Darrin 🖖</h6>
                <span className="text-white">carson.darrin@company.io</span>
              </div>
            </div>
          </div>
          <div className="dropdown-body px-5 py-4">
            <SimpleBarScroll className="profile-notification-scroll position-relative" style={{ maxHeight: 'calc(100vh - 225px)' }}>
              <a href="#" className="dropdown-item">
                <span>
                  <i className="ph ph-gear me-2 align-middle"></i>
                  <span>Settings</span>
                </span>
              </a>
              <a href="#" className="dropdown-item">
                <span>
                  <i className="ph ph-share-network me-2 align-middle"></i>
                  <span>Share</span>
                </span>
              </a>
              <a href="#" className="dropdown-item">
                <span>
                  <i className="ph ph-lock-key me-2 align-middle"></i>
                  <span>Change Password</span>
                </span>
              </a>
              <div className="my-3 grid">
                <button className="btn btn-primary flex items-center justify-center">
                  <i className="ph ph-sign-out me-2 align-middle"></i>
                  Logout
                </button>
              </div>
            </SimpleBarScroll>
          </div>
        </div>
      )}
    </li>
  );
}
