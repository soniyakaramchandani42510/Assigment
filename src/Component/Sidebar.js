import React from "react";
import { Button } from "react-bootstrap";

const Sidebar = () => {
  return (
    <>
      <div className="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
        <div className="card border-0 shadow">
          <img
            src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
            alt="Profile"
          />
          <div className="card-body p-1-9 p-xl-5">
            <div className="mb-4">
              <h3 className="h4 mb-0" style={{ color: "#509dc2" }}>
                {" "}
                Johnston
              </h3>
              <span style={{ color: "#509dc2" }}>CEO &amp; Founder</span>
            </div>
            <ul className="list-unstyled mb-4">
              <li className="mb-3">
                <i className="far fa-envelope display-25 me-3 text-secondary"></i>
                dakota@gmail.com
              </li>
              <li className="mb-3">
                <i className="fas fa-mobile-alt display-25 me-3 text-secondary"></i>
                +012 (345) 6789
              </li>
              <li>
                <i className="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>
                205 Main Street, USA
              </li>
            </ul>
            <Button style={{ background: "#509dc2" }}>
              {" "}
              Edit Profile{" "}
              <i class="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
