import React, { Suspense, useState } from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import type { MenuTheme } from "antd";
import { Layout, Menu, Switch } from "antd";
import { Row } from "antd";

import { Preloader } from "@/components/common/Preloader/preloader-";
import { HomePage } from "@/components/HomePage/HomePage";
import { Logo } from "@/components/Logo/logo";
import { SignUp } from "@/components/SignUp/SignUp";
import style from "@/components/Layout/Layout.module.css";

const { Header, Content, Footer, Sider } = Layout;

const Dialogs = React.lazy(() => import("../Dialogs/dialogs-"));
const Profile = React.lazy(() => import("../Profile/Profile"));
const Users = React.lazy(() => import("@/pages/users.page"));
const ChatPage = React.lazy(() => import("@/pages/ChatPage"));
const Login = React.lazy(() => import("@/components/Login/login"));
const NotFound = React.lazy(() => import("../NotFound/NotFound"));

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
  getItem(<NavLink to="/profile">Profile</NavLink>, "1", <UserOutlined />),
  getItem(<NavLink to="/users">Users</NavLink>, "2", <TeamOutlined />),
  getItem(<NavLink to="/dialogs">Messages</NavLink>, "3", <MessageOutlined />),
  getItem(<NavLink to="/chat">Chat</NavLink>, "4", <MessageOutlined />),
  getItem("Settings", "sub2", <FileOutlined />, [getItem("Team 2", "8")]),
];

export const LayoutApp: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState<MenuTheme>("dark");
  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme={theme}
        collapsible
        collapsed={collapsed}
        onCollapse={(value: any) => setCollapsed(value)}
      >
        <div className="logo">
          <Logo />
        </div>

        <Menu theme={theme} mode="inline" items={items} />
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row className={style.wrapper} justify="space-between" align="middle">
            <Switch
              className={style.switch}
              checked={theme === "dark"}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
            <SignUp />
          </Row>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/users/profile/:id" element={<Profile />} />
              <Route path="/dialogs/" element={<Dialogs />} />
              <Route path="/users" element={<Users />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Content>
        <Footer style={{ textAlign: "center" }}>©2023</Footer>
      </Layout>
    </Layout>
  );
};
