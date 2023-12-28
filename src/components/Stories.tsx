import React from "react";
import "./../assets/style/style.scss";
type Props = {};

const Stories = (props: Props) => {
  return (
    <>
      <section className="stories">
        <div className="containerr" style={{ display: "flex" }}>
          <div className="story">
            <div className="story-wrapper">
              <div className="story-box">
                {" "}
                <img
                  src="https://i.pinimg.com/564x/8e/59/43/8e5943153ca4ce1a64acf0c997e48f73.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="story-account">aysun</div>
          </div>
          <div className="story">
            <div className="story-wrapper">
              <div className="story-box">
                <img
                  src="https://i.pinimg.com/564x/8e/59/43/8e5943153ca4ce1a64acf0c997e48f73.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="story-account">aysun</div>
          </div>
          <div className="story">
            <div className="story-wrapper">
              <div className="story-box">
                <img
                  src="https://i.pinimg.com/564x/8e/59/43/8e5943153ca4ce1a64acf0c997e48f73.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="story-account">aysun</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stories;
