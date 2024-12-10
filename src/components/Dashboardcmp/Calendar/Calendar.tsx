import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarStyle.css";

const CalendarPopup: React.FC<{ onClose: () => void; onApply: (date: Date) => void }> = ({ onClose, onApply }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className=" bg-white shadow-lg rounded-lg p-4">
      {/* Calendar */}
      <Calendar
        value={selectedDate}
        onChange={(date) => setSelectedDate(date as Date)}
      />

      {/* Buttons */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={onClose}
          className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={() => selectedDate && onApply(selectedDate)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default CalendarPopup;
