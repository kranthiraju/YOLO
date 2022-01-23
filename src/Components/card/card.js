import React, { useEffect, useState } from "react";
import './card.css'

export default function Card({item}){
    const [cart_p,setCartP] = useState()

    const checkcart = () =>{
        const k = JSON.parse(localStorage.getItem("zoo")) || []
        if(k.filter(i=>i.item===item.id).length===1){
            setCartP(1)
        }
        else{
            setCartP(0)
        }
    }

    const handleadd = (e) =>{
        var l = JSON.parse(localStorage.getItem("zoo")) || []
        if(cart_p===0){
            l.push({"item":item.id,"no":1})
        }
        else{
            l=l.filter(i=>i.item!==item.id)
        }
        localStorage.setItem("zoo",JSON.stringify(l))
        checkcart()
    }

    useEffect(()=>{
        checkcart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[item])
    return(
        <div className="card">
            <img src={item.pic} alt={item.title}/>
            <p>{item.title}</p>
            <h2>{"Rs "+item.price}</h2>
            {cart_p===0 ?
                <i className="fa fa-cart-plus fa-2x" id={item.id} onClick={handleadd}/>
                : <i className="fa fa-opencart fa-2x" id={item.id} onClick={handleadd}/> }
        </div>
    )
}
