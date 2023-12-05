import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Dropdown, Button, Form, Col, Row, Modal, ListGroup } from "react-bootstrap";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link, } from "react-router-dom";
import { imagesData } from "../../common/commonimages";
import * as Switcherdata from '../../common/switcherdata';

export default function Header() {

  useEffect(() => {
    Switcherdata.localStorageBackUp();
  }, []);

  //Search functionality
  const [show1, setShow1] = useState(false);
  const [InputValue, setInputValue] = useState("");




  const [Lang, setLang] = React.useState(false);
  function Fullscreen() {
    if (
      (document.fullScreenElement && document.fullScreenElement === null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }


  //leftsidemenu
  const openCloseSidebar = () => {
    document.querySelector("body").classList.toggle("sidenav-toggled");
  };
  //rightsidebar
  const Rightsidebar = () => {
    document.querySelector(".sidebar-right").classList.add("sidebar-open");
  };
  const Darkmode = () => {

    if (document.querySelector(".app")?.classList.contains('dark-theme')) {
      document.querySelector(".app")?.classList.remove('dark-theme');
      localStorage.setItem("nowalighttheme", "true");
      localStorage.removeItem("nowadark");

      const DarkMenu2 = document.querySelector("#myonoffswitch6");  // light header
      if (DarkMenu2) {
        DarkMenu2.checked = true;
      }
      const DarkMenu3 = document.querySelector("#myonoffswitch3");  //light menu
      if (DarkMenu3) {

        DarkMenu3.checked = true;
      }

      document.querySelector("#myonoffswitch1").checked = true

    }
    else {
      document.querySelector(".app")?.classList.add('dark-theme');
      localStorage.setItem("nowadark", "true");
      localStorage.removeItem("nowalighttheme");

      const DarkMenu2 = document.querySelector("#myonoffswitch8")//dark header
      if (DarkMenu2) {

        DarkMenu2.checked = true;
      }
      const DarkMenu3 = document.querySelector("#myonoffswitch5")  //dark menu
      if (DarkMenu3) {

        DarkMenu3.checked = true;
      }
      document.querySelector("#myonoffswitch2").checked = true

    }
  };


  //swichermainright
  const swichermainright = () => {
    document.querySelector(".demo_changer").classList.toggle("active");
    document.querySelector(".demo_changer").style.right = "0px";
    if (document.querySelector(".switcher-backdrop")?.classList.contains('d-none')) {
      document.querySelector(".switcher-backdrop")?.classList.add("d-block");
      document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
    }
  };



  return (
    <Fragment>
      <Navbar className="main-header hor-header side-header sticky nav nav-item" style={{ marginBottom: '-63px' }}>
        <div className="main-container container">
          <div className="main-header-left ">
            <div className="responsive-logo">
              <Link to={`${import.meta.env.BASE_URL}dashboard/dashboard1/`} className="header-logo">
                
              </Link>
            </div>
            <div
              className="app-sidebar__toggle"
              data-bs-toggle="sidebar"
              onClick={() => openCloseSidebar()}
            >
              <Link className="open-toggle" to="#">
                <i className="header-icon fe fe-align-left"></i>
              </Link>
              <Link className="close-toggle" to="#">
                <i className="header-icon fe fe-x"></i>
              </Link>
            </div>
            <div className="logo-horizontal">
              <Link to={`${import.meta.env.BASE_URL}dashboard/dashboard1/`} className="header-logo">
        
              </Link>
            </div>
          </div>
          <div className="main-header-right">
            <Navbar.Toggle
              className="navresponsive-toggler d-lg-none ms-auto"
              type="button"
            >
              <span className="navbar-toggler-icon fe fe-more-vertical"></span>
            </Navbar.Toggle>
          </div>
        </div>
      </Navbar>
      <div className="jumps-prevent" style={{ paddingTop: '63px' }}></div>
    </Fragment>
  );
}

Header.propTypes = {};

Header.defaultProps = {};
