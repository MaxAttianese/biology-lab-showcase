import React, {useState, useEffect} from "react";
import { SiAtom } from "react-icons/si";
import style from './main.module.css'

const Main = ({
  title,
  servicesTitle,
  services = [],
  imgUrl,
  imgAlt,
  variant = "left" | "right",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = imgUrl;
  }, [imgUrl]);

  return (
    <main className={`${style.container} ${style.section}`}>
      <h2>{title}</h2>
      <section>
        {variant === "left" && (
          <>
            {isLoaded ? (
              <img src={imgUrl} alt={imgAlt} />
            ) : (
              <div className={style.main_spinner_container}>
                <div className={style.spinner}></div>
              </div>
            )}
          </>
        )}
        <div>
          <h5>{servicesTitle}</h5>
          <ul>
            {services.map((service) => {
              return (
                <li key={service}>
                  <span>
                    <SiAtom />
                  </span>{" "}
                  {service}
                </li>
              );
            })}
          </ul>
        </div>
        {variant === "right" && (
          <>
            {isLoaded ? (
              <img src={imgUrl} alt={imgAlt} />
            ) : (
              <div className={style.main_spinner_container}>
                <div className={style.spinner}></div>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default Main;
