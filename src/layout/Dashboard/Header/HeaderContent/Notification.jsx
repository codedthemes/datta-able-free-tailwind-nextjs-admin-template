'use client';

import PropTypes from 'prop-types';

// next
import Image from 'next/image';

// project imports
import SimpleBarScroll from '@/components/third-party/SimpleBar';
import { useDetectOutsideClick } from '@/components/useDetectOutsideClick';

// assets
const Avatar1 = '/assets/images/user/avatar-1.png';
const Avatar3 = '/assets/images/user/avatar-3.png';
const Avatar4 = '/assets/images/user/avatar-4.png';
const Avatar5 = '/assets/images/user/avatar-5.png';

// data
const notifications = [
  {
    group: 'Today',
    items: [
      {
        avatar: Avatar1,
        time: '2 min ago',
        title: 'UI/UX Design',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        avatar: Avatar1,
        time: '1 hour ago',
        title: 'Message',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
      }
    ]
  },
  {
    group: 'Yesterday',
    items: [
      {
        avatar: Avatar3,
        time: '2 hour ago',
        title: 'Forms',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        avatar: Avatar4,
        time: '12 hour ago',
        title: 'Challenge invitation',
        description: (
          <>
            <strong>Jonny aber</strong> invites to join the challenge
          </>
        ),
        actions: (
          <>
            <button className="btn btn-sm btn-outline-secondary me-2">Decline</button>
            <button className="btn btn-sm btn-primary">Accept</button>
          </>
        )
      },
      {
        avatar: Avatar5,
        time: '5 hour ago',
        title: 'Security',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      }
    ]
  }
];

// ==============================|| HEADER - NOTIFICATION DATA ||============================== //

function NotificationItem({ avatar, time, title, description, actions }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="flex gap-4">
          <div className="shrink-0">
            <Image className="img-radius rounded-0" src={avatar} alt="Avatar" width={48} height={48} />
          </div>
          <div className="grow">
            <span className="text-muted float-end text-sm">{time}</span>
            <h5 className="text-body mb-2">{title}</h5>
            <p className="mb-2">{description}</p>
            {actions}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==============================|| HEADER - NOTIFICATION ||============================== //

export default function HeaderNotification() {
  const { ref, isOpen, setIsOpen } = useDetectOutsideClick(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`dropdown pc-h-item ${isOpen ? 'drp-show' : ''}`} ref={ref}>
      <a className="pc-head-link dropdown-toggle me-0" data-pc-toggle="dropdown" href="#" role="button" onClick={toggleDropdown}>
        <i className="ph ph-bell"></i>
        <span className="badge bg-success-500 absolute top-0 right-0 z-10 rounded-full text-white">3</span>
      </a>

      {isOpen && (
        <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown p-2">
          <div className="dropdown-header flex items-center justify-between px-5 py-4">
            <h5 className="m-0">Notifications</h5>
            <a href="#!" className="btn btn-link btn-sm">
              Mark all read
            </a>
          </div>
          <SimpleBarScroll style={{ maxHeight: 'calc(100vh - 225px)', position: 'relative' }}>
            <div className="dropdown-body header-notification-scroll relative px-5 py-4">
              {notifications.map(({ group, items }) => (
                <div key={group}>
                  <p className="text-span mt-4 mb-3 first:mt-0">{group}</p>
                  {items.map((item, idx) => (
                    <NotificationItem key={idx} {...item} />
                  ))}
                </div>
              ))}
            </div>
          </SimpleBarScroll>
          <div className="py-2 text-center">
            <a href="#!" className="text-danger-500 hover:text-danger-600 focus:text-danger-600 active:text-danger-600">
              Clear all Notifications
            </a>
          </div>
        </div>
      )}
    </li>
  );
}

NotificationItem.propTypes = {
  avatar: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  actions: PropTypes.node
};
