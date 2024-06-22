enum DayOfWeek {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday
    }
    
    
   const isWeekend = (day: DayOfWeek): boolean | undefined => {
        switch (day) {
            case DayOfWeek.Monday:
            case DayOfWeek.Tuesday:
            case DayOfWeek.Wednesday:
            case DayOfWeek.Thursday:
            case DayOfWeek.Friday:
            return false;
            case DayOfWeek.Saturday:
            case DayOfWeek.Sunday:
                return true;
                default:
      throw new Error('Invalid day');

        }
        
    }

    export default isWeekend
    