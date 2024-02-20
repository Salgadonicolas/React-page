import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import './Templates/Main.css'

import { BrowserRouter } from 'react-router-dom'
import Routes from './Templates/Routes';
//import { HashRouter } from 'react-router-dom';

import Superior from './Templates/Superior';
import Lateral from './Templates/Lateral';
import Footer from './Templates/Footer';
//import Main from './Templates/Main';


export default props =>
<BrowserRouter>
    <div className='grid'>
        <Superior />
        <Lateral />
        <Routes />
       
        <Footer />
    </div>
    </BrowserRouter>