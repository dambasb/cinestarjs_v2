import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'

const Sidebar = () => {
  // TODO return to false
  const [toggleSubmenu, setToggleSubMenu] = useState(true)

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
                <span className='menu-title'>Movies</span>
                <span className={rotateIcon}>
                  <i className='fa-solid fa-angle-right'></i>
                </span>
              </Nav.Link>
              <Nav className={toggleSubmenuClass}>
                <Nav.Item>
                  <Nav.Link href='/action'>Action</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/adventure'>Adventure</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/comedy'>Comedy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/documentary'>Documentary</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/drama'>Drama</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/family'>Family</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/fantasy'>Fantasy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/horror'>Horror</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/mystery'>Mystery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/romance'>Romance</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/science-fiction'>Science Fiction</Nav.Link>
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
