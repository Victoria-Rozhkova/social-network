import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import type { MenuTheme } from "antd";
import { Layout, Menu, Switch } from "antd";
import { Row } from "antd";
import React, { Suspense, useState } from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Preloader } from "../common/Preloader/Preloader";
//import DialogsContainer from "../Dialogs/DialogsContainer";
import { HomePage } from "../HomePage/HomePage";
import { LoginContainer } from "../Login/Login";
import { Logo } from "../Logo/Logo";
// import NotFound from "../NotFound/NotFound";
//import ProfileContainer from "../Profile/ProfileContainer";
import { SignUp } from "../SignUp/SignUp";
// import UsersContainer from "../Users/UsersContainer";
import style from "./Layout.module.css";

const { Header, Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(
  () => import("../Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(
  () => import("../Profile/ProfileContainer")
);
const UsersContainer = React.lazy(() => import("../Users/UsersContainer"));
// const LoginContainer = lazy(() => import("./components/Login/Login"));
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
            <Row
              className={style.wrapper}
              justify="space-between"
              align="middle"
            >
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
