"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { apiCalling } from "./ApiCalling";
import { SpinnerCircularFixed } from "spinners-react";
import CommonButton from "./CommonButton";

type productData = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
};

const page = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // console.log(search)

  let token = localStorage.getItem("user-token") || null;


  const getData =async () =>{
    let practise = await apiCalling("https://dummyjson.com/products","GET");
      // console.log(practise)
      setData(practise.products)
  }

  const getSearchData =async () =>{
    let practise = await apiCalling(`https://dummyjson.com/products/search?q=${search}`,"GET");
      // console.log(practise)
      setData(practise.products)
  }


  const handleLogout = () =>{
    alert("Logout Successfull");
    localStorage.removeItem("user-token");
    localStorage.removeItem("user");
  }

  
  
  useEffect(() => {
    search ? getSearchData() : getData();
  }, [search]);
  
  return (
     
    
    
    <>
    
      <h1 className="text-4xl text-blue-500 w-96 m-auto mt-5px">
        Product page
      </h1>
      <div className="flex justify-between px-20">
      
      <div className="relative w-96 ml-20 mt-5">
        <input
          type="text"
          placeholder="Search Products here"
          className="w-96 rounded-md border border-gray-500 text-center p-1"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          />
        <i className="absolute right-2 top-2">
          <FiSearch color="gray" size="20" />
        </i>
          
      </div>
      {/* <button className="py-2 px-5 bg-blue-200 rounded-md mt-5" onClick={handleLogout}>Logout</button> */}
          <div>
            <Link href="/" onClick={handleLogout}><CommonButton content="Logout" width={""} px="5" py="2" bg="bg-blue-500" color="text-white" radius="rounded-md" /></Link>
          </div>

      </div>


      <table className=" w-10/12 mt-5 m-auto">
        <thead>
          <tr className="table-fixed">
            <th className="border border-blue-400 w-3 bg-blue-200"> </th>
            <th className="border border-blue-400 px-5 text-center bg-blue-200">
              Title
            </th>
            <th className="border border-blue-400 px-5 text-center bg-blue-200">
              Brand
            </th>
            <th className="border border-blue-400 px-5 text-center bg-blue-200">
              Price
            </th>
            <th className="border border-blue-400 px-5 text-center bg-blue-200">
              category
            </th>
            <th className="border border-blue-400 px-5 text-center bg-blue-200">
              Rating
            </th>
            <th className="border border-blue-400 px-5 text-center bg-blue-200">
              Description
            </th>
            <th className="border border-blue-400 px-5 text-center bg-blue-200">
              Stock
            </th>
            <th className="border border-blue-400 px-5 text-center bg-blue-200">
              {" "}
            </th>
          </tr>
        </thead>
        
            <tbody >
        {data.length>0 ?
          data.map((ele: productData) => (
              <tr key={ele.id}>
                <td className="border border-blue-400 px-5 text-left">
                  {ele.id}
                </td>
                <td className="border border-blue-400 px-5 text-left">
                  {ele.title}
                </td>
                <td className="border border-blue-400 px-5 text-left">
                  {ele.brand}
                </td>
                <td className="border border-blue-400 px-5 text-left">
                  Rs.{ele.price}
                </td>
                <td className="border border-blue-400 px-5 text-left">
                  {ele.category}
                </td>
                <td className="border border-blue-400 px-5 text-left">
                  {ele.rating}
                </td>
                <td className="border border-blue-400 px-5 text-left">
                  {
                    ele.description.length >40 ? ele.description.substring(0,35)+"..." : ele.description
                  }
                </td>
                <td className="border border-blue-400 px-5 text-left">
                  {ele.stock}
                </td>
                <td className="border border-blue-400 px-5 text-left  bg-green-200">
                  <button className="bg-green-200 px-2 rounded-md">
                    <Link href={`/products/${ele.id}`}>View</Link>
                  </button>
                </td>
              </tr>
            ))
            :
            <tr className="absolute top-2/4 left-2/4">
              <td>
              <SpinnerCircularFixed size={150} thickness={100} speed={100} color="rgb(96 165 250)" />
              </td>
            </tr>
          }
          </tbody>
      </table>
      
    
    </>
  );
};

export default page;
