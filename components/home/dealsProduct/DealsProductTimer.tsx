import React, { useEffect, useRef, useState } from "react";

const DealsProductTimer = () => {
  const [timerDays, setTimerDays] = useState<number | string>("00");
  const [timerHours, setTimerHours] = useState<number | string>("00");
  const [timerMinutes, setTimerMinutes] = useState<number | string>("00");
  const [timerSeconds, setTimerSeconds] = useState<number | string>("00");

  let interval = useRef<any>(null);

  const startTimer = (countdownDate: number) => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(interval.current);
    } else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
  };

  function saveInLocalStorage(time: any) {
    localStorage.setItem("timer", time);
  }

  function getTimeFromLocalStorage() {
    return localStorage.getItem("timer");
  }

  useEffect(() => {
    const localTimer = getTimeFromLocalStorage();

    if (localTimer) {
      interval.current = setInterval(() => {
        startTimer(+localTimer);
      }, 1000);
    } else {
      const countdownDate = new Date().getTime() + 30000 * 24 * 60 * 1000;
      saveInLocalStorage(countdownDate);
      interval.current = setInterval(() => {
        startTimer(+countdownDate);
      }, 1000);
    }

    return () => clearInterval(interval.current);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center gap-[5px]">
        <div className="text-white flex justify-center flex-col items-center bg-primary border rounded-[4px] w-[50px] h-[50px] text-[20px] font-bold leading-[22px] border-warning">
          <span> {timerDays}</span>
          <span className="text-[18px] font-[500] leading-5">D</span>
        </div>
        <span className="text-white text-[20px] ">:</span>
        <div className="text-white flex justify-center flex-col items-center bg-primary border rounded-[4px] w-[50px] h-[50px] text-[20px] font-bold leading-[22px] border-warning">
          <span> {timerHours}</span>
          <span className="text-[18px] font-[500] leading-5">H</span>
        </div>
        <span className="text-white text-[20px] ">:</span>
        <div className="text-white flex justify-center flex-col items-center bg-primary border rounded-[4px] w-[50px] h-[50px] text-[20px] font-bold leading-[22px] border-warning">
          <span> {timerMinutes}</span>
          <span className="text-[18px] font-[500] leading-5">M</span>
        </div>
        <span className="text-white text-[20px] ">:</span>
        <div className="text-white flex justify-center flex-col items-center bg-primary border rounded-[4px] w-[50px] h-[50px] text-[20px] font-bold leading-[22px] border-warning">
          <span> {timerSeconds}</span>
          <span className="text-[18px] font-[500] leading-5">S</span>
        </div>
      </div>
    </>
  );
};

export default DealsProductTimer;
