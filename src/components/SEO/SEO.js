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
            titleTemplate={`%s - ${data.site.siteMetadata.title}`}
            meta={[
              { name: `description`, content: metaDescription },
              { property: `og:description`, content: metaDescription },
              {
                property: `og:image`,
                content: `https://sowleshomes.com${
                  data.cardImage.childImageSharp.fluid.src
                }`,
              },
              { property: `og:title`, content: title },
              { property: `og:type`, content: `website` },
              { name: `twitter:card`, content: `summary` },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              { name: `twitter:description`, content: metaDescription },
              {
                name: `twitter:image`,
                content: `https://sowleshomes.com${
                  data.cardImage.childImageSharp.fluid.src
                }`,
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
    cardImage: file(relativePath: { regex: "/profile-photo.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
