import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'

const Sidebar = () => {
  const [toggleSubmenu, setToggleSubMenu] = useState(false)

  const toggleSubmenuClass = toggleSubmenu
    ? 'sub-menu-list'
    : 'sub-menu-list toggle-sub-menu-list'

  const rotateIcon = toggleSubmenu
    ? 'sub-menu-icon'
    : 'sub-menu-icon rotate-sub-menu-icon'

  return (
    <div>
      <div className='sidebar-layout'>
        <div className='sidebar-header'>CinestarJs</div>
        <div className='sidebar-content'>
          <Nav>
            <Nav.Item>
              <Nav.Link href='/'>
                <span className='menu-icon'>
                  <i className='fa-solid fa-house'></i>
                  <span className='menu-title'>Home</span>
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#/home'
                onClick={() => setToggleSubMenu(!toggleSubmenu)}
              >
                <span className='menu-icon'>
                  <i className='fa-solid fa-video'></i>
                </span>
                <span className='menu-title'>Movie</span>
                <span className={rotateIcon}>
                  <i className='fa-solid fa-angle-right'></i>
                </span>
              </Nav.Link>
              <Nav className={toggleSubmenuClass}>
                <Nav.Item>
                  <Nav.Link href='/action'>Action</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/science-fiction'>Science Fiction</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/comedy'>Comedy</Nav.Link>
                </Nav.Item>
              </Nav>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
