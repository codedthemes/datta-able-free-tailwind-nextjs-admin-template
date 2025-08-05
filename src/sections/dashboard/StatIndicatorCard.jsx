import PropTypes from 'prop-types';

// ==============================|| STAT INDICATOR CARD ||============================== //

export default function StatIndicatorCard({ data }) {
  return (
    <div className="card">
      {data.map((item, index) => (
        <div className="card-body border-theme-border dark:border-themedark-border border-b" key={index}>
          <div className="flex items-center gap-6">
            <div className="shrink-0">
              <i className={`${item.icon} text-[30px] ${item.iconColor}`}></i>
            </div>
            <div className="grow">
              <h3 className="font-light">{item.value}</h3>
              <span className="block uppercase">{item.label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

StatIndicatorCard.propTypes = { data: PropTypes.array };
