import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  //const categories = ['One Punh', 'Jedis', 'Dragon Ball']
  const [categories, setCategories] = useState([]);

  // const handleAdd = () => {
  //   // setCategories (cats => [...cats, 'Luke'] );
  //   setCategories([...categories, ':uke'])
  // }

  return (
    <>
      <h2>Desde GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />  
      <hr></hr>

      <ol>
        { 
          categories.map( category => (
            <GifGrid 
             key={category}
             category={category} 

            />
          ))
        }

      </ol>
   </>
  );
}

export default GifExpertApp;
