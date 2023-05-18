import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const CalendarScreen = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      // Customize the appearance of the calendar
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
      }}
      // Specify the current date
      current={'2023-05-18'}
      // Callback that gets called when the user selects a day
      onDayPress={day => {
        console.log('selected day', day);
      }}
      // Mark specific dates as marked
      markedDates={{
        '2023-05-01': {selected: true, marked: true, selectedColor: 'blue'},
        '2012-05-02': {selected: true, marked: true, selectedColor: 'blue'},
        '2012-05-03': {selected: true, marked: true, selectedColor: 'blue'},
      }}
    />
  );
};

export default CalendarScreen;
