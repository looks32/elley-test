import { useState } from "react";
import Modal from "./basic/Modal";
import Aco from "./Aco";

export default function Tab() {

  let [tab, setTab] = useState(0);
  let [modalShow, setModalShow] = useState(false);

  // function aa(abab){
  //   switch (tab) {
  //     case 0 :
  //      return <div>0</div>;
  //       case 1 :
  //       return <div>1</div>;
  //       case 2 :
  //       return <div>2</div>;
  //     default:
  //       break;
  //   }
  // }

  return(
    <div>
        <button onClick={() => setTab(0)}>0</button>
        <button onClick={() => setTab(1)}>1</button>

        <button onClick={() => 
          setModalShow(!modalShow)
        }>button</button>
        
        {modalShow === true ? <Modal /> : null}
        
        {/* <Modal aa={modalShow} bb={setModalShow}/>  */}

        <Aco/>
    </div>

   
  )
}
