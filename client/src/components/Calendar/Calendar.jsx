import React, { useState } from "react";
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'; // Import if you need to compare days
import { LocalizationProvider, StaticDatePicker, PickersDay } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';

dayjs.extend(isSameOrBefore);

export function Calendar() {
  const [value, setValue] = useState(dayjs());
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayClick = (day) => {
    // Check if the day is already selected
    const isSelected = selectedDays.some(selectedDay =>
      day.isSame(selectedDay, 'day')
    );

    if (!isSelected) {
      // Add the new day to the selectedDays array
      setSelectedDays([...selectedDays, day]);
    } else {
      // Remove the day from the selectedDays array
      setSelectedDays(selectedDays.filter(selectedDay =>
        !day.isSame(selectedDay, 'day')
      ));
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="portrait"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            handleDayClick(newValue);
          }}
          renderDay={(day, _, pickersDayProps) => {
            const isSelected = selectedDays.some(selectedDay => day.isSame(selectedDay, 'day'));
            console.log(day, isSelected);
            return (

              <PickersDay
                {...pickersDayProps}
                selected={isSelected}
                sx={{
                  ...(isSelected && {
                    borderRadius: '50%',
                    border: '2px solid orange',
                  }),
                }}
              />
            );
          }}
         
        />
      </LocalizationProvider>
      {/* The rest of your component's JSX */}
    </>
  );
}

export default Calendar;
