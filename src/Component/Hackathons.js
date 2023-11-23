import React from "react";
const Hackathonsdata = [
  {
    name: "Google Hackathon",
    desc: "University of defgtion, fecat complete ME of synage",
  },
  {
    name: "Facebook Hackathon",
    desc: "University of defgtion, fecat complete ME of synage",
  },
  {
    name: "Myntra Hackathon",
    desc: "University of defgtion, fecat complete ME of synage",
  },
  {
    name: "Zomato Hackathon",
    desc: "University of defgtion, fecat complete ME of synage",
  },
];
const Hackathons = () => {
  return (
    <>
      <div className="mb-5 wow fadeIn">
        <div className="text-start mb-1-6 wow fadeIn">
        <h2 className="mb-0 " style={{color:'#509dc2'}}>Hackathon Participated</h2>
        </div>
        <div className="row mt-n4">
          {Hackathonsdata.map((data) => (
            <div key={data.id} className="col-sm-6 col-xl-4 mt-4">
              <div className="card text-center border-0 rounded-3">
                <div className="card-body" style={{background:'#509dc2'}}> 
                  <i className="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
                  <h3 className="h5 mb-3" style={{color:"white"}}>{data.name}</h3>
                  <p className="mb-0" style={{color:"white"}}>{data.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hackathons;
