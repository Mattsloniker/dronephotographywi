import React, { Component } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
var settings = {
  dots: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 6000
};

export default class Testimonial extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="slider-section section testimonials" id="Testimonials">
        <div className="container">
          <div className="section-head text-center">
            <h3>Reviews</h3>
            <h4>People I've worked with have said...</h4>
          </div>
          <Slider {...settings}>
            {data.edges.map((item, index) => {
              return (
                <div key={index} className="testimonials-item">
                  <div className="testi-inner">
                    <Img
                      className="avatar"
                      fluid={item.node.avatarImage.fluid}
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html
                      }}
                    />
                    <h5 className="name">{item.node.name}</h5>
                    <span className="sub-name">{item.node.subTitle}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
