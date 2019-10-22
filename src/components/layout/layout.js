/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'
/* App imports */
import Header from './header'
import Footer from './footer'
import '../../style/global.less'
import style from './layout.module.less'

const Layout = ({ children, title }) => {
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
    <>
      <Header />
      <div className={style.container}>
        {title ? (
          <animated.div className={style.title} style={spring}>
            <h1>{title}</h1>
          </animated.div>
        ) : null}
        {children}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: '',
}

export default Layout
