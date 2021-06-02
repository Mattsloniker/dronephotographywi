import React, { Component } from "react";

export default class service extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="service section" id="Service">
        <div className="container">
        <div className="see-more">
          <div className="section-head">
            <h2>Drone Photography Wisconsin</h2>
            <div class="column" id="Pricing">
  <ul class="price">
    <li class="header">Silver Package</li> 
    	<ul class="feature">
        	<ul class="checkmark">
            	<li>High Resolution Photos <br> (Pick your favorites)</br>
                </li>
            	<li>Professional Editing</li>
            	<li>Commercial Licensing included</li>
       </ul>
          </ul>
         	  	 <ul class="price">
               		<li class="grey">$1,099</li>
               		<li class="grey"><a href="https://calendly.com/hhphotography-1/silver-package?month=2021-06" class="button">Book Now</a></li>
            </ul>
  </ul>
</div>
<div class="column1" id="Pricing"><div class="ribbon ribbon-top-right"><span>POPULAR</span></div>
	<ul class="price">
		<li class="header">Gold Package</li>
			<ul class="feature1">
				<ul class="checkmark1">
					<li>4 Hours of Drone Photography</li>
					<li>Professional Editing</li>
                    <li>Commercial Licensing included</li>
            </ul>
                </ul>
						<ul class="price">
							<li class="grey1">$3,899</li>
								<li class="grey1"><a href="https://calendly.com/hhphotography-1/gold-package?month=2021-06" class="button2">Book Now</a></li>
            			</ul>   
	</ul>
</div>
<div class="column2" id="Pricing">
	<ul class="price">
		<li class="header">Diamond Package</li>
			<ul class="feature2">
				<ul class="checkmark">
					<li>8 Hours of Drone Photography</li>
					<li>Professional Editing</li>
					<li>Commercial Licensing included</li>
    		</ul>
            	</ul>
						<ul class="price">
							<li class="grey">$7,399</li>
								<li class="grey"><a href="https://calendly.com/hhphotography-1/diamond-package?month=2021-06" class="button">Book Now</a></li>
						</ul>
    </ul>
</div>  
          </div>
          <div className="row">
            {data.edges.map((item, index) => {
              return (
                <div key={index} className="col-md-4 mb-3">
                  <div className="service-main">
                    <h3>{item.node.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

    );
  }
}
