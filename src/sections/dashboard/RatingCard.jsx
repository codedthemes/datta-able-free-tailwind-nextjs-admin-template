const ratings = [
  { stars: 5, count: 384, progress: 70 },
  { stars: 4, count: 145, progress: 35 },
  { stars: 3, count: 24, progress: 25 },
  { stars: 2, count: 1, progress: 10 },
  { stars: 1, count: 0, progress: 0 }
];

// ===============================|| DEFAULT - RATING CARD ||============================== //

export default function RatingCard() {
  return (
    <div className="card user-list">
      <div className="card-header">
        <h5>Rating</h5>
      </div>
      <div className="card-body">
        <div className="mb-5 flex items-center justify-between gap-1">
          <h2 className="m-0 flex items-center font-light">
            4.7
            <i className="ti ti-star-filled text-warning-500 ml-2.5 text-[10px]"></i>
          </h2>
          <h6 className="m-0 flex items-center">
            0.4
            <i className="ti ti-caret-up-filled text-success ml-2.5 text-[22px]"></i>
          </h6>
        </div>

        {ratings.map((rating) => (
          <div key={rating.stars}>
            <div className="mb-2 flex items-center justify-between gap-2">
              <h6 className="flex items-center gap-1">
                <i className="ti ti-star-filled text-warning-500 mr-2.5 text-[10px]"></i>
                {rating.stars}
              </h6>
              <h6>{rating.count}</h6>
            </div>
            <div className="bg-theme-bodybg dark:bg-themedark-bodybg mt-3 mb-6 h-1.5 w-full rounded-lg">
              <div
                className="bg-theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                role="progressbar"
                style={{ width: `${rating.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
