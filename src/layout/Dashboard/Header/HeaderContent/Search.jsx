'use client';

// project imports
import { useDetectOutsideClick } from '@/components/useDetectOutsideClick';

// ==============================|| HEADER - SEARCH ||============================== //

export default function HeaderSearch() {
  const { ref, isOpen, setIsOpen } = useDetectOutsideClick(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`dropdown pc-h-item ${isOpen ? 'drp-show' : ''}`} ref={ref}>
      <a className="pc-head-link dropdown-toggle me-0" data-pc-toggle="dropdown" href="#" onClick={toggleDropdown} role="button">
        <i className="ph ph-magnifying-glass"></i>
      </a>
      {isOpen && (
        <div className="dropdown-menu pc-h-dropdown drp-search">
          <form className="px-2 py-1">
            <input type="search" className="form-control !border-0 !shadow-none" placeholder="Search here. . ." />
          </form>
        </div>
      )}
    </li>
  );
}
