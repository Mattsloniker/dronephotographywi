import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";
import Service from "../components/service";
import Work from "../components/work";
import Testimonial from "../components/testimonial";
import Contact from "../components/contact";


const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.contentfulAboutMe.designation}
      keywords={[`Photography`, `Commercial Photography`, `Photographer`, `Drone Photographer`, `Wisconsin` , 'Arieal Drone Photographer']}
    />
    <Banner data={data.contentfulAboutMe}></Banner>
  
    {data.contentfulSiteInformation.menus
      .filter(item => item === "Work")
      .map(t => {
        return <Work key="Work" data={data.allContentfulWorks}></Work>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Service")
      .map(t => {
        return <Service key="Service" data={data.allContentfulService}></Service>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Testimonials")
      .map(t => {
        return (
          <Testimonial key="Testimonial" data={data.allContentfulTestimonials}></Testimonial>
        );
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Contact")
      .map(t => {
        return <Contact key="Contact" data={data.allContentfulContact}></Contact>;
      })}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      age
      facebook
      github
      gmail
      id
      instagram
      linkdin
      twitter
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      bannerList
    }
    allContentfulService {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulBlogs(limit: 5, sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          createdAt
        }
      }
    }
    allContentfulTestimonials {
      edges {
        node {
          name
          subTitle
          description {
            childMarkdownRemark {
              html
            }
          }
          avatarImage {
            fluid(maxWidth: 200) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    allContentfulWorks {
      edges {
        node {
          siteName
          url
          image {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    contentfulSiteInformation {
      menus
    }
  }
`;
