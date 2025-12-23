import { useEffect, useState } from "react";
import "./BannerSection.scss"
const images = [
  "/images/banner01.png",
  "/images/banner02.png",
  "/images/banner03.png",
  "/images/banner04.png",
  "/images/banner05.png"
];

const BannerSection = () => {
  const [ current, setCurrent ] = useState(0);

  //자동슬라이드
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); //3초 마다 이동
    return () => clearInterval(interval);
  },[]);
  return (
    <section id="banner">
      <div
        className="banner-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img,idx) => (
          <div className="banner-slide" key={idx}>
            </div>
        ))}
      </div>
      </section>
  )
}

export default BannerSection