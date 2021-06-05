import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import seo from "contentfulSiteInformation.nofollow"

const seo = contentfulSiteInformation.nofollow;
const robots = [
  seo.no_follow === true ? 'nofollow' : undefined,
].filter((x) => x !== undefined);

function SEO({ description, lang, meta, keywords, title, data }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.contentfulSiteInformation.siteName}`}
            {...robots.length > 0 && <meta name="robots" content={robots.join(', ')} />}
            meta={[
              {
                name: `description`,
                content: data.contentfulSiteInformation.siteDescription
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: data.contentfulSiteInformation.siteDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.contentfulSiteInformation.twiteerHandle
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: data.contentfulSiteInformation.siteDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    contentfulSiteInformation {
      siteName
      siteDescription
      twiteerHandle
    }
  }
`;
