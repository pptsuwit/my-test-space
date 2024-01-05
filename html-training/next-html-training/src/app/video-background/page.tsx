import React from "react";

export default function page() {
  return (
    <div className="container">
      <iframe
        src="https://www.youtube.com/embed/J4d-a7dVtiQ?autoplay=1&mute=1"
        title="🌧️ เสียงฝนตก สบายๆ | เข้ามาบนเตียงแล้วสัมผัสสายฝนที่ริมหน้าต่าง😴"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <header>
        <h1>
          <span>Rain</span>
        </h1>
      </header>

      <div className="description">
        <p>The best rain sound from the nature</p>
        <p>for sleep, relaxing and meditaion</p>
        <p className="copyright">
          Video Credit: @Rainy_Bedroom <a href="https://www.youtube.com/watch?v=J4d-a7dVtiQ">https://www.youtube.com/@Rainy_Bedroom</a>
        </p>
        <p className="copyright">
          Source Code Credit: @AsmrProg <a href="https://www.youtube.com/watch?v=LHu5YO-0Qo0">https://www.youtube.com/@AsmrProg/videos</a>
        </p>
      </div>
    </div>
  );
}
