import React from "react";

const Counter = (props) => {
  return (
    <div className="container-fluid text-white bg-dark">
      <div className="row d-flex justify-content-center justify-content-center mod">
        <div className="rounded col-1 sepr d-flex justify-content-center justify-content-center">
          <i className="col-1 far fa-clock sepr d-flex justify-content-center justify-content-center"></i>
        </div>
            <div className="rounded col-1 sepr d-flex justify-content-center justify-content-center" >
                 <h1 className=""> {props.time6}</h1>
            </div>
            <div className="rounded col-1 sepr d-flex justify-content-center justify-content-center">
                <h1 className=""> {props.time5}</h1>
             </div>
            <div className="rounded col-1 sepr d-flex justify-content-center justify-content-center">
                 <h1 className="">{props.time4}</h1>
            </div>
            <div className="rounded col-1 sepr d-flex justify-content-center justify-content-center">
                <h1 className="">{props.time3}</h1>
            </div>
             <div className="rounded col-1 sepr d-flex justify-content-center justify-content-center">
                 <h1 className="">{props.time2}</h1>
            </div>
             <div className="rounded col-1 sepr d-flex justify-content-center justify-content-center">
                <h1 className="">{props.time1}</h1>
                </div>
        </div>
    </div>
   
  );
};

export default Counter;
