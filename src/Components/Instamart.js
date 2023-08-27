import React, { useState } from 'react'

const Section =({title,description, isVisible, setIsVisible})=>{
  return(
    <>
      <div className='border border-black p-2 m-3'>
          <h1 className='font-bold text-xl'>{title}</h1>
          {isVisible ? 
            <>
            <button className='cursor-pointer border border-solid-black-200 rounded-lg p-2 w-24 bg-blue-500 shadow shadow-blue-500 focus:to-blue-500 text-white'
            onClick={()=> setIsVisible(false)}>Hide</button>
           
            </>
          : <>
          <button className='cursor-pointer border border-solid-black-200 rounded-lg p-2 w-24 bg-blue-500 shadow shadow-blue-500 focus:to-blue-500 text-white'
          onClick={()=>setIsVisible(true)}>Show</button>
          
          </>}

          {isVisible && <p>{description}</p>}
        
      </div>
    </>
  );
};


const Instamart = () => {
  const [visibleContent , setVisibleContent] = useState("about");
  return (
    <>
      <h1 className='font-bold text-3xl p-2 m-2'>Instamart</h1> 

      <Section title={"About InstaMart"} description={"Science and technology have become essential aspects of our lives. Technology was a luxury at a point in time, but now it has become a necessity. It is impossible to survive without electricity, television, music systems, mobile phones, internet connections, etc. We start and end our day with technology. So it is indeed difficult to imagine our life without technology, but it should be used with caution. If we become too dependent on technology, it will end up being harmful to us and our health. Overuse of technology can also become self-destructive, so it is important everyone uses technology only when necessary.Advanced technology has increased productivity across all fields of work.  Technology is our new present and future, and it has made life easier and more convenient for us. Humans have become more reliant on science and technology as a result of technological advancements. Every human activity has now been replaced by one created by machines. We rely on technology for every aspect of our lives, and it has become an inseparable element of our lives. The use of contemporary technology has made the entire civilization reliant on it. Without technology, life and business would grind to a halt."}
         isVisible ={visibleContent === "about"}
          setIsVisible ={()=> setVisibleContent( visibleContent === "about" ? "" : "about")}
         />


      <Section title={"Team InstaMart"} description={"Science and technology have become essential aspects of our lives. Technology was a luxury at a point in time, but now it has become a necessity. It is impossible to survive without electricity, television, music systems, mobile phones, internet connections, etc. We start and end our day with technology. So it is indeed difficult to imagine our life without technology, but it should be used with caution. If we become too dependent on technology, it will end up being harmful to us and our health. Overuse of technology can also become self-destructive, so it is important everyone uses technology only when necessary.Advanced technology has increased productivity across all fields of work.  Technology is our new present and future, and it has made life easier and more convenient for us. Humans have become more reliant on science and technology as a result of technological advancements. Every human activity has now been replaced by one created by machines. We rely on technology for every aspect of our lives, and it has become an inseparable element of our lives. The use of contemporary technology has made the entire civilization reliant on it. Without technology, life and business would grind to a halt."}
         isVisible ={visibleContent === "team"}
         setIsVisible ={()=>setVisibleContent(visibleContent === "team" ? "" : "team")}
         />

       <Section title={"Career"} description={"Science and technology have become essential aspects of our lives. Technology was a luxury at a point in time, but now it has become a necessity. It is impossible to survive without electricity, television, music systems, mobile phones, internet connections, etc. We start and end our day with technology. So it is indeed difficult to imagine our life without technology, but it should be used with caution. If we become too dependent on technology, it will end up being harmful to us and our health. Overuse of technology can also become self-destructive, so it is important everyone uses technology only when necessary.Advanced technology has increased productivity across all fields of work.  Technology is our new present and future, and it has made life easier and more convenient for us. Humans have become more reliant on science and technology as a result of technological advancements. Every human activity has now been replaced by one created by machines. We rely on technology for every aspect of our lives, and it has become an inseparable element of our lives. The use of contemporary technology has made the entire civilization reliant on it. Without technology, life and business would grind to a halt."}
         isVisible ={visibleContent === "career"}
         setIsVisible ={()=>setVisibleContent(visibleContent === "career" ? "" : "career")}

         />

    </>
  );
}

export default Instamart;