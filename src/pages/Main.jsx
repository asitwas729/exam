import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, {useEffect} from 'react';
import axios from 'axios';
import Logo from "../img/logo.png";
import "../css/Main.css";
import Header from "./Header";

function Main() {

    return (
    <div>
      <Header/>
      <table>
        <tr>
          <th>이름</th>
          <th>재료</th>
          <th>제조법</th>
          <th>특징</th>
        </tr>


      </table>
      <div>
        </div>
    </div>
  );
}

export default Main;