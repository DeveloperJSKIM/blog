import React from "react";
import styled from "styled-components";
import {IoPersonSharp} from "react-icons/io5";
import {HorizonLine} from "./index";
import theme from "../theme";
import ProfileImage from '../assets/ProfileImage.png';

let Contents1 = styled.div`
  padding-top: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${theme.NativeColor};
`;
let LineIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;
let ImageView = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 40px;
`;
let H4 = styled.h4`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`;
let NameText = styled.h3`
  font-size:50px;
  font-weight: bold;
  color: #FFFFFF;
`;
let Who = styled.p`
  font-weight: 600;
  color: #FFFFFF;
`;
let ProfileImageView = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 200px;
  border: 2px solid #FFFFFF;
`;
let EmtpyBox = styled.div`
    height: 70px;
`;

const Profile =()=>{
    return(
        <Contents1>
            <ImageView><ProfileImageView src={ProfileImage}/></ImageView>
            <NameText>김지상</NameText>
            <LineIcon>
                <HorizonLine color={"#FFFFFF"}/><IoPersonSharp size={20} color={"#FFFFFF"}/><HorizonLine color={"#FFFFFF"}/>
            </LineIcon>
            <H4>Front-End Developer</H4>
            <Who>프론트앤드 개발자 김지상 입니다.<br/>열심히 살고 있습니다.<br/>저희집 강아지는 귀엽습니다.(중요)</Who>
            <EmtpyBox/>
        </Contents1>
    );
}

export default Profile;
