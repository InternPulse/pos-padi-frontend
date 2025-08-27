import { getCurrentMonthRange } from "./timeRangeHelpers";

export default function calculatePercentageChange(
  dataArray,
  dateAccessorFn,
  optionalFilterFn,
  getCurrentRangeFn = getCurrentMonthRange,
  mode = "length", 
  accessorFn = null 
) {
  const { currentRangeStart, currentRangeEnd, previousRangeStart, previousRangeEnd } = getCurrentRangeFn();

  const filterData = (items, start, end) =>
      items.filter(item => {
          const date = new Date(dateAccessorFn(item));
          return date >= start && date <= end && (!optionalFilterFn || optionalFilterFn(item));
      });

  const currentItems = filterData(dataArray, currentRangeStart, currentRangeEnd);
  const previousItems = filterData(dataArray, previousRangeStart, previousRangeEnd);

  let currentValue, previousValue, totalValue;

  if (mode === "sum" && accessorFn) {
      currentValue = currentItems.reduce((acc, item) => acc + accessorFn(item), 0);
      previousValue = previousItems.reduce((acc, item) => acc + accessorFn(item), 0);
      totalValue = dataArray.reduce((acc, item) => acc + accessorFn(item), 0);
  } else {
      currentValue = currentItems.length;
      previousValue = previousItems.length;
      totalValue = dataArray.length;
  }

  return previousValue === 0
      ? (currentValue === 0 ? 0 : Math.round((currentValue / totalValue) * 100))  
      : Math.round(((currentValue - previousValue) / previousValue) * 100);
}

// Function to calculate percentage of filtered data over total dataset
export function calculateFilteredPercentage(dataArray, filterFn, mode = "length", accessorFn = null) {
  let totalValue, filteredValue;

  if (mode === "sum" && accessorFn) {
      totalValue = dataArray.reduce((acc, item) => acc + accessorFn(item), 0);
      filteredValue = dataArray.filter(filterFn).reduce((acc, item) => acc + accessorFn(item), 0);
  } else {
      totalValue = dataArray.length;
      filteredValue = dataArray.filter(filterFn).length;
  }

  return totalValue === 0 ? 0 : Math.round((filteredValue / totalValue) * 100);
}
