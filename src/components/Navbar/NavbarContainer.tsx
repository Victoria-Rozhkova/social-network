import React from "react";
import { useSelector } from "react-redux";
import { dialogsSelector } from "src/redux/selectors/dialogsSelectors";
import { AppStateType } from "src/redux/store-redux";
import { Navbar } from "./Navbar";

const NavbarContainer = () => {
  const friends = useSelector((state: AppStateType) => dialogsSelector(state));
  return <Navbar friends={friends} />;
};
export default NavbarContainer;
