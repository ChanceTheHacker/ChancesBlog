/* Vendor imports */
import React, { Component } from 'react'
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
import HackerIcon from '../../../images/hacker-icon'
import style from './header.module.less'
import Config from '../../../../config'
import Utils from '../../../utils'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      lastScrollY: 0,
      fixedHeader: false,
      collapsedMenu: true,
    }
    this.toggleFixedHeader = this.toggleFixedHeader.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleFixedHeader)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleFixedHeader)
  }

  toggleFixedHeader() {
    if (!this.toggleFixedHeader.animationInProgress) {
      this.toggleFixedHeader.animationInProgress = true
      setTimeout(() => {
        this.setState(
          {
            lastScrollY: window.scrollY,
            fixedHeader:
              window.scrollY > 100 && this.state.lastScrollY < window.scrollY,
          },
          () => (this.toggleFixedHeader.animationInProgress = false)
        )
      }, 200)
    }
  }

  toggleMenu() {
    this.setState({
      collapsedMenu: !this.state.collapsedMenu,
    })
  }

  render() {
    //this needs to be rewritten in react hooks, this is definately on the todo

    // const theHacker = "The Hacker's".split('').map((letter, index) => {
    //   return {
    //     letter: letter,
    //     key: index,
    //   }
    // })
    // console.log(theHacker)
    // const transition = useTransition(theHacker, letter => letter.key, {
    //   from: { opacity: 0 },
    //   enter: { opacity: 1 },
    //   leave: { opacity: 0 },
    // })
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
                  this.state.fixedHeader
                    ? style.hiddenDescription
                    : style.visibleDescription
                }
              >
                {Config.headerSubtitle}
              </p>
            </Link>
          </div>
          <div className={style.menuButton}>
            {this.state.collapsedMenu ? (
              <FaBars size="30" onClick={this.toggleMenu} />
            ) : (
              <FaTimes size="30" onClick={this.toggleMenu} />
            )}
          </div>
        </div>
        <div
          className={[
            style.list,
            this.state.collapsedMenu ? style.collapsedMenu : style.expandedMenu,
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
              <Link to={Utils.resolvePageUrl(Config.pages.mozilla)}>
                Firefox
              </Link>
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
}

export default Header
