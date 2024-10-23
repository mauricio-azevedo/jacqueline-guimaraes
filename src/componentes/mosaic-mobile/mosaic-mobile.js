import React from "react";
import "./mosaic-mobile.css";
import Doc from "../../assets/images/document.png";
import ArrowRightCircleOutlined from "../../shared/arrow-right-circle-outlined";

const defaultGap = "1rem";

const MosaicMobile = () => {
  return (
    <div className={"container-narrow"}>
      <div className={"mosaic-mobile-section"}>
        <div className={"top-container"}>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", flex: 1 }}>
              <div className={"mosaic-card blog"}>
                <h3>BLOG</h3>
                <img src={Doc} alt="Documento" />
              </div>
            </div>
            <div style={{ display: "flex", flex: 4 }}>
              <div className={"mosaic-card soon soon-light"}>
                <i className="fa-solid fa-circle-arrow-right"></i>
                <h3>Em breve</h3>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", flex: 1 }}>
              <div className={"mosaic-card soon soon-dark"}>
                <i className="fa-solid fa-circle-arrow-right"></i>
                <h3>Em breve</h3>
              </div>
            </div>
            <div style={{ display: "flex", flex: 4 }}>
              <div className={"mosaic-card article"}>
                <a
                  href="https://peerw.org/index.php/journals/article/view/2052/1172"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                <h3>Artigo publicado:</h3>
                <p>Análise Fílmica De “Tudo Em Todo Lugar..."</p>
                <ArrowRightCircleOutlined />
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flex: 2 }}></div>
        <div style={{ display: "flex", flex: 3 }}></div>
      </div>
    </div>
  );
};

export default MosaicMobile;