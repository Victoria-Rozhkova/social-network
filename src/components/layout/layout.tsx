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

import { Preloader } from "@/components/common/preloader/preloader";
import { HomePage } from "@/components/home-page/home-page";
import { Logo } from "@/components/logo/logo";
import { SignUp } from "@/components/sign-up/sign-up";
import style from "@/components/layout/layout.module.css";

const { Header, Content, Footer, Sider } = Layout;

const DialogsPage = React.lazy(() => import("@/pages/dialogs.page"));
const ProfilePage = React.lazy(() => import("@/pages/profile.page"));
const UsersPage = React.lazy(() => import("@/pages/users.page"));
const ChatPage = React.lazy(() => import("@/pages/chat.page"));
const LoginPage = React.lazy(() => import("@/pages/login.page"));
const NotFoundPage = React.lazy(() => import("@/pages/not-found.page"));

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
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: theme === "dark" ? "#001529" : "#fff",
    padding: 0,
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
        <Header className="site-layout-background" style={headerStyle}>
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
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/users/profile/:id" element={<ProfilePage />} />
              <Route path="/dialogs/" element={<DialogsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Content>
        <Footer style={{ textAlign: "center" }}>©2023</Footer>
      </Layout>
    </Layout>
  );
};
