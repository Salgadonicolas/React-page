import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from './Main';
import Cadastro from "./Cadastro";
//import UserCrud from "./UserCrud";

export default props => (
    <Routes>
<Route exact path="/" element={<Main />} />
<Route path="/users" element={<Cadastro />} />
{/* COMENTÁRIO JSX */}
{/* 
<Route path="/UserCrud" element={<UserCrud />} />
*/}
<Route path="*" element={<Main />} />
    </Routes>
)