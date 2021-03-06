import React from "react";
import HeaderInfo from "../../components/HeaderInfo/HeaderInfo";
import FooterSocial from "../../components/FooterSocial/FooterSocial";
import { headerInfo } from "../../portfolioData";
import "./HeaderInfoContainer.css";

export default function HeaderInfoContainer() {
  return (
    <section className="header-info">
      <div className="container ">
        <div className="row  align-content-center">
          <div className="col-12 text-center">
            <HeaderInfo
              name={headerInfo.name}
              job={headerInfo.job}
              resumeLink={headerInfo.resumeLink}
              fontIcon={headerInfo.fontIcon}
              AnchorText={headerInfo.AnchorText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
