import React, { useContext, useEffect, useState } from "react";
import { Datacontext } from "../../context/context";
import './smallcart.css'

export default function SmallCart({item}) {
    const {values} = useContext(Datacontext)
    const {yolodata} = values

    const [particular,setParticular] = useState({})
    const [counter,setCounter] = useState(1)

    const handleremove = () =>{
        var l = JSON.parse(localStorage.getItem("zoo"))
        localStorage.setItem("zoo",JSON.stringify(l.filter(i=>i.item!==item.item)))
        window.location.reload()
    }

    const handleless = (e) =>{
        e.preventDefault()
        if(counter <= 1) {
            setCounter(0)
            document.getElementById(e.target.id).disabled = true
        }
        else{
            setCounter(counter-1)
            document.getElementById(e.target.id).disabled = false
        }
        var amt = localStorage.getItem("checkout")
        localStorage.setItem("checkout",parseInt(amt)-particular.price)
    }

    const handlemore = (e) =>{
        e.preventDefault()
        setCounter(counter+1)
        var amt = localStorage.getItem("checkout")
        localStorage.setItem("checkout",parseInt(amt)+particular.price)
        document.getElementById("left"+item.item).disabled = false
    }

    useEffect(()=>{
        yolodata.forEach(i=>{
            if(i.id===item.item){
                setParticular(i)
                var amt = localStorage.getItem("checkout") || 0
                localStorage.setItem("checkout",parseInt(amt)+i.price)
            }
        })// eslint-disable-next-line react-hooks/exhaustive-deps
    },[item])// eslint-disable-next-line

    return(
        <div className="smallcart">
            <div className="l_small">
                <img src={particular.pic} alt={particular.title}/>
                <div className="buttons">
                    <button onClick={handleless} id={"left"+particular.id}>-</button>
                    <h3>{counter}</h3>
                    <button onClick={handlemore}>+</button>
                </div>
            </div>
            <div className="r_small">
                <p>{particular.title}</p>
                <h2>{"Rs "+particular.price}</h2>
                <button onClick={handleremove}>Remove</button>
            </div>
        </div>
    )
}
