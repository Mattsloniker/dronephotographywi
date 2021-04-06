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
          </div>
           <script src="https://apps.elfsight.com/p/platform.js" defer></script>
           <div class="elfsight-app-78dc7f60-06bf-4808-8bac-e470db8171ac"></div>
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
