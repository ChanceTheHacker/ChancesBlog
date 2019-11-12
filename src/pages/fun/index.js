/* Vendor imports */
import React from 'react'
import { useTrail, useSpring, animated } from 'react-spring'

/* App imports */
import style from './fun.module.less'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const Fun = () => {
  const fast = { tension: 1200, friction: 40 }
  const slow = { mass: 10, tension: 200, friction: 50 }
  const trans = (x, y) =>
    `translate3d(${x}px,${y * 0.83}px,0) translate3d(-50%,-50%,0)`

  const [trail, set] = useTrail(6, () => ({
    xy: [0, 0],
    config: i => (i === 0 ? fast : slow),
  }))
  const spring = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0,800%,0)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0,0,0)',
    },
    config: {
      mass: 1,
      friction: 15,
      tension: 250,
    },
  })
  return (
    <Layout>
      <SEO
        title="Just for fun"
        description="fun with animations and react spring"
        path="fun"
        keywords={['javascript', 'frontend', 'blog']}
      />
      <div className={style.container}>
        <animated.h1 style={spring}>
          If you're using Firefox, this animation runs slowly. Visit the Firefox
          tab to help change that!
        </animated.h1>
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="30"
            />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
            />
          </filter>
        </svg>
        <div
          className={style.hooksMain}
          onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}
        >
          {trail.map((props, index) => (
            <animated.div
              key={index}
              style={{ transform: props.xy.interpolate(trans) }}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Fun
