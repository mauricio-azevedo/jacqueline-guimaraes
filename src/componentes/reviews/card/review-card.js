import "./review-card.css";
import React from "react";
import DoctaraliaIcon from "../../../assets/images/doctoria.png";
import GoogleIcon from "../../../shared/google";

const ReviewCard = ({ author, content, link }) => {
  const renderSourceIcon = () => {
    return link?.includes("doctoralia") ? (
      <img src={DoctaraliaIcon} alt="doctoralia" className="doctoralia-icon" />
    ) : (
      <GoogleIcon />
    );
  };

  return (
    <div className="card-review-container">
      <div className="card-review">
        <div className="source-icon">{renderSourceIcon()}</div>
        <p className={"review-text"}>{content}</p>
        <p className={"review-author"}>– {author}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
