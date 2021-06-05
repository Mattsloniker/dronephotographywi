import React, { Component } from "react";
import Img from "gatsby-image";


export default class Banner extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="banner">
        <Img
          fluid={data.bannerImage.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="container">
          <div className="banner-details">
            <span></span>
            <h1>Wisconsin Drone Photography</h1>
            <ul className="sub-data">
             {data.bannerList.map((item, index) => {
              return <li key={index}>{item}</li>;
              })}
            </ul>
            <ul className="social">
              <li>
                <a
                  className="fab fa-facebook-f"
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                ></a>
              </li>
              </ul>
              <ul className="social">
              <li>
                <a
                  className="fab fa-instagram"
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-linkedin-in"
                  href={data.linkdin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Matt Sloniker on Linkedin"
                ></a>
              </li>
                 <li>
              </li>
              <li>
                <a
                  className="fab fa-pinterest-p"
                  href="https://www.pinterest.com/hhphotographywi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Pinterest"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
