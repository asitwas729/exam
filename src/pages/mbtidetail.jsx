import React, { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';
import pic1 from "../img/pic1.png";
const { kakao } = window;

function Mbtidetail() {
  const [map,setMap] = useState(null);

    useEffect(()=>{
        const container = document.getElementById('map');
        const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
        const kakaoMap = new kakao.maps.Map(container, options);
        setMap(kakaoMap);
    },[])

    return (
        <div
            style={{
                width: '100%',
                display: 'inline-block',
                marginLeft: '5px',
                marginRight: '5px',
            }}
        >
            <div id="map" style={{ width: '99%', height: '500px' }}></div>
        </div>
    );
};


export default Mbtidetail;