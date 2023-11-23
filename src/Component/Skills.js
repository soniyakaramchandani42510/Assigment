import React from "react";

const skillsdata = [
  {
    name: "HTML/CSS",
    proficiency: "70%",
  },
  {
    name: "React Js",
    proficiency: "60%",
  },
  {
    name: "Javascript",
    proficiency: "90%",
  },
];

const Skills = () => {
  return (
    <>
      <div className="mb-5 wow fadeIn">
        <div className="text-start mb-1-6 wow fadeIn">
        <h2 className="mb-0 " style={{color:'#509dc2'}}>Skills &amp; Experience</h2>
          
        </div>
      
        <div className="progress-style1">
          {skillsdata.map((data) => (
            <>
              <div className="progress-text">
                <div className="row">
                  <div className="col-6 fw-bold">{data.name}</div>
                  <div className="col-6 text-end">{data.proficiency}</div>
                </div>
              </div>
              <div className="custom-progress progress rounded-3 mb-4">
                <div
                  className="animated custom-bar progress-bar slideInLeft"
                  style={{ width: `${data.proficiency}`, background:"#53c88a"}}
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="10"
                  role="progressbar"
                ></div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
