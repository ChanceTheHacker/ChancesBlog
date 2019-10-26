/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useSpring, animated } from 'react-spring'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Comments from '../../templates/post/comments/comments'
import Utils from '../../utils'
import Config from '../../../config'
import * as style from './mozilla.module.less'

const Mozilla = ({ data: {} }) => {
  const title = 'mozilla'
  const path = '/mozilla'
  const canonicalUrl = Utils.resolvePageUrl(
    Config.siteUrl,
    Config.pathPrefix,
    path
  )
  const springLeft = useSpring({
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
    config: {
      friction: 15,
      tension: 250,
    },
    delay: 300,
  })
  const springRight = useSpring({
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    config: {
      friction: 15,
      tension: 250,
    },
    delay: 600,
  })
  const springBottom = useSpring({
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    config: {
      friction: 15,
      tension: 250,
    },
    delay: 900,
  })

  return (
    <Layout title="Let's fix Firefox!">
      <SEO
        title="Mozilla"
        description="A brief summary of this blog and my work"
        path="mozilla"
      />
      <div className={style.container}>
        <animated.div className={style.content} style={springLeft}>
          <h1>Tweet Mozilla</h1>
          <h3>
            <a
              className={style.link}
              href="http://twitter.com/intent/tweet?text=I%20love%20%20@firefox%20%20because%20of%20it's%20privacy%2C%20but%20the%20animations%20are%20so%20slow.%20%20@mozilla%20%20as%20users%2C%20we%20want%20privacy%20and%20awesome%20animations!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prefilled Tweet with mozilla and firefox tagged!
            </a>
          </h3>
        </animated.div>
        <animated.div className={style.content} style={springRight}>
          <h1>Firefox Satisfaction Survey</h1>
          <h3>
            <a
              className={style.link}
              href="https://qsurvey.mozilla.com/s3/FirefoxInput/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Take a very short survey
            </a>
          </h3>
        </animated.div>
      </div>
      <animated.div className={style.content} style={springBottom}>
        <h1>Share your opinion</h1>
        <div>
          <Comments pageCanonicalUrl={canonicalUrl} pageId={title} />
        </div>
      </animated.div>
    </Layout>
  )
}

Mozilla.propTypes = {
  data: PropTypes.shape({
    profilePhoto: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    skillIcons: PropTypes.object.isRequired,
    toolIcons: PropTypes.object.isRequired,
  }),
}

const ImageList = ({ edges }) => (
  <div className={style.iconsContainer}>
    {edges
      .sort((edgeA, edgeB) =>
        edgeA.node.name.toLowerCase() > edgeB.node.name.toLowerCase() ? 1 : -1
      )
      .map(({ node: { name, childImageSharp } }) => (
        <div className={style.iconWrapper} key={name}>
          <Img
            fixed={childImageSharp.fixed}
            alt={name + ' logo'}
            title={name}
          />
          <label>
            {iconsNameMap[name] ? iconsNameMap[name] : Utils.capitalize(name)}
          </label>
        </div>
      ))}
  </div>
)

ImageList.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string.isRequired,
        childImageSharp: PropTypes.shape({
          fixed: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
}

export const query = graphql`
  {
    profilePhoto: file(name: { eq: "profile-photo" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    skillIcons: allFile(filter: { dir: { regex: "/Mozilla/skills$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    toolIcons: allFile(filter: { dir: { regex: "/Mozilla/tools$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
// Use to set specific icons names
const iconsNameMap = {
  css: 'CSS',
  html: 'HTML',
  zpostgresql: 'PostgreSQL',
  lsass: 'Sass',
}

export default Mozilla
