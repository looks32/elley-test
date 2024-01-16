import React, { useState } from 'react';
// import './AppXY.css';

export default function Aco() {
  // const [aco, setAco] = useState(true);

  const [activeIndex, setActiveIndex] = useState(null);

  const [ acoMap, setacoMap ] = useState([
    {title: '아코디언1', content:'아코디언내용1' },
    {title: '아코디언2', content:'아코디언내용2' },
    {title: '아코디언3', content:'아코디언내용3' },
    {title: '아코디언4', content:'아코디언내용4' },
  ])

  const handleClick = (index) => {
    console.log(index);
    // 현재 열린 항목이 다시 클릭되면 닫히도록 설정
    if (activeIndex === index) {
        setActiveIndex(null);
    } else {
        setActiveIndex(index);
    }
};

  return (
    <ul>
      {acoMap.map(function(e, i){
        return(
          <li key={i}>
            <button type="button" onClick={() => handleClick(i)}>{e.title}</button>
            {activeIndex === i && <p>{e.content}</p>}
          </li>
          )
      })}      
    </ul>
  

  );
}
