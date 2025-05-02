
export default function calculatePercentageChange(
    dataArray,
    dateAccessorFn,
    optionalFilterFn,
    getCurrentRangeFn = getCurrentMonthRange
) {
    const { currentRangeStart, currentRangeEnd, previousRangeStart, previousRangeEnd } = getCurrentRangeFn();

    const filterData = (items, start, end) =>
        items.filter(item => {
            const date = new Date(dateAccessorFn(item));
            return date >= start && date <= end && (!optionalFilterFn || optionalFilterFn(item));
        });

    const currentItems = filterData(dataArray, currentRangeStart, currentRangeEnd);
    const previousItems = filterData(dataArray, previousRangeStart, previousRangeEnd);

    const currentCount = currentItems.length;
    const previousCount = previousItems.length;
    const totalCount = dataArray.length;

    return previousCount === 0
        ? (currentCount === 0 ? 0 : Math.round((currentCount / totalCount) * 100))  
        : Math.round(((currentCount - previousCount) / previousCount) * 100);
}

// Function to calculate percentage of filtered data over total dataset
export function calculateFilteredPercentage(dataArray, filterFn) {
    const totalCount = dataArray.length;
    const filteredCount = dataArray.filter(filterFn).length;

    return totalCount === 0 ? 0 : Math.round((filteredCount / totalCount) * 100);
}
