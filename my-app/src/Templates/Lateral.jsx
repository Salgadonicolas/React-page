import React from 'react';
import './Lateral.css'
import { Link } from 'react-router-dom'

export default props => 
<aside className='lateral'>

<nav className='lateral2'>

<Link to="/"> 
 <i className=''></i> Home
 </Link>

 <Link to="/users"> 
 <i className=''></i> Usuario
 </Link>

{/*  <Link to="/UserCrud"> 
 <i className=''></i> UserCrud do Prof
 </Link> */}

 </nav>

 </aside>