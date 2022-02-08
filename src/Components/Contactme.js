import styled from "styled-components";
import React, {useState} from "react";
import theme from "../theme";
import {HorizonLine} from "./index";
import {FiSend,FiMail} from "react-icons/fi";

let Contents3 = styled.div`
  padding-top: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${theme.NativeColor};
  
`;
let NameText = styled.h3`
  font-size:50px;
  font-weight: bold;
  color: #FFFFFF;
  margin-top: 100px;
`;
let LineIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;
let H4 = styled.h4`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 30px;
`;
let BoxContainer =styled.div`
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  padding: 10px;
  color: ${props => props.onMouse? theme.NativeColor:"#FFFFFF"};
  margin-left: 25%;
  margin-bottom: 30%;
  background-color: ${props => props.onMouse? "#FFFFFF":theme.NativeColor};
  cursor: ${props => props.onMouse? "pointer": "auto"};;
`;

const Contactme =()=>{
    const [onMouse,setOnMouse]=useState(false);
    return(
        <Contents3>
            <NameText>CONTACT ME</NameText>
            <LineIcon>
                <HorizonLine color={"#FFFFFF"}/><FiSend size={20} color={"#FFFFFF"}/><HorizonLine color={"#FFFFFF"}/>
            </LineIcon>
            <H4>e-mail: jisang8255@naver.com</H4>
            <BoxContainer
                onMouse = {onMouse}
                onMouseOver={()=>{
                    setOnMouse(true);
                }}
                onMouseOut={()=>{
                    setOnMouse(false);
                }}
                onClick={()=>{
                    alert("아직미구현입니다 하하")
                }}
            >
                <FiMail/> Send Mail
            </BoxContainer>

        </Contents3>
    );
}

export default Contactme;
