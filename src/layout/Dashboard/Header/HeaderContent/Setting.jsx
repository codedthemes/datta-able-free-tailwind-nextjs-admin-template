'use client';

// project import
import { useDetectOutsideClick } from '@/components/useDetectOutsideClick';

// ==============================|| HEADER - SETTING ||============================== //

export default function HeaderSetting() {
  const { ref, isOpen, setIsOpen } = useDetectOutsideClick(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`dropdown pc-h-item ${isOpen ? 'drp-show' : ''}`} ref={ref}>
      <a className="pc-head-link dropdown-toggle me-0" href="#" role="button" onClick={toggleDropdown}>
        <i className="ph ph-diamonds-four"></i>
      </a>
      {isOpen && (
        <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
          <a href="#!" className="dropdown-item">
            <i className="ph ph-user"></i>
            <span>My Account</span>
          </a>
          <a href="#!" className="dropdown-item">
            <i className="ph ph-gear"></i>
            <span>Settings</span>
          </a>
          <a href="#!" className="dropdown-item">
            <i className="ph ph-lifebuoy"></i>
            <span>Support</span>
          </a>
          <a href="#!" className="dropdown-item">
            <i className="ph ph-lock-key"></i>
            <span>Lock Screen</span>
          </a>
          <a href="#!" className="dropdown-item">
            <i className="ph ph-power"></i>
            <span>Logout</span>
          </a>
        </div>
      )}
    </li>
  );
}
