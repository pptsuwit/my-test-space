import "./index.css";
export default function page() {
  return (
    <div className="overflow-hidden">
      <iframe
        //   className="w-full h-screen object-cover overflow-hidden"
        src="https://www.youtube.com/embed/J4d-a7dVtiQ?autoplay=1&mute=1"
        title="🌧️ เสียงฝนตก สบายๆ | เข้ามาบนเตียงแล้วสัมผัสสายฝนที่ริมหน้าต่าง😴"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="absolute text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-white text-center">
        <h1 className="uppercase leading-4">Rain</h1>
      </div>

      <div className="description">
        <p>The best rain sound from the nature</p>
        <p>for sleep, relaxing and meditation</p>
        <p className="copyright">
          Video Credit: @Rainy_Bedroom{" "}
          <a href="https://www.youtube.com/watch?v=J4d-a7dVtiQ">
            https://www.youtube.com/@Rainy_Bedroom
          </a>
        </p>
        <p className="copyright">
          Source Code Credit: @AsmrProg{" "}
          <a href="https://www.youtube.com/watch?v=LHu5YO-0Qo0">
            https://www.youtube.com/@AsmrProg/videos
          </a>
        </p>
      </div>
    </div>
  );
}
