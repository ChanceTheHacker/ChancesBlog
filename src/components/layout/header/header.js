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

  useEvent('scroll', toggleFixedHeader)

  return (
    <div className={`${style.container} theme-checker`} theme="dark">
      <div className={style.titleContainer}>
        <div className={style.title}>
          <Link to={Utils.resolvePageUrl(Config.pages.home)}>
            {/* <h4>
          {this.state.fixedHeader
            ? Config.headerTitleShort
            : Config.headerTitle}
        </h4> */}
            <h4>Chance The Hacker's Blog</h4>
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
