/* Vendor imports */
import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useTrail, animated } from 'react-spring'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import style from './post-list.module.less'
import TagList from '../tag-list'
import Utils from '../../utils'

const PostList = ({ posts }) => {
  // const [on, toggle] = useState([])
  const trail = useTrail(posts.length, {
    from: {
      opacity: 0,
      transform: 'translate3d(-100%,0,0) scale(0)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0,0,0) scale(1)',
    },
    config: {
      mass: 1,
      friction: 15,
      tension: 250,
    },
  })
  // const spring = useSpring({
  //   opacity: on ? 1 : 0,
  //   transform: on ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
  // })
  return (
    <div className={style.container}>
      {trail.map((animation, index) => {
        const post = posts[index]
        const {
          title,
          date,
          path,
          tags,
          cover,
          excerpt,
        } = post.node.frontmatter
        return (
          <animated.div key={title} className={style.post} style={animation}>
            {/* <Waypoint
              bottomOffset="30%"
              onEnter={() => {
                if (!on[index]) {
                  toggle(on =>
                    on.map((item, i) => {
                      if (i === index) {
                        return true
                      } else {
                        return on[i]
                      }
                    })
                  )
                }
              }}
              onLeave={() => {
                if (on[index]) {
                  toggle(on =>
                    on.map((item, i) => {
                      if (i === index) {
                        return false
                      } else {
                        return on[i]
                      }
                    })
                  )
                }
              }}
            /> */}
            <div className={style.cover}>
              <Link to={Utils.resolvePageUrl(path)}>
                <Img
                  fluid={cover.childImageSharp.fluid}
                  title={excerpt}
                  alt={title}
                />
              </Link>
            </div>
            <div className={style.content}>
              <Link to={Utils.resolvePageUrl(path)}>
                {date ? <label>{date}</label> : null}
                <h2>{title}</h2>
                <p>{excerpt}</p>
              </Link>
              <TagList tags={tags} />
            </div>
          </animated.div>
        )
      })}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          date: PropTypes.string,
          path: PropTypes.string.isRequired,
          tags: PropTypes.arrayOf(PropTypes.string).isRequired,
          cover: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }),
      }),
    })
  ),
}

export default PostList
