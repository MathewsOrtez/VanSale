import React, { useState } from "react";
import haloicon from "../../assets/dashboardhaloicon.png";
import calendaricon from "../../assets/calendaricon.png";
import CalendarPopup from "./Calendar/Calendar";

const DashboardHeader: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleCalendarClose = () => {
    setShowCalendar(false);
  };

  const handleDateApply = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const displayDate = selectedDate 
    ? selectedDate.toLocaleDateString("en-GB") 
    : new Date().toLocaleDateString("en-GB");

  return (
    <>
      <div className="flex justify-between items-center my-4 px-4 ">
        <div className="flex gap-3">
          <img src={haloicon} alt="Halo Icon" />
          <div className="font-semibold text-xl">Hi Mathews,</div>
        </div>
        <div>
          <button
            className="flex items-center gap-2 border text-[#909090] text-sm p-1 px-6 rounded-md border-blue-200"
            onClick={() => setShowCalendar(true)}
          >
            <img src={calendaricon} alt="Calendar Icon" />
            {displayDate}
          </button>
        </div>
      </div>

      {/* Calendar Popup */}
      <div className="relative">
  {showCalendar && (
    <div className="absolute top-0 right-0 z-50">
      <CalendarPopup
        onClose={handleCalendarClose}
        onApply={handleDateApply}
      />
    </div>
  )}
</div>

    </>
  );
};

export default DashboardHeader;
