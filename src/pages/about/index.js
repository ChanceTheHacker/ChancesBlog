/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useSpring, animated, useSprings } from 'react-spring'
import { Waypoint } from 'react-waypoint'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Utils from '../../utils'
import Config from '../../../config'
import * as style from './index.module.less'
import software from '../../components/about-info/software-blurb'
import demo from '../../components/about-info/demo-blurb'

const About = ({ data: { profilePhoto, skillIcons } }) => {
  const delay = 2
  const springLeft = useSpring({
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
    config: {
      friction: 15,
      tension: 250,
    },
  })
  const springRight = useSpring({
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    config: {
      friction: 15,
      tension: 250,
    },
  })
  const softwareSprings = useSprings(
    software.length,
    software.split('').map((_, index) => ({
      delay: index * delay,
      from: { opacity: 0 },
      to: { opacity: 1 },
    }))
  )
  const demoSprings = useSprings(
    demo.length,
    demo.split('').map((_, index) => ({
      delay: index * delay + software.length * delay,
      from: { opacity: 0 },
      to: { opacity: 1 },
    }))
  )
  return (
    <Layout>
      <SEO
        title="About"
        description="A brief summary of this blog and my work"
        path="about"
      />
      <div className={style.container}>
        <animated.div className={style.photo} style={springLeft}>
          <Img fluid={profilePhoto.childImageSharp.fluid} />
        </animated.div>
        <div className={style.content}>
          <animated.h1 style={springRight}>Hi, I'm Chance!</animated.h1>
          <animated.h2 style={springRight}>Contact Me</animated.h2>
          <p className={style.label}>
            Email me:{' '}
            <a
              className={style.link}
              href={Config.social.myEmail}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chance The Hacker
            </a>
          </p>
          <p className={style.label}>
            Tweet me:{' '}
            <a
              className={style.link}
              href={Config.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chance_Hacker@Twitter
            </a>
          </p>
          <h1 />
          <animated.h2 style={springRight}>Freelance Web Dev</animated.h2>
          <p>
            {softwareSprings.map((animation, index) => (
              <animated.span className="box" style={animation}>
                {software[index]}
              </animated.span>
            ))}
          </p>
          <br />
          <animated.h1 style={springRight} />

          <animated.h2 style={springRight}>
            Demolition Site Supervisor
          </animated.h2>
          <p>
            {demoSprings.map((animation, index) => (
              <animated.span className="box" style={animation}>
                {demo[index]}
              </animated.span>
            ))}
          </p>
          <br />
          <animated.h1 style={springRight} />
          <animated.h2 style={springRight}>Skills</animated.h2>
          <ImageList edges={skillIcons.edges} />
        </div>
      </div>
    </Layout>
  )
}

About.propTypes = {
  data: PropTypes.shape({
    profilePhoto: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    flagIt: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.object.isRequired,
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
    skillIcons: allFile(filter: { dir: { regex: "/about/skills$/" } }) {
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
    toolIcons: allFile(filter: { dir: { regex: "/about/tools$/" } }) {
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

export default About
