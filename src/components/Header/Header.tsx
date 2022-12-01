import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

interface HeaderProps {
  unreadMessagesCountText: string;
  currentRoute: string;
  setRouteCallback: any;
}

function Header({ unreadMessagesCountText, currentRoute, setRouteCallback }: HeaderProps) {
  return (
    <header id="header">
        <h1>Message Board</h1>
        <Navigation unreadMessagesCountText={unreadMessagesCountText} currentRoute={currentRoute} setRouteCallback={setRouteCallback} />
    </header>
  );
}

export default Header;
