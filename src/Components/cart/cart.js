import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './cart.css'
import SmallCart from "../smallCart/smallcart"

export default function Cart() {
    const [cartPro,setcartPro] = useState()
    const [total,settotal] = useState()
    const navigate = useNavigate()
    const handlecart = () =>{
        setcartPro(JSON.parse(localStorage.getItem("zoo"))||[])
    }
    useEffect(()=>{
        handlecart()
        localStorage.setItem("checkout",0)
    },[])
    useEffect(()=>{
        setInterval(()=>{
            settotal(localStorage.getItem("checkout"))
        },[1000])
    })
    return(
        <div className="cart">
            <h1>MY CART</h1>
            {cartPro ? cartPro.map(i=><SmallCart item={i} key={i.item+"key"}/>):<i class="fa fa-snapchat-ghost fa-5x" style={{color:"red"}}></i>}
            <div className="group">
                <button onClick={()=>navigate('/')}>Continue Shopping</button>
                <button style={{background:"rgba(219, 0, 0, 1)",color:"white"}}>Place Order {total}</button>
            </div>
        </div>
    )
}
