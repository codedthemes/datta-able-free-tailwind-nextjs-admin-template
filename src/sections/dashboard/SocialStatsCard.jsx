import PropTypes from 'prop-types';

// ==============================|| SOCIAL STATS CARD ||============================== //

export default function SocialStatsCard({ icon, count, percentage, color, stats }) {
  return (
    <div className="card card-social">
      <div className="card-body border-theme-border dark:border-themedark-border border-b">
        <div className="flex items-center justify-center">
          <div className="shrink-0">
            <i className={`${icon}`}></i>
          </div>
          <div className="grow ltr:text-right rtl:text-left">
            <h3 className="mb-2">{count}</h3>
            <h5 className={`${color} mb-0`}>
              {' '}
              {percentage} <span className="text-muted">Total Likes</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="grid grid-cols-12 gap-x-6">
          {stats.map((item, index) => (
            <div className="col-span-6" key={index}>
              <h6 className="mb-2.5 text-center">
                <span className="text-muted m-r-5">{item.label}</span> {item.value}
              </h6>
              <div className="bg-theme-bodybg dark:bg-themedark-bodybg h-1.5 w-full rounded-lg">
                <div
                  className={`${item.progress.className} h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]`}
                  role="progressbar"
                  style={{ width: `${item.progress.now}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

SocialStatsCard.propTypes = {
  icon: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.string,
  color: PropTypes.string,
  stats: PropTypes.array
};
