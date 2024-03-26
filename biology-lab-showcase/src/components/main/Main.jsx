import React, {useState, useEffect} from "react";
import { SiAtom } from "react-icons/si";



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
    <main className="container section">
      <h2>{title}</h2>
      <section>
        {variant === "left" && (
          <>
            {isLoaded ? (
              <img src={imgUrl} alt={imgAlt} />
            ) : (
              <div className="main-spinner-container">
                <div className="spinner"></div>
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
              <div className="main-spinner-container">
                <div className="spinner"></div>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default Main;
