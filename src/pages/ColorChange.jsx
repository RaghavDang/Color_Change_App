import { useState } from "react";
import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const ColorChange=()=>{
    const [colorCode,setColorCode]= useState("#FFFFFF");
    // let colorCode;
    //Function
    const doColorChange=()=>{
        setColorCode(getRandomColorCode());
        console.log('Color Change Function call');
    }
    const getRandomColorCode=()=>{
        const hexaCode="0123456789ABCDEF";
        let colorHexaCode="#";
        for(let i=1;i<=6;i++){
            const random=parseInt(Math.random()*16);
            colorHexaCode+=hexaCode[random];
        }
        return colorHexaCode;
    }
    return (<div>
        <Message mycolor={colorCode}/>
        <Button fn={doColorChange}/>
    </div>)
}