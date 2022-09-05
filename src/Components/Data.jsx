import React, { useEffect } from 'react'

const Data = () => {
  let isLoading = true;
  
  
  let api = 'http://hn.algolia.com/api/v1/search?query=...';
    const fetchApiData = async(url) =>{
      try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        // isLoading = false;
      }catch(error){
        console.log(error);
      }
    };
    
    useEffect(()=>{
      // fetchApiData(api);
    },[]);
    if(isLoading){
      return(
      <>
      <h3>Loading ...</h3>
      </>
    )}

    return (
    <>
    <h2>my tech news post</h2>
    </>
  )
}

export default Data