import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div>
      <div className="site-footer" id="footer">
        <div className="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>HOURS AND INFO</h6>
            <ul class="footer-links"></ul>
            <li><a href="https://g.page/HHPhotographyWI?share">1131 Prairie Ave, Beloit, WI 53511</a></li>
            <li><a href="mailto:HHPhotography@dronephotographywi.com">HHPhotography@dronephotographywi.com</a></li>
            <li><a href="tel:608-313-4495">(608) 313-4495</a></li>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="https://dronephotographywi.com">TOP</a></li>
              <li><a href="https://dronephotographywi.com/about-us">About Us</a></li>
              <li><a href="https://dronephotographywi.com/#Service">Pricing</a></li>
              <li><a href="https://dronephotographywi.blog/">Blogs</a></li>
              <li><a href="https://dronephotographywi.com/#Testimonials">Reviews</a></li>
            </ul>
          </div>
          </div>
            </div>
          </div>
        <hr>
      </hr>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="https://dronephotographywi.com/"> HHPhotography</a>.
            </p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
