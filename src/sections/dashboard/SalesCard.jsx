import PropTypes from 'prop-types';

// ==============================|| SALES CARD ||============================== //

export default function SalesCard({ title, amount, percentage, direction, progress, bgClass }) {
  const arrowClass = direction === 'up' ? 'ph-arrow-up text-success-500' : 'ph-arrow-down text-danger-500';

  return (
    <div className="card">
      <div className="card-header !border-b-0 !pb-0">
        <h5>{title}</h5>
      </div>
      <div className="card-body">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="mb-0 flex items-center font-light">
            <i className={`ph ${arrowClass} mr-1.5 text-[30px]`}></i>
            {amount}
          </h3>
          <p className="mb-0">{percentage}</p>
        </div>
        <div className="bg-theme-bodybg dark:bg-themedark-bodybg mt-6 h-1.5 w-full rounded-lg">
          <div
            className={`h-full rounded-lg ${bgClass} shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]`}
            role="progressbar"
            style={{ width: progress }}
          ></div>
        </div>
      </div>
    </div>
  );
}

SalesCard.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  percentage: PropTypes.string,
  direction: PropTypes.string,
  progress: PropTypes.string,
  bgClass: PropTypes.string
};
