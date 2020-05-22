import React, { useState } from "react"
import styled from "styled-components"

import NavbarHeader from "./NavbarHeader"
import NavbarIcons from "./NavbarIcons"
import NavbarLinks from "./NavbarLinks"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <NavbarWrapper>
      <NavbarHeader handleNavbar={handleNavbar} />
      <NavbarLinks navbarOpen={navbarOpen} />
      <NavbarIcons />
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled.nav`
  @media(min-width: 768px) {
    align-items: center;
    display: flex;
  }
`
