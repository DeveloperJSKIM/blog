import React, {useState} from "react";
import styled from "styled-components";
import PS1 from '../assets/PS1.png'
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'
const Container = styled.div`
  display: flex;
  margin-top: 50px;
`;
const ImgView = styled.img`
  width: 200px;
  height: 400px;
  object-fit: cover;
  margin-right: 5px;
  margin-left: 5px;
`;
const ImgContainer=styled.div`
  display: flex;
  align-items: center;
`;
const ProjectReviewContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: pre-wrap;
  text-align:left;
`;
const PortfolioDetail =({img,title,detail})=>{
    let [imgNum,setImgNum]=useState(0);
    return(
        <>
            <Container>
                <ImgContainer>
                    <div style={{cursor:'pointer'}} onClick={()=>{
                        if(imgNum!==0){
                            setImgNum(imgNum-1);
                        }
                    }}>
                        <FaArrowLeft size={20}/>
                    </div>
                    <ImgView src={img[imgNum]}/>
                    <div style={{cursor:'pointer'}} onClick={()=>{
                        if(img.length-1!==imgNum){
                            console.log(imgNum.length)
                            setImgNum(imgNum+1)
                        }
                    }}>
                        <FaArrowRight size={20}/>
                    </div>
                </ImgContainer>
                <ProjectReviewContainer>
                    <h4>{title}</h4>
                    <b>설명</b>
                    <p>{detail}</p>
                </ProjectReviewContainer>
            </Container>
        </>
    );
}

export default PortfolioDetail
