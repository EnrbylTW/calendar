import React, { useState } from 'react';
import moment from 'moment';
import Header from '../Header'
import Monitor from "../Monitor";
import CalendarGrid from "../CalendarGrid";


function App() {

  moment.updateLocale('ru', {
    months : [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
      "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ]
  });
  moment.updateLocale('ru', {
    weekdays : [
        "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
    ]
  });
  // const today = moment();
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');

  window.moment = moment;

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));

  return (
    <div>
      <Header />
      <Monitor 
        today={today}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <CalendarGrid startDay={startDay} />
    </div>
  );
}

export default App;
