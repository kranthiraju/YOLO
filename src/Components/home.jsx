import React, { useContext } from "react";
import './home.css'
import Card from "./card/card"
import { Datacontext } from "../context/context";
import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()

    const {values} = useContext(Datacontext)
    const {yolodata} = values

    const handleMycart = ()=>{
        navigate('/cart')
    }
    return(
        <div className="back">
            <h1>Yolo Cart</h1>
            <i className="fa fa-shopping-cart fa-3x" id="my" onClick={handleMycart}> MyCart</i>
            <div className="rack">
                {yolodata.map(i=><Card item={i} key={i.id+"key"}/>)}
            </div>
        </div>
    )
}

