const DashboardCardComponents = (props) => {
  const { title, bgColor, value, profitPercent, icon } = props;
  // console.log(icon);
  return (
    <>
      <div className="flex flex-col w-64 py-2 pr-6 pl-4 rounded-xl shadow-md border border-gray-300 bg-white mt-4">
        {/* Icon Div */}
        <div
          className={`w-9 h-9 rounded-full flex justify-center items-center`}
          style={{
            backgroundColor: bgColor,
          }}
        >
          {icon}
        </div>

        {/* Title Div */}
        <div className="pt-1">
          <span className="text-sm">{title}</span>
        </div>

        {/* Value and profit idv */}
        <div className="flex justify-between items-center">
          <div>
            {title === "Total Revenues" ? (
              <span className="font-bold text-xl">${value}</span>
            ) : (
              <span className="font-bold text-xl">{value}</span>
            )}
          </div>
          {/* <div className="bg-gray-100 px-3 rounded-lg py-1"> */}
          <div
            className={
              profitPercent > 0
                ? "bg-green-100 px-3 rounded-lg py-1"
                : "bg-red-100 px-3 rounded-lg py-1"
            }
          >
            <span
              className={
                profitPercent > 0
                  ? "text-green-600 text-sm"
                  : "text-red-600 text-sm"
              }
            >
              {profitPercent > 0 ? `+${profitPercent}%` : `-${profitPercent}%`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCardComponents;
