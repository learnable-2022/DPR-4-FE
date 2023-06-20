import React, { useEffect, useState } from "react";
import profileImage from "../assets/Ellipse1.png";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import pdfIcon from "../assets/pdf_icon.svg";
import whatsappIcon from "../assets/whatsapp_icon.svg";
import gmailIcon from "../assets/gmail_icon.svg";
import { ImCancelCircle } from "react-icons/im";
import preview from "../assets/preview.png";
import "./Share.css";
import { useServiceProviderValue } from "../ServiceProvider";

function Share() {
  const [screenshotData, setScreenShotData] = useState("");
  const [previewDisplay, setPreviewDisplay] = useState(true);
  const [{ screenshot }, dispatch] = useServiceProviderValue();

  useEffect(() => {
    setScreenShotData(screenshot);
  }, []);
  let patient_Name = localStorage.getItem("patient_name");
  const handleCancel = () => {
    setScreenShotData(null);
    setPreviewDisplay(false);
  };
  const downloadImage = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
  };

  const shareWhatsapp = () => {
    const img = new Image();
    img.src = screenshot;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      // Convert to .jpg format
      const jpegURL = canvas.toDataURL("image/jpeg");
      // Construct the WhatsApp share URL with the encoded image
      const encodedImage = encodeURIComponent(jpegURL);
      const shareURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        "hello"
      )}&image=${encodedImage}`;
      window.open(shareURL, "_blank");
    };
  };
  console.log(screenshot);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const shareMail = () => {
    const emailSubject = encodeURIComponent("Subject of the email");
    const emailBody = encodeURIComponent("Here is the image I want to share.");

    const emailLink = `mailto:?subject=${emailSubject}&body=${emailBody}&attach=${profileImage}`;

    window.location.href = emailLink;
  };
  return (
    <div className="share">
      <header className="share_header">
        <div className="left_side_share_header">
          <Link to="/Dashboard" className="link">
            <BiArrowBack className="back_arrow" />
          </Link>
          <p>Back</p>
        </div>
        <div className="right_side_share_header">
          <img className="prof_img" src={profileImage} alt="profileImage" />
          <p className="name"> Mrs. Doe Roseline</p>
        </div>
      </header>

      <div className="flexed_div">
        <div className="image_div">
          <ImCancelCircle
            className={previewDisplay ? "cancel_img" : "remove_display"}
            onClick={handleCancel}
          />
          <div className="dimmed_div">
            <img
              className={
                screenshotData ? "screenshot_preview" : "remove_display"
              }
              src={screenshotData} //"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              alt="shareImage"
            />
            <div class="dim-overlay"></div>
          </div>
        </div>
        <div className="share_platforms">
          <div className="group email_share" onClick={shareMail}>
            <div className="wrapper">
              <p>Share via mail</p>
              <img src={gmailIcon} className="gmail_icon" alt="share_icon" />
            </div>
          </div>

          <div className="group whatsapp_share" onClick={shareWhatsapp}>
            <div className="wrapper">
              <p>Share via whatsapp</p>
              <img src={whatsappIcon} alt="share_icon" />
            </div>
          </div>

          <div className="group pdf_share">
            <div className="wrapper">
              <p>Share via PDF</p>
              <img src={pdfIcon} alt="share_icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
