// Date: 30/11/2020 19 hs
import React, { useEffect, useState } from 'react';

const CountDown = () => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const [countDown, setCountDown] = useState(new Date('Nov 30, 2023 19:00:00').getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      // Set state to trigger re-render
      setCountDown((prevState) => prevState);

      // Update the DOM elements
      document.getElementById('dias').innerText = Math.floor(distance / day);
      document.getElementById('horas').innerText = Math.floor((distance % day) / hour);
      document.getElementById('minutos').innerText = Math.floor((distance % hour) / minute);
      document.getElementById('segundos').innerText = Math.floor((distance % minute) / second);
    }, second);

    return () => clearInterval(interval);
  }, [countDown]);

  return (
    <div className="contenedor">
      <div className="contenido">
        <div className="contador">
          <div className="responsivo1">
            <div className="cartel">
              <div id="dias" className="numeros"></div>
              <div className="h3"><h3>Días</h3></div>
            </div>
            <div className="cartel">
              <div id="horas" className="numeros"></div>
              <div className="h3"><h3>Horas</h3></div>
            </div>
          </div>
          <div className="responsivo2">
            <div className="cartel">
              <div id="minutos" className="numeros"></div>
              <div className="h3"><h3>Minutos</h3></div>
            </div>
            <div className="cartel">
              <div id="segundos" className="numeros"></div>
              <div className="h3"><h3>Segundos</h3></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
