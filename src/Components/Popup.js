import React, {useState} from "react";
import styled from "styled-components";
import {AiFillCloseCircle} from "react-icons/ai"
import {FaAngleLeft, FaAngleRight} from "react-icons/fa"
import theme from "../theme";
import media from "styled-media-query";

let ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
`;
let InnerContainer = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,0.5);
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 100px;
  border-radius: 10px;
  padding-bottom: 10px;
  ${media.lessThan("medium")`
    left: 50%;
    transform: translate(50, 0);
  `}
`;
let HeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  padding-top: 5px;
`;
let Image = styled.img`
  width: 500px;
  object-fit: cover;
  ${media.lessThan("medium")`
    width:300px;
  `}
`;
const PopUp =(props)=>{
    let [next,setNext]=useState(0);
    return(
        <ModalContainer>
            <InnerContainer>
                <HeaderContainer onClick={()=>{
                    props.onChangePopup()
                }}><AiFillCloseCircle/></HeaderContainer>
                <FaAngleLeft size={20} onClick={()=>{
                    if(next===0){
                        setNext(3);
                    }else{
                        setNext(next-1);
                    }
                }}/>
                <Image src={props.src[next]}/>
                <FaAngleRight size={20} onClick={()=>{
                    if(next===3){
                        setNext(0);
                    }else{
                        setNext(next+1);
                    }
                    }}/>
            </InnerContainer>
        </ModalContainer>
    );
}

export default PopUp;
