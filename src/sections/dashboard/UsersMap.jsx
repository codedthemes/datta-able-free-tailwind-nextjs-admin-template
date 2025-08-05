'use client';

import PropTypes from 'prop-types';

import { useEffect, useState, useCallback } from 'react';

// ==============================|| USERS MAP ||============================== //

export default function UsersMap({ height }) {
  const [mapHeight, setMapHeight] = useState(height ?? 450);

  const updateHeight = useCallback(() => {
    if (height) return;
    const width = window.innerWidth;
    if (width <= 480) {
      setMapHeight(250);
    } else if (width <= 768) {
      setMapHeight(350);
    } else {
      setMapHeight(height ?? 450);
    }
  }, [height]);

  useEffect(() => {
    updateHeight();
    if (!height) {
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, [height, updateHeight]);

  useEffect(() => {
    // Only run on client
    const loadMap = async () => {
      if (typeof window !== 'undefined') {
        const { default: JsVectorMap } = await import('jsvectormap');
        await import('jsvectormap/dist/maps/world.js');

        new JsVectorMap({
          selector: '#basic-map',
          map: 'world',
          showTooltip: true,
          zoomOnScroll: true,
          zoomButtons: true,
          zoom: {
            min: 1,
            max: 10
          },
          markers: [
            { coords: [-15.7939, -47.8825], name: 'Brazil' },
            { coords: [24.7743, 47.7439], name: 'Saudi Arabia' },
            { coords: [35.8617, 104.1954], name: 'China' },
            { coords: [61.524, 105.3188], name: 'Russia' }
          ]
        });
      }
    };

    loadMap();
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h5>Users from United States</h5>
      </div>
      <div className="card-body">
        <div id="basic-map" className="set-map" style={{ height: mapHeight }} />
      </div>
    </div>
  );
}

UsersMap.propTypes = { height: PropTypes.number };
