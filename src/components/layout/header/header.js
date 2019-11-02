import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useTransition, animated } from 'react-spring'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa'
/* App imports */
import useEvent from '../../hooks/useEvent'

import HackerIcon from '../../../images/hacker-icon'
import style from './header.module.less'
import Config from '../../../../config'
import Utils from '../../../utils'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isHeaderCollapsed, setHeaderCollapsed] = useState(false)

  function toggleFixedHeader() {
    if (!isHeaderCollapsed && window.scrollY > 100) {
      setHeaderCollapsed(true)
    } else if (isHeaderCollapsed && window.scrollY < 100) {
      setHeaderCollapsed(false)
    }
  }

  function toggleMenu() {
    setMenuOpen(!isMenuOpen)
  }

  //this function adds a listener and cleans it up when component is unmounted

  useEvent('scroll', toggleFixedHeader)

  const theHacker = ' The Hacker'.split('').map((letter, index) => {
    return {
      letter: letter,
      key: index,
    }
  })

  const transition = useTransition(
    !isHeaderCollapsed ? theHacker : [],
    letter => letter.key,
    {
      trail: 50,
      from: {
        opacity: 0,
        transform: 'scale(0)',
      },
      enter: {
        opacity: 1,
        transform: 'scale(1)',
      },
      leave: {
        opacity: 0,
        transform: 'scale(0)',
      },
    }
  )

  return (
    <div className={`${style.container} theme-checker`} theme="dark">
      <div className={style.titleContainer}>
        <div className={style.title}>
          <Link to={Utils.resolvePageUrl(Config.pages.home)}>
            <h4>
              Chance
              {transition.map(({ item, key, props: transition }) => (
                <animated.span style={transition} key={key}>
                  {item.letter}
                </animated.span>
              ))}
              's Blog
            </h4>
            <p
              className={
                isHeaderCollapsed
                  ? style.hiddenDescription
                  : style.visibleDescription
              }
            >
              {Config.headerSubtitle}
            </p>
          </Link>
        </div>
        <div className={style.menuButton}>
          {isMenuOpen ? (
            <FaBars size="30" onClick={toggleMenu} />
          ) : (
            <FaTimes size="30" onClick={toggleMenu} />
          )}
        </div>
      </div>
      <div
        className={[
          style.list,
          isMenuOpen ? style.collapsedMenu : style.expandedMenu,
        ].join(' ')}
      >
        <ul>
          <li>
            <Link to={Utils.resolvePageUrl(Config.pages.home)}>Blog</Link>
          </li>

          <li>
            <Link to={Utils.resolvePageUrl(Config.pages.about)}>Me</Link>
          </li>
          <li>
            <Link to={Utils.resolvePageUrl(Config.pages.tag)}>Tags</Link>
          </li>
          <li>
            <Link to={Utils.resolvePageUrl(Config.pages.fun)}>Fun</Link>
          </li>
          <li>
            <Link to={Utils.resolvePageUrl(Config.pages.mozilla)}>Firefox</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={Config.social.github}
            >
              <FaGithub size="30" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={Config.social.linkedin}
            >
              <FaLinkedin size="30" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={Config.social.twitter}
            >
              <FaTwitter size="30" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={Config.social.myEmail}
            >
              <FaEnvelope size="30" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={Config.social.mySite}
            >
              <HackerIcon size="30" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
