import { useState } from "react";
import { DayPicker } from "react-day-picker";
import Calendar from "../../../assets/icons/calender";
import "react-day-picker/dist/style.css";

type DatePickerProps = {
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
};

const DatePicker = ({ selectedDate, onDateChange }: DatePickerProps) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <>
      <button onClick={() => setShowPicker(true)}>
        <Calendar />
      </button>

      {showPicker && (
        <div
          className="fixed inset-00 bg-black/30 z-50 flex items-center justify-center w-full h-full top-00 left-00 bottom-00 right-00"
          onClick={() => setShowPicker(false)}
        >
          <div
            className="bg-white p-4 rounded-xl shadow-xl border border-green-1986-Tint-2"
            onClick={(e) => e.stopPropagation()}
          >
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(selected) => {
                onDateChange(selected);
                setShowPicker(false);
              }}
              className="text-green-1986 [&_.rdp-day_selected]:bg-green-1986-Shade-2 [&_.rdp-day_selected]:text-white"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DatePicker;
