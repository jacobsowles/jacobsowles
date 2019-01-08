import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              { name: `description`, content: metaDescription },
              { property: `og:description`, content: metaDescription },
              {
                property: `og:image`,
                content: `https://avatars0.githubusercontent.com/u/2268824?s=460&v=4`,
              },
              { property: `og:title`, content: title },
              { property: `og:type`, content: `website` },
              { name: `twitter:card`, content: `summary_large_image` },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              { name: `twitter:description`, content: metaDescription },
              {
                name: `twitter:image`,
                content: `https://avatars0.githubusercontent.com/u/2268824?s=460&v=4`,
              },
              {
                name: `twitter:site`,
                content: data.site.siteMetadata.social.twitter,
              },
              { name: `twitter:title`, content: title },
            ]
              .concat(
                keywords.length > 0
                  ? { name: `keywords`, content: keywords.join(`, `) }
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
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        description
        author
        social {
          twitter
        }
        title
      }
    }
  }
`;
