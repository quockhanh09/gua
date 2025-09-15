import { useState, useEffect } from "react";
import bgTime from "../assets/img/br-season.jpeg";
import seasonImg from "../assets/img/season 2025.png";
import "../style/App.css";
function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("Dec 25, 2025 20:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="season"
      className="season section"
      style={{
        backgroundImage: `url(${bgTime})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 0",
        textAlign: "center",
      }}
    >
      <div className="container-season">
        <img src={seasonImg} alt="season 2025" />
      </div>

      <div className="countdown">
        {timeLeft ? (
          <>
            <div className="time-box">
              <div>{timeLeft.days}</div>
              <span>NGÀY</span>
            </div>
            <div className="divider"></div>
            <div className="time-box">
              <div>{timeLeft.hours}</div>
              <span>GIỜ</span>
            </div>
            <div className="divider"></div>
            <div className="time-box">
              <div>{timeLeft.minutes}</div>
              <span>PHÚT</span>
            </div>
            <div className="divider"></div>
            <div className="time-box">
              <div>{timeLeft.seconds}</div>
              <span>GIÂY</span>
            </div>
          </>
        ) : (
          <h2 style={{ color: "#fff" }}>Sự kiện đã bắt đầu!</h2>
        )}
      </div>
    </section>
  );
}

export default Countdown;
