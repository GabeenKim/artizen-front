import React from "react";
import TestImage from "../../image/test-img.jpg";

import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

export default function Share(props) {
  const currentUrl = "www.artizen.com";
  const hashtags = ["artizen", "아티즌", props.ticket.CONTENTNAME];

  return (
    <>
      <FacebookShareButton style={{ marginRight: "20px" }} url={currentUrl}>
        <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
      </FacebookShareButton>
      <FacebookMessengerShareButton style={{ marginRight: "20px" }} url={currentUrl}>
        <FacebookMessengerIcon size={48} round={true} borderRadius={24}></FacebookMessengerIcon>
      </FacebookMessengerShareButton>
      <TwitterShareButton style={{ marginRight: "20px" }} url={currentUrl} hashtags={hashtags} >
        <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
      </TwitterShareButton>
      <LineShareButton url={currentUrl}>
        <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
      </LineShareButton>
    </>
  )
}