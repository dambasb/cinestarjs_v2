import React from 'react'
import { Form, FormControl, Image } from 'react-bootstrap'
import avatar from '../assets/avatar.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Form className='d-flex navbar__search'>
        <FormControl
          type='search'
          placeholder='Search'
          className='me-2'
          aria-label='Search'
        />
      </Form>

      <Image src={avatar} />
    </div>
  )
}

export default Navbar
