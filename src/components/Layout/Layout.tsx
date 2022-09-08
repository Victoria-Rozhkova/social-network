import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Col, Row } from "antd";
import React, { Suspense, useState } from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Preloader } from "../common/Preloader/Preloader";
import DialogsContainer from "../Dialogs/DialogsContainer";
import { HomePage } from "../HomePage/HomePage";
import { LoginContainer } from "../Login/Login";
import { Logo } from "../Logo/Logo";
import NotFound from "../NotFound/NotFound";
import ProfileContainer from "../Profile/ProfileContainer";
import { SignUp } from "../SignUp/SignUp";
import UsersContainer from "../Users/UsersContainer";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<any>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  // getItem("Option 1", "1", <PieChartOutlined />),
  // getItem(<NavLink to="/">Home</NavLink>, "2", <DesktopOutlined />),
  getItem("My profile", "sub1", <UserOutlined />, [
    getItem(<NavLink to="/profile">Profile</NavLink>, "3"),
    getItem(<NavLink to="/dialogs">Messages</NavLink>, "4"),
    // getItem("Alex", "5"),
  ]),
  getItem("Users", "sub2", <TeamOutlined />, [
    getItem(<NavLink to="/users">Users</NavLink>, "6"),
    // getItem("Team 2", "8"),
  ]),
  // getItem("Files", "9", <FileOutlined />),
];

export const LayoutApp: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value:any) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["3"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row>
            <Col span={8}>
              <Logo />
            </Col>
            <Col span={8} offset={8}>
              <SignUp />
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/users/profile/:id" element={<ProfileContainer />} />
              <Route path="/dialogs/" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/login" element={<LoginContainer />} />
              {/* <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} /> */}
            </Routes>
          </Suspense>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
