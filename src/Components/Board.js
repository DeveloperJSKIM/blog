import {db} from '../index.js'
import "firebase/firestore";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Table,Button} from "react-bootstrap";
import {HorizonLine} from "./index";
import {TiClipboard} from "react-icons/ti";
import theme from "../theme";

const Input = styled.input`
  border: 1px solid;
  width: ${props => props.inputsize};
  margin-right: 5px;
  border-radius: 5px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const MainContainer =styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 200px;
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
let PasswordView = styled.div`
  position: fixed;
  width: 400px;
  height: 200px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #282c34;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
let InnerPasswordView=styled.div`

`;


const Board =()=>{
    let [data,setData]=useState([]);
    let [inputTitle,setInputTitle]=useState("");
    let [inputContext,setInputContext]=useState("");
    let arr = [];
    let [passwordView,setPasswordView]=useState(false);
    let [deleteId,setDeleteId]=useState();
    useEffect(()=>{
        db.collection("board").get().then((result)=>{

            result.forEach((doc)=>{
                console.log(doc.data());
                arr.push(doc.data());
            })
        }).then(()=>{
            setData([]);
            setData([...data,arr]);
        });
    },[]);

    const upLoad =(title,context)=>{
        let date = new Date();
        let newId = date.getTime().toString();
        db.collection("board").doc(newId).set({id:newId,title: title,context:context}).then(
            ()=>{
                window.location.reload();
            }
        );
    }
    const Delete =()=>{
        db.collection("board").doc(deleteId).delete().then(()=>{
            console.log("Delete Success!");
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        })
    }





    return(
        <MainContainer>
            <NameText>Q&A BOARD</NameText>
            <LineIcon>
                <HorizonLine color={"#000000"}/><TiClipboard size={20}/><HorizonLine color={"#000000"}/>
            </LineIcon>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>id</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                {data[0]!==undefined? data[0].map((item)=>(
                    <BoardContext
                        keys={item.id}
                        id={item.id}
                        title={item.title}
                        context={item.context}
                        setPasswordView={setPasswordView}
                        setDeleteId={setDeleteId}
                    />
                )):null}
                </tbody>
            </Table>
            <InputContainer>
                <Input inputsize={"100px"} placeholder={"제목"} value={inputTitle} onChange={(e)=>setInputTitle(e.target.value)}/>
                <Input inputsize={"300px"} placeholder={"내용"} value={inputContext} onChange={(e)=>setInputContext(e.target.value)}/>
                <Button
                    style={{backgroundColor:"black",border:0}}
                    onClick={()=>{
                        upLoad(inputTitle,inputContext);
                    }}
                >UpLoad
                </Button>
            </InputContainer>
            {passwordView?<PasswordInput
                setPasswordView={setPasswordView}
                delete={Delete}
            />:null}
        </MainContainer>
    );
};
const PasswordInput = (props)=>{
    let [pw,setPw]=useState();
    return(
        <PasswordView>
            <InnerPasswordView>
                <h4 style={{color:"#FFFFFF"}}>Password</h4>
                <Input value={pw} onChange={(e)=>{setPw(e.target.value)}} placeholder={"삭제비밀번호입력"} type={"password"}/>
                <Button
                    onClick={()=>{
                    if(pw==="qwe123"){
                        props.delete();
                    }else{
                        alert("비번그거아닌데")
                        props.setPasswordView(false);
                    }
                }}
                    style={{backgroundColor:theme.NativeColor,border:0,height:30,paddingBottom:30}}
                >확인</Button>
            </InnerPasswordView>
        </PasswordView>
    );
}

const BoardContext =(props)=>{
    return(
        <tr>
            <td>{props.id.slice(8,13)}</td>
            <td>{props.title}</td>
            <td>{props.context}</td>
            <td><Button
                style={{backgroundColor:"black",border:0}}
                onClick={()=>{
                    props.setDeleteId(props.id)
                    props.setPasswordView(true);
                }}
            >X</Button></td>
        </tr>
    );
}

export default Board;
