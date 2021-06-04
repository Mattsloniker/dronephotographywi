import React from "react";

import Layout from "../components/layout";
import robots from "../src/robots.txt";

const robots = () => (
  <Layout>
    <SEO title="robots.txt" />
    <div className="robots.txt">
    </div>
  </Layout>
);

export default robots;