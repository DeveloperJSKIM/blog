import React from "react";
import styled from "styled-components";



const HorizonLine = ({color}) => {
    return (
        <div
            style={{
                width: "40%",
                textAlign: "center",
                borderBottom: `3px solid ${color}`,
                lineHeight: "0.1em",
                margin: "10px 10px 20px 10px",
            }}
        >
        </div>
    );
};

export default HorizonLine;
