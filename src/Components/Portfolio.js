import React, {useState} from "react";
import styled from "styled-components";
import {FaReact} from "react-icons/fa";
import {HorizonLine,PopUp,PortfolioDetail} from "./index";
import theme from "../theme";
import PS1 from '../assets/PS1.png';
import PS2 from '../assets/PS2.png';
import PS3 from '../assets/PS3.png';
import PS4 from '../assets/PS4.png';
import web1 from '../assets/웹페이지1.png';
import web2 from '../assets/웹페이지2.png';
import web3 from '../assets/웹페이지3.png';
import web4 from '../assets/웹페이지4.png';

import PetHospital from '../assets/PetHospital.jpg'
import OceanTraffic from '../assets/OceanTraffic.png'
import media from "styled-media-query";

let Contents2 = styled.div`
  padding-top: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 100px;
`;
let NameText = styled.h3`
  margin-top: 100px;
  font-size:50px;
  font-weight: bold;
`;
let LineIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

let PSView = styled.img`
  object-fit: cover;
  cursor: pointer;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid;
  ${media.greaterThan("medium")`
    width: 200px;
    height: 100px;
  `}
  &:hover{
    filter: brightness(50%);
    opacity: 0.5;
  }
`;

let PortpolioContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
let ImgBox = styled.div`
  display: flex;
  margin-right: 10px;
  margin-left: 10px;
  flex-direction: column;
  
`;



const Portfolio =()=>{
    let [viewPopup,setViewPopup]=useState(false);
    let [viewDetail,setViewDetail]=useState(false);
    let [imgs,setImgs]=useState([PS1]);
    let [title,setTitle]=useState("Nan");
    let [detail,setDetail]=useState("hi")

    const onDetail =(img,title,detail)=>{
        setViewDetail(!viewDetail);
        setImgs(img);
        setTitle(title);
        setDetail(detail)
    }
    return(
        <Contents2>
            <NameText>PORTPOLIO</NameText>
            <LineIcon>
                <HorizonLine color={"#000000"}/><FaReact size={20}/><HorizonLine color={"#000000"}/>
            </LineIcon>
            <PortpolioContainer>
                <ImgBox onClick={()=>onDetail([PS1,PS2,PS3,PS4],"OceanTrafficApp","실시간 해양 정보 오션트래픽앱 페이지 입니다.\nReact-Native로 만들었습니다.")}>
                    <PSView src={PS1}/>
                    <h4>OceanTrafficApp</h4>
                </ImgBox>
                <ImgBox onClick={()=>onDetail([OceanTraffic,web1,web2,web3,web4],"OceanTrafficWeb","오션트래픽웹 페이지 입니다. \nPricing페이지 제작 및 toss 연동 했습니다. \nfacebook소셜 로그인 연동을 진행 했습니다. \nLiveShip및 최적항해 속력 기능을 일부 수정 했습니다.")}>
                    <PSView src={OceanTraffic}/>
                    <h4>OceanTrafficWeb</h4>
                </ImgBox>
                <ImgBox onClick={()=>onDetail([PetHospital],"PetHospital","제주도 내 주변 동물병원 찾기 웹사이트 입니다. \n현재 개발중이며 공공 API를 이용 했습니다.")}>
                    <PSView src={PetHospital}/>
                    <h4>Jeju-PetHospital</h4>
                </ImgBox>
            </PortpolioContainer>
            {
                viewDetail &&
                <PortfolioDetail
                    img={imgs}
                    title={title}
                    detail={detail}
                />
            }
        </Contents2>
    );
};


export default Portfolio;
