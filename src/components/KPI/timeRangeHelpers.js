export function getCurrentMonthRange() {
    const now = new Date();
    const currentRangeStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const currentRangeEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  
    const previousRangeStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const previousRangeEnd = new Date(now.getFullYear(), now.getMonth(), 0);
  
    return { currentRangeStart, currentRangeEnd, previousRangeStart, previousRangeEnd };
  }
  
  export function getCurrentWeekRange() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 (Sun) - 6 (Sat)
  
    const currentRangeStart = new Date(now);
    currentRangeStart.setDate(now.getDate() - dayOfWeek);
  
    const currentRangeEnd = new Date(currentRangeStart);
    currentRangeEnd.setDate(currentRangeStart.getDate() + 6);
  
    const previousRangeStart = new Date(currentRangeStart);
    previousRangeStart.setDate(currentRangeStart.getDate() - 7);
  
    const previousRangeEnd = new Date(previousRangeStart);
    previousRangeEnd.setDate(previousRangeStart.getDate() + 6);
  
    return { currentRangeStart, currentRangeEnd, previousRangeStart, previousRangeEnd };
  }
  
  export function getCurrentDayRange() {
    const now = new Date();
    const currentRangeStart = new Date(now.setHours(0, 0, 0, 0));
    const currentRangeEnd = new Date(now.setHours(23, 59, 59, 999));
  
    const previousRangeStart = new Date(currentRangeStart);
    previousRangeStart.setDate(currentRangeStart.getDate() - 1);
    const previousRangeEnd = new Date(previousRangeStart);
    previousRangeEnd.setHours(23, 59, 59, 999);
  
    return { currentRangeStart, currentRangeEnd, previousRangeStart, previousRangeEnd };
  }
  
  export function getCurrentYearRange() {
    const now = new Date();
    const currentRangeStart = new Date(now.getFullYear(), 0, 1);
    const currentRangeEnd = new Date(now.getFullYear(), 11, 31);
  
    const previousRangeStart = new Date(now.getFullYear() - 1, 0, 1);
    const previousRangeEnd = new Date(now.getFullYear() - 1, 11, 31);
  
    return { currentRangeStart, currentRangeEnd, previousRangeStart, previousRangeEnd };
  }