import React, { useEffect } from 'react';
import Router,{useRouter} from 'next/router';
const API = "http://localhost:8000/api";

export const login =user =>{
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(resposnse =>{
        return resposnse.json();
    })
    .catch(err=>console.log(err));
}

export const authenticate =(data,next)=>{
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt",JSON.stringify(data))
        next();
    }
}

export const signout =next =>{
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt");
        next();
        return fetch(`${API}/signout`,{
            method:"GET"
        })
        .then(response =>console.log("signout success"))
        .catch(err=>console.log(err));
    }
}

export const isAuthenticated= ()=>{
    if(typeof window == "undefined"){
        return false;
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else{
        return false;
    }
}



 