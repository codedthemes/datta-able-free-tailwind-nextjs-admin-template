'use client';

import { useState } from 'react';

// project imports
import { IconList } from '@/data/IconData';

// ==============================|| UI COMPONENTS - ICON ||============================== //

export default function IconPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIcon, setCopiedIcon] = useState(null);

  // Filtered icon list
  const filteredIcons = IconList.filter((icon) => icon.toLowerCase().includes(searchTerm.toLowerCase()));

  // Copy icon name to clipboard
  const handleIconClick = async (icon) => {
    try {
      await navigator.clipboard.writeText(icon);
      setCopiedIcon(icon);
      setTimeout(() => setCopiedIcon(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-2">Phosphor</h5>
            <p>
              Use icon with
              <code className="text-danger-400 text-sm">&lt;i className=&quot;&lt;&lt; Copied code &gt;&gt;&quot;</code> in your HTML code
            </p>
          </div>
          <div className="card-body text-center">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6 sm:col-start-4">
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div
              className="i-main *:border-theme-border dark:*:border-themedark-border text-center text-3xl leading-none *:relative *:m-[5px] *:inline-flex *:h-[70px] *:w-[70px] *:cursor-pointer *:items-center *:justify-center *:rounded-lg *:border"
              id="icon-wrapper"
            >
              {filteredIcons.map((icon, index) => (
                <div key={index} className="i-block" title={icon} onClick={() => handleIconClick(icon)}>
                  <i className={`ph ${icon}`}></i>
                  {copiedIcon === icon && (
                    <div className="ic-badge badge bg-success-500 absolute bottom-1 left-2/4 -translate-x-2/4 text-sm text-white">
                      Copied!
                    </div>
                  )}
                </div>
              ))}
              {filteredIcons.length === 0 && <div className="text-muted col-span-12 text-sm">No icons found.</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
