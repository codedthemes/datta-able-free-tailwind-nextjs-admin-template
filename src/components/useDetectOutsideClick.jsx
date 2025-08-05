'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook for handling clicks outside a referenced element.
 * @param {boolean} initialState - The initial open/closed state.
 * @returns {object} - An object containing the ref, the current state (isOpen), and the state setter (setIsOpen).
 */
export const useDetectOutsideClick = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the ref is attached and the click is outside the referenced element
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false); // Close the component
      }
    };

    // Add event listener only when the component is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup function to remove the listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // Re-run effect if the isOpen state changes

  return { ref, isOpen, setIsOpen };
};
