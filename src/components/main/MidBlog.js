import "./MidBlog.scss";
import Banner2Img1 from "../../assets/images/banner2/running-1.jpg"; //임시

const MidBlog = () => {
  return (
    <section id="event">
      <div className="event-box">
        <div className="event-txt">
          <h2>
            PEACY
            <br />
            EVENT
          </h2>
          <p>응모 이벤트 바로가기</p>
        </div>
        {/* 임시 */}
        <img src={Banner2Img1} alt="배너2이미지1" />
      </div>
      <p>1 / 5</p>
    </section>
  );
};

export default MidBlog;
