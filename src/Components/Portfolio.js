import React, {useState} from "react";
import styled from "styled-components";
import {FaReact} from "react-icons/fa";
import {HorizonLine,PopUp} from "./index";
import theme from "../theme";
import PS1 from '../assets/PS1.png';
import PS2 from '../assets/PS2.png';
import PS3 from '../assets/PS3.png';
import PS4 from '../assets/PS4.png';
import media from "styled-media-query";

let Contents2 = styled.div`
  padding-top: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
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
let PortpolioDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
  opacity: ${props => props.opacity};
  cursor: ${props => props.opacity===0.5? "pointer": "auto"};
`;
let PSView = styled.img`
  width: 50%;
  border-radius: 10px;
  border: 2px solid;
  ${media.greaterThan("medium")`
    width: 300px;
  `}
`;



const Portfolio =()=>{
    let [opacity,setOpacity]=useState(1);
    let [viewPopup,setViewPopup]=useState(false);
    let images = [PS1,PS2,PS3,PS4];
    const onChangePopup =()=>{
        viewPopup? setViewPopup(false): setViewPopup(true);
    }
    return(
        <Contents2>
            <NameText>PORTPOLIO</NameText>
            <LineIcon>
                <HorizonLine color={"#000000"}/><FaReact size={20}/><HorizonLine color={"#000000"}/>
            </LineIcon>
            <PortpolioDiv
                opacity={opacity}
                onMouseOver={()=>{
                    setOpacity(0.5);
                }}
                onMouseOut={()=>{
                    setOpacity(1);
                }}
                onClick={()=>{
                    onChangePopup()
                }}
            >
                <PSView src={PS1}/>
            </PortpolioDiv>
            {viewPopup?<PopUp src={images} onChangePopup={onChangePopup}/>:null}
        </Contents2>
    );
};


export default Portfolio;
