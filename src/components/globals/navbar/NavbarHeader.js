import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"

import logo from "../../../images/logo.svg"

const NavbarHeader = ({ handleNavbar }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={logo} alt="company logo" />
      </Link>

      <FaAlignRight className="toggle-icon" onClick={() => handleNavbar()} />
    </HeaderWrapper>
  )
}

export default NavbarHeader

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 1rem;

  .toggle-icon {
    color: yellow;
    cursor: pointer;
    font-size: 1.75rem;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
