// import {useState} from "react";
// import Modal from "./Modal";

export default function Photos() {
  // const [show ,setShow] = useState(false);
  // const [imgid,setImgid] = useState("");

  // const handleImage = (e)=>{
  //   setShow(true)   
  //   setImgid(e.target.src)
  // }

  // const handleClose =() =>{
  //   setShow(false)
  // }

  return (
    <>
      <section className="gallery min-vh-100">
        <div className="container-lg">
          <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col" >
              <img id="1" src="22.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="2" src="2.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="4" src="3.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="5" src="6.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="6" src="5.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="7" src="e.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="8" src="28.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="9" src="10.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="10" src="24.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="11" src="9.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="12" src="1.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="13" src="30.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="14" src="27.jpg" classsName="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="15" src="26.jpg" className="gallery-item" alt="" />
            </div>
            <div className="col" >
              <img id="16" src="5.jpg" className="gallery-item" alt="" />
            </div>
           
            <div className="col" >
              <img id="21" src="29.jpg" className="gallery-item" alt="" />
            </div>
          </div>
        </div>
        {/* <div>
        {show && <button onClick={handleClose}>X</button>}
        {show && <Modal imgid={imgid} />}
        </div> */}
      </section>
    
    </>
  );
}
