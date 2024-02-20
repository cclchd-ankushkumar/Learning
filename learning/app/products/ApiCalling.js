"use client"

export const apiCalling = (url,method,headers,body) =>{
    //   if(method=="GET"){
      return fetch(url,{
        method:method,
        headers: headers? headers:null,
        body: body? body:undefined
        
      })
      .then((res)=>res.json())
      .then((res)=> res)
      .catch((err)=> err)
    // }else{
        // return fetch(url,{
        //     method:method,
        //     headers:headers,
        //     body:body
        // })
        // .then((res)=>res.json())
        // .then((res)=>console.log("ankush",res))
        // .catch((err)=>console.log(err))
    // }
}