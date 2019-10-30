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
import useEvent from '../../use-event/use-event'
import HackerIcon from '../../../images/hacker-icon'
import style from './header.module.less'
import Config from '../../../../config'
import Utils from '../../../utils'

const Header = () => {
  const [isScrolled, setScrolled] = useState(false)
  const [currentScroll, setCurrentScroll] = useState(0)
  const [isMenuOpen, setMenuOpen] = useState(false)

  toggleFixedHeader = () => {
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

  return <div></div>
}

export default Header
