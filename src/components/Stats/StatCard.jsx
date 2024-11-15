import { LoadingSpinner } from "../ui/loading-states";

export const StatCard = ({ title, value, change, loading }) => {
  const changeColor = change >= 0 ? "text-red-500" : "text-green-500";

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <p className="text-2xl font-bold mt-2">{value.toLocaleString()}</p>
          <p className={`${changeColor} text-sm mt-2`}>
            {change >= 0 ? "↑" : "↓"} {Math.abs(change)}% from last month
          </p>
        </>
      )}
    </div>
  );
};
