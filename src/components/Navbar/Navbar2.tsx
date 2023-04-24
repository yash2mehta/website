import { Layout, Menu, ConfigProvider, Button, MenuProps } from "antd";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
import Logo from "../../assets/cropper_logo.png";

import "./navbar.css";

const CustomMenu = (props: { layout: string }) => {
  const { SubMenu } = Menu;
  return (
    <Menu
      mode={props.layout}
      defaultSelectedKeys={["2"]}
      style={{ lineHeight: "72px" }}
      className="flex-grow justify-end"
    >
      {/* <Menu.Item key="1"><img className='h-fit' src={Logo}/></Menu.Item> */}
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <SubMenu
        key="aboutus"
        title={
          <span>
            <span>About Us</span>
          </span>
        }
      >
        <Menu.Item key="mission_values">
          <Link to="/aboutus/mission_values">Mission & Values</Link>
        </Menu.Item>
        <Menu.Item key="clubstructure">
          <Link to="/aboutus/clubstructure">Club Structure</Link>
        </Menu.Item>
        <Menu.Item key="managementcommittee">
          <Link to="/aboutus/managementcommittee">Management Committee</Link>
        </Menu.Item>
        <Menu.Item key="clubadvisors">
          <Link to="/aboutus/clubadvisors">Club Advisors</Link>
        </Menu.Item>
        <Menu.Item key="testimonials">
          <Link to="/aboutus/testimonials">Testimonials</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="events">
        <Link to="/events">Events</Link>
      </Menu.Item>
      <SubMenu
        key="news"
        title={
          <span>
            <span>News</span>
          </span>
        }
      >
        <Menu.Item key="blog">
          <Link to="/news/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="specialfeatures">
          <Link to="/news/specialfeatures">Special Features</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="research"
        title={
          <span>
            <span>Research</span>
          </span>
        }
      >
        <Menu.Item key="researchreports">
          <Link to="/research/researchreports">Research Reports</Link>
        </Menu.Item>
        <Menu.Item key="specialfeatures">
          <Link to="/news/specialfeatures">Special Features</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="partners">
        <Link to="/partners">Partners</Link>
      </Menu.Item>
      <Menu.Item key="contactus">
        <Link to="/contactus">Contact Us</Link>
      </Menu.Item>
      <Menu.Item key="joinus">
        <Link to="/joinus">
          <Button type="primary" danger>
            Join Us
          </Button>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

const Navbar2 = () => {
  const { SubMenu } = Menu;
  const isAboveMediumScreens = useMediaQuery("(min-width: 960px)");
  const [hamburgerToggle, setHamburgerToggle] = useState(true);

  const toggleOpen: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setHamburgerToggle(!hamburgerToggle);
  };

  return (
    <div>
      <div className="flex">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#E55C56",
            },
          }}
        >
          <img className="max-h-16 my-auto" src={Logo} />
          {isAboveMediumScreens ? (
            <CustomMenu layout={"horizontal"} />
          ) : (
            <div className="flex-grow">
              <Menu
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "72px" }}
                className="justify-center"
              >
                <Menu.Item key="toggle">
                  <button onClick={toggleOpen as any}>
                    <MenuOutlined /> Menu
                  </button>
                </Menu.Item>
              </Menu>
            </div>
          )}
        </ConfigProvider>
      </div>
      {hamburgerToggle ? (
        <div></div>
      ) : (
        <div>
          <CustomMenu layout="inline" />
        </div>
      )}
    </div>
  );
};

export default Navbar2;
