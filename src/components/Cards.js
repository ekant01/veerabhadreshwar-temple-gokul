import React from "react";

export default function About() {
  return (
   <>
      <div className="container">
           <div className="row gy-3 my-5 ">
               <div className="col-sm">
                   <div className="card">
                       <img src="5.jpg" className="card-img-top" alt="..."/>
                       <div className="card-body">
                         <h5 className="card-title text-center">ದೇವಾಲಯದ ಗರ್ಭಗುಡಿ</h5>
                         {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                         {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      </div>
                  </div>
                 </div>
                 <div className="col-sm  ">
                    <div className="card">
                         <img src="9.jpg" className="card-img-top" alt="..."/>
                          <div className="card-body">
                             <h5 className="card-title text-center">ಪಲ್ಲಕ್ಕಿ ಉತ್ಸವ</h5>
                             {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                             {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                           </div>
                      </div>    
                 </div>
                 <div className="col-sm  ">
                    <div className="card">
                         <img src="1.jpg" className="card-img-top" alt="..."/>
                          <div className="card-body">
                             <h5 className="card-title text-center">ರಥೋತ್ಸವ</h5>
                             {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                             {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                           </div>
                      </div>    
                 </div>
                     {/* col-sm-6 col-md-4 col-lg-3 */}
                 <div className="col-sm">
                      <div className="card">
                         <img src="6.jpg" className="card-img-top" alt="..."/>
                           <div className="card-body">
                              <h5 className="card-title text-center">ಅಗ್ನಿಪೂಜೆ</h5>
                             {/* <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                             {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                       </div>
                   </div>
              </div>
           </div>
        </>
   );
  }
