'use client'

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {SpinnerDotted} from "spinners-react";
import { apiCalling } from '../ApiCalling';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import CommonButton from '../CommonButton';

// let LoginUser =  localStorage.getItem("user") || {};


type productDetail = {
  title:string,
  brand:string,
  rating:number,
  description:string,
  stock:string,
  price:number,
  discountPercentage:number,
  thumbnail:string,
  category:string
}

const page = () => {
  const {productId} = useParams();
  const [product,setProduct] = useState<productDetail | null>(null);
  // console.log(product);
  // console.log(LoginUser)
 
  
  const getData = async() =>{
   const data =  await apiCalling(`https://dummyjson.com/products/${productId}`,"GET")
    
      setProduct(data);
    
  }

  useEffect(()=>{
     getData();
  },[])

  // console.log(productId);
  return (
    <div className=' h-96 w-9/12 m-auto text-center p-5'>
      <h1 className='text-4xl text-blue-400'>Product Details</h1>
      <div className='shadow-2xl rounded-md flex leading-10 my-10'>
      <div  className='w-1/6 text-left pl-5'>
        <p>Title</p>
        <p>Brand</p>
        <p>Price</p>
        <p>Description</p>
        <p>Rating</p>
        <p>Stock</p>
        <p>Category</p>
        <p>Discount%</p>
      </div>
      {product ?
      <div className='w-5/6 text-left'>
        <p>- &ensp;{product?.title}</p>
        <p>- &ensp;{product?.brand}</p>
        <p>- &ensp; Rs.{product?.price}</p>
        <p>-&ensp;{product.description.length >70 ? product.description.substring(0,65)+" ..." : product.description}</p>
        <p>-&ensp;{product?.rating}</p>
        <p>-&ensp;{product?.stock}</p>
        <p>-&ensp;{product?.category}</p>
        <p>-&ensp;{product?.discountPercentage}%</p>
      </div> :
      <SpinnerDotted size={150} thickness={100} speed={100} color="rgb(96 165 250)" />
      }
      </div>

      <Link href="/products"><CommonButton content="Back" width={""} px="5" py="2" bg="bg-blue-500" color="text-white" radius="rounded-md" /></Link>
    </div>
  )
}

export default page;
