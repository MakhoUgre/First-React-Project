
import React, { useState, useEffect } from 'react';


const cats = [
    'https://cf.ltkcdn.net/cats/cat-names/images/orig/323703-1890x1260-gettyimages-538523455-copy.jpg',
    'https://i.ytimg.com/vi/jHWKtQHXVJg/maxresdefault.jpg',
    'http://cdn.shopify.com/s/files/1/0612/1858/6874/articles/iStock_000033170244_Medium_589b3475-c3b9-4b9f-8d56-5a4bb1b3563d.jpg?v=1651517801',
    'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-145679137-scaled-e1619025176434.jpg',
    'https://www.warrenphotographic.co.uk/photography/bigs/37397-Cute-tabby-kitten-wearing-a-Santa-hat-white-background.jpg',
    'https://www.thesprucepets.com/thmb/N3oBKvluoOhOrXHsf4gn2yIyXt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1168381542-eb602851e1de49f399601414a80acf8f.jpg',
    'https://i.ytimg.com/vi/uHKfrz65KSU/maxresdefault.jpg'
    ];

    const SlideShow = () => {
        const [srcIndex, setsrcIndex ] = useState(0);
          
        useEffect (()=>{
          setInterval(()=> {
            setsrcIndex((prevSrcIndex) => {
      
              if (prevSrcIndex === cats.length -1 ) return 0;
              return prevSrcIndex + 1
          });
          },3000)
      
        }, []);
      
  return (
    <>
        <img style={{maxHeight:300 }} src={cats[srcIndex]} alt="" />
    </>
  );
  
}


export default SlideShow ;