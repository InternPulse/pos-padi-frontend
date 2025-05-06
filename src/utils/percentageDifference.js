// function analyzeData(dataArray, mode, interval = "month") {
//   if (!Array.isArray(dataArray) || (mode !== "sum" && mode !== "length")) {
//     throw new Error(
//       "Invalid arguments. Provide an array and either 'sum' or 'length' as mode."
//     );
//   }

//   const today = new Date();
//   const currentDay = today.getDate();

//   const toDateOnly = (dateStr) => new Date(dateStr.split("T")[0]);

//   // Date range helpers
//   let currentStart, currentEnd, lastStart, lastEnd;

//   if (interval === "month") {
//     currentStart = new Date(today.getFullYear(), today.getMonth(), 1);
//     currentEnd = new Date(today.getFullYear(), today.getMonth(), currentDay);

//     lastStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
//     lastEnd = new Date(today.getFullYear(), today.getMonth() - 1, currentDay);
//   } else if (interval === "week") {
//     const getMonday = (d) => {
//       d = new Date(d);
//       const day = d.getDay(),
//         diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when Sunday
//       return new Date(d.setDate(diff));
//     };

//     currentStart = getMonday(today);
//     currentEnd = today;

//     const lastWeekEnd = new Date(currentStart);
//     lastWeekEnd.setDate(lastWeekEnd.getDate() - 1);
//     lastStart = getMonday(lastWeekEnd);
//     lastEnd = lastWeekEnd;
//   } else if (interval === "year") {
//     currentStart = new Date(today.getFullYear(), 0, 1);
//     currentEnd = today;

//     lastStart = new Date(today.getFullYear() - 1, 0, 1);
//     lastEnd = new Date(
//       today.getFullYear() - 1,
//       today.getMonth(),
//       today.getDate()
//     );
//   } else {
//     throw new Error("Invalid interval. Use 'month', 'week', or 'year'.");
//   }

//   const filterAndCalculate = (start, end) => {
//     const filtered = dataArray.filter((item) => {
//       const itemDate = toDateOnly(item.date);
//       return itemDate >= start && itemDate <= end;
//     });

//     if (mode === "sum") {
//       return filtered.reduce((acc, curr) => acc + (curr.amount || 0), 0);
//     } else {
//       return filtered.length;
//     }
//   };

//   const currentValue = filterAndCalculate(currentStart, currentEnd);
//   const lastValue = filterAndCalculate(lastStart, lastEnd);

//   const percentageChange =
//     lastValue === 0
//       ? currentValue === 0
//         ? 0
//         : 100
//       : ((currentValue - lastValue) / lastValue) * 100;

//   return {
//     interval,
//     mode,
//     currentValue,
//     lastValue,
//     percentageChange: +percentageChange.toFixed(2),
//   };
// }

function analyzeData(dataArray, mode, interval = 'month') {
  if (!Array.isArray(dataArray) || (mode !== 'sum' && mode !== 'length')) {
    throw new Error("Invalid arguments. Provide an array and either 'sum' or 'length' as mode.");
  }

  const today = new Date();
  const toDateOnly = (dateStr) => new Date(dateStr.split('T')[0]);

  // Define current and previous period start and end
  let currentStart, currentEnd, lastStart, lastEnd;

  if (interval === 'month') {
    currentEnd = today;
    currentStart = new Date(today);
    currentStart.setMonth(currentStart.getMonth() - 1);

    lastEnd = new Date(currentStart);
    lastStart = new Date(currentStart);
    lastStart.setMonth(lastStart.getMonth() - 1);
  } else if (interval === 'week') {
    currentEnd = today;
    currentStart = new Date(today);
    currentStart.setDate(currentStart.getDate() - 7);

    lastEnd = new Date(currentStart);
    lastStart = new Date(currentStart);
    lastStart.setDate(lastStart.getDate() - 7);
  } else if (interval === 'year') {
    currentEnd = today;
    currentStart = new Date(today);
    currentStart.setFullYear(currentStart.getFullYear() - 1);

    lastEnd = new Date(currentStart);
    lastStart = new Date(currentStart);
    lastStart.setFullYear(lastStart.getFullYear() - 1);
  } else {
    throw new Error("Invalid interval. Use 'month', 'week', or 'year'.");
  }

  const filterAndCalculate = (start, end) => {
    const filtered = dataArray.filter(item => {
      const itemDate = toDateOnly(item.date);
      return itemDate >= start && itemDate <= end;
    });

    if (mode === 'sum') {
      return filtered.reduce((acc, curr) => acc + (curr.amount || 0), 0);
    } else {
      return filtered.length;
    }
  };

  const currentValue = filterAndCalculate(currentStart, currentEnd);
  const lastValue = filterAndCalculate(lastStart, lastEnd);

  const percentageChange = lastValue === 0
    ? (currentValue === 0 ? 0 : 100)
    : ((currentValue - lastValue) / lastValue) * 100;

  return {
    interval,
    mode,
    currentStart: currentStart.toISOString().split('T')[0],
    currentEnd: currentEnd.toISOString().split('T')[0],
    lastStart: lastStart.toISOString().split('T')[0],
    lastEnd: lastEnd.toISOString().split('T')[0],
    currentValue,
    lastValue,
    percentageChange: +percentageChange.toFixed(2)
  };
}


export function percentageDiff(arr, tag, mode, interval) {
  if (
    !(
      tag == "agents" ||
      tag == "customers" ||
      tag == "transactions" ||
      tag == "disputes" ||
      tag == "points" ||
      tag == "fees"
    )
  ) {
    throw new Error(
      'Invalid array tag. Array tags may only be "agents", "customers", "transactions", "fees", "points" or "disputes".'
    );
  }

  let workingArray;

  switch (tag) {
    case "agents":
      workingArray = arr.map((item) => {
        return { date: item.dateCreated, amount: 1 };
      });
      break;

    case "customers":
      workingArray = arr.map((item) => {
        return { date: item.dateCreated, amount: 1 };
      });
      break;

    case "transactions":
      workingArray = arr.map((item) => {
        return { date: item.dateTime, amount: item.amount };
      });
      break;

    case "points":
      workingArray = arr.map((item) => {
        return { date: item.dateTime, amount: item.loyaltyPoints };
      });
      break;

    case "fees":
      workingArray = arr.map((item) => {
        return { date: item.dateTime, amount: item.fee };
      });
      break;

    case "disputes":
      workingArray = arr.map((item) => {
        return { date: item.dateTime, amount: 1 };
      });
      break;
  }

  let workingInterval;

  if (interval == "30days" || interval == "") {
    workingInterval = "month";
  } else if (interval == "7days") {
    workingInterval = "week";
  } else if (interval == "12months") {
    workingInterval = "year";
  }

  return analyzeData(workingArray, mode, workingInterval);
}
