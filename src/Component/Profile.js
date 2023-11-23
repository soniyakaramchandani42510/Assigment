import React from "react";
import Hackathons from "./Hackathons";
import Skills from "./Skills";
import Education from "./Education";
import About from "./About";
import Sidebar from "./Sidebar";
import Upcoming from "./Upcoming";

const Profile = () => {
  return (
    <>
      <div className="container">
        <div
          className="row justify-content-center"
          style={{ marginTop: "5%" }}
        >
          <Sidebar />
          <div className="col-lg-8">
            <div className="ps-lg-1-6 ps-xl-5">
              <About />
              {/* <Education /> */}
              <Skills />
              <Hackathons />
              <Upcoming/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
