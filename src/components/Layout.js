import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";

import { Layout, Menu, Breadcrumb, Icon, Form, Card } from "antd";
import { Link } from "react-router-dom";
import RegistrationForms from "./Form";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Layouts extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="file" />
              <span>User Details</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            {" "}
            <div className="logo" />
          </Header>
          <Card style={{ marginTop: 100, marginLeft: 50, marginRight: 50 }}>
            {this.props.display}
          </Card>
          <Footer style={{ textAlign: "center" }} />
        </Layout>
      </Layout>
    );
  }
}

export default Layouts;
// fetch(API_PATH, {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   },
//   mode: "no-cors",
//   body: JSON.stringify({
//     username: this.state.username,
//     password: this.state.password
//   })
// })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => console.log(error));
