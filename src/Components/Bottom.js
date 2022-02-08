import styled from "styled-components";
import React, {useState} from "react";
import {AiFillGithub} from "react-icons/ai";

let Contents4 = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: space-between;
  padding: 80px 20%;
`;
let ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
let MainText = styled.h3`
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  
`;
let SubText = styled.h4`
  color: white;
  font-weight: 500;
  font-size: 20px;
`;
let RoundView = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border: 2px solid #FFFFFF;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.onMouse? "#FFFFFF":"#000000"};
  cursor: ${props => props.onMouse? "pointer": "auto"};;
`;


const Bottom =()=>{
    let [onMouse,setOnMouse] =useState(false);
    return(
        <Contents4>
            <ItemBox>
                <MainText>LIVE IN</MainText>
                <SubText>제주시 한림읍</SubText>
            </ItemBox>
            <ItemBox>
                <MainText>GIT HUB</MainText>
                <a href="https://github.com/DeveloperJSKIM">
                <RoundView
                    onMouse = {onMouse}
                    onMouseOver={()=>{
                        setOnMouse(true);
                    }}
                    onMouseOut={()=>{
                        setOnMouse(false);
                    }}
                >
                    <AiFillGithub color={onMouse? "#000000":"#FFFFFF"} size={30}/>
                </RoundView>
                </a>
            </ItemBox>
        </Contents4>
    );
};

export default Bottom
