'use client';

// project imports
import EarningChart from '@/sections/dashboard/EarningChart';
import RatingCard from '@/sections/dashboard/RatingCard';
import RecentUsersCard from '@/sections/dashboard/RecentUsersCard';
import SalesCard from '@/sections/dashboard/SalesCard';
import StatIndicatorCard from '@/sections/dashboard/StatIndicatorCard';
import SocialStatsCard from '@/sections/dashboard/SocialStatsCard';
import UsersMap from '@/sections/dashboard/UsersMap';

// ===============================|| STAT INDICATOR CARD - DATA ||============================== //

const statIndicatorData = [
  { icon: 'ph ph-lightbulb-filament', value: '235', label: 'TOTAL IDEAS', iconColor: 'text-success-500' },
  { icon: 'ph ph-map-pin-line', value: '26', label: 'TOTAL LOCATION', iconColor: 'text-primary-500' }
];

// ==============================|| SALE CARD DATA ||============================== //

const salesData = [
  {
    title: 'Daily Sales',
    amount: '$ 249.95',
    percentage: '67%',
    direction: 'up',
    progress: '75%',
    bgClass: 'bg-theme-bg-1'
  },
  {
    title: 'Monthly Sales',
    amount: '$ 2.942.32',
    percentage: '36%',
    direction: 'down',
    progress: '35%',
    bgClass: 'bg-theme-bg-2'
  },
  {
    title: 'Yearly Sales',
    amount: '$ 8.638.32',
    percentage: '80%',
    direction: 'up',
    progress: '80%',
    bgClass: 'bg-theme-bg-1'
  }
];

// ===============================|| SOCIAL STATS CARD - DATA ||============================== //

const socialStatsData = [
  {
    icon: 'ti ti-brand-twitter-filled text-primary-500 text-[36px]',
    count: '12,281',
    percentage: '+7.2%',
    color: 'text-purple-500',
    stats: [
      {
        label: 'Target',
        value: '35,098',
        progress: {
          now: 60,
          className: 'bg-theme-bg-1'
        }
      },
      {
        label: 'Duration',
        value: '3,539',
        progress: {
          now: 70,
          className: 'bg-theme-bg-2'
        }
      }
    ]
  },
  {
    icon: 'ti ti-brand-twitter-filled text-primary-500 text-[36px]',
    count: '11,200',
    percentage: '+6.2%',
    color: 'text-primary',
    stats: [
      {
        label: 'Target',
        value: '34,185',
        progress: {
          now: 80,
          className: 'bg-theme-bg-1'
        }
      },
      {
        label: 'Duration',
        value: '4,567',
        progress: {
          now: 50,
          className: 'bg-theme-bg-2'
        }
      }
    ]
  },
  {
    icon: 'ti ti-brand-google-filled text-danger-500 text-[36px]',
    count: '10,500',
    percentage: '+5.9%',
    color: 'text-primary',
    stats: [
      {
        label: 'Target',
        value: '25,998',
        progress: {
          now: 80,
          className: 'bg-theme-bg-1'
        }
      },
      {
        label: 'Duration',
        value: '7,753',
        progress: {
          now: 50,
          className: 'bg-theme-bg-2'
        }
      }
    ]
  }
];

// ==============================|| DASHBOARD PAGE ||============================== //

export default function DashboardPage() {
  return (
    <>
      <div className="grid grid-cols-12 gap-x-6">
        {/* row - 1 */}
        {salesData.map((item, idx) => (
          <div key={idx} className={`col-span-12 xl:col-span-4 md:${idx === 2 ? 'col-span-12' : 'col-span-6'}`}>
            <SalesCard {...item} />
          </div>
        ))}

        {/* row - 2 */}
        <div className="col-span-12 md:col-span-6 xl:col-span-8">
          <UsersMap />
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4">
          <EarningChart />
          <StatIndicatorCard data={statIndicatorData} />
        </div>

        {/* row - 3 */}
        {socialStatsData.map((item, index) => (
          <div className={`col-span-12 xl:col-span-4 md:${index === 0 ? 'col-span-12' : 'col-span-6'}`} key={index}>
            <SocialStatsCard {...item} />
          </div>
        ))}

        {/* row - 4 */}
        <div className="col-span-12 md:col-span-6 xl:col-span-4">
          <RatingCard />
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-8">
          <RecentUsersCard />
        </div>
      </div>
    </>
  );
}
