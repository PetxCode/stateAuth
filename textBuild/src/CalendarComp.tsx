import { Calendar, CalendarProps, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);
const CalendarComp = (props: Omit<CalendarProps, "localizer">) => {
  console.log("moment: ", moment(new Date(2023, 12, 3)));
  return (
    <div className="h-[500px] text-[12px] font-[300] ">
      <Calendar localizer={localizer} {...props} />
    </div>
  );
};

export default CalendarComp;
