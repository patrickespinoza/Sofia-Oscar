
import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTime = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        seg: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <section className="flex w-full justify-center">
      <div className="font-playfair w-full max-w-md px-2">

        {/* CONTADOR EN UNA SOLA LÍNEA */}
        <div className="flex items-center justify-between gap-2">

          {Object.keys(timeLeft).map((interval, index) => (
            <React.Fragment key={interval}>

              {/* BLOQUE DEL CONTADOR */}
              <div
                className="
                  flex flex-1 flex-col
                  items-center justify-center
                  rounded-xl
                  border
                  px-2 py-3
                  sm:px-3 sm:py-4
                "
                style={{
                  backgroundColor: "rgba(251,249,244,0.55)",
                  borderColor: "rgba(164,134,84,0.22)",
                }}
              >

                {/* NÚMEROS EN AZUL TINTA */}
                <span
                  className="
                    font-serif font-normal
                    text-xl
                    sm:text-2xl
                    md:text-4xl
                  "
                  style={{
                    color: "#1D2733",
                  }}
                >
                  {timeLeft[interval]}
                </span>

                {/* ETIQUETAS */}
                <span
                  className="
                    mt-1
                    text-[9px]
                    uppercase
                    tracking-widest
                    sm:text-xs
                  "
                  style={{
                    color: "#777168",
                  }}
                >
                  {interval}
                </span>

              </div>

              {/* SEPARADORES DORADOS */}
              {index < Object.keys(timeLeft).length - 1 && (
                <span
                  className="
                    text-lg
                    sm:text-2xl
                  "
                  style={{
                    color: "#A48654",
                    opacity: 0.8,
                  }}
                >
                  :
                </span>
              )}

            </React.Fragment>
          ))}
        </div>

        {/* MENSAJE FINAL */}
        {Object.keys(timeLeft).length === 0 && (
          <span
            className="
              mt-4 block
              text-center
              font-serif
              text-lg
            "
            style={{
              color: "#1D2733",
            }}
          >
            ¡Llegó el gran día! 🎉
          </span>
        )}

      </div>
    </section>
  );
};

export default Countdown;
