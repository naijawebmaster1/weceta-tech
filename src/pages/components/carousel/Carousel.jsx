import React, { useState, useRef, Fragment } from "react";

import { trackWindowScroll } from "react-lazy-load-image-component";
import Item from "./Item";

import ReactCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";



const WecetaCarousel = () => {
  let data = [
    {
      id: "0",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url: "./img/large/weceta-bg-2.jpeg",
      buttonTag: "QUALITY CONTROL"
    },
    {
      id: "1",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/LNRyGwIJr5c",
      download_url: "./img/large/solutions/solution-2.jpeg",
      buttonTag: "SUSTAINABLE FOOD VALUE CHAIN"
    },
    {
      id: "10",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/6J--NXulQCs",
      download_url: "./img/large/solutions/solution-3.jpeg",
      buttonTag: "GUARANTEE FOOD INTEGRITY"
    },
    {
      id: "100",
      author: "Tina Rataj",
      width: 2500,
      height: 1656,
      url: "https://unsplash.com/photos/pwaaqfoMibI",
      download_url: "./img/large/weceta-bg-1.jpeg",
      buttonTag: "ORGANIC"

    },
    {
      id: "1000",
      author: "Lukas Budimaier",
      width: 5626,
      height: 3635,
      url: "https://unsplash.com/photos/6cY-FvMlmkQ",
      download_url: "/img/large/weceta-bg-2.jpeg",
      buttonTag: "EFFICIENT TRACE BACK MECHANISM"

    },
    {
      id: "1001",
      author: "Danielle MacInnes",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/1DkWWN1dr-s",
      download_url: "./img/large/solutions/solution-1.jpeg",
      buttonTag: "QUALITY CONTROL"
    },
    {
      id: "1003",
      author: "E+N Photographies",
      width: 1181,
      height: 1772,
      url: "https://unsplash.com/photos/GYumuBnTqKc",
      download_url: "./img/large/solutions/solution-2.jpeg",
      buttonTag: "GUARATEED FOOD INTEGRITY"

    },
  ];



  return (
    <>
      {data.map((option, i) => (

        <div key={i} className="review-1">
          <div
            className="animated"
            data-animation="fadeInUp"
            data-animation-delay={400}
          >
            <div className="blog-post">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img m-bottom-30">
                <img
                  className="img-fluid"
                  src={option.download_url}
                  alt="blog-post-image"
                />
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt m-bottom-10">
                {/* Post Data */}
                {/* Post Title */}
                <h5 className="h5-sm">
                  {option.buttonTag}                </h5>
              </div>
              <hr />
              {/* BLOG POST META */}
            </div>
          </div>{" "}
        </div>
      ))}

    </>
  );
}

export default WecetaCarousel;
