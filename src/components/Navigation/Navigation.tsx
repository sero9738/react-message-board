import React, { useState } from "react";
import "./Navigation.css";
import NavigationItem from "../NavigationItem/NavigationItem";

type Message = {
  subject: string;
  body: string;
  read: boolean;
};

interface NavigationProps {
  unreadMessagesCountText: string;
  currentRoute: string;
  setRouteCallback: any;
}

function Navigation({
  unreadMessagesCountText,
  currentRoute,
  setRouteCallback,
}: NavigationProps) {
  return (
    <nav id="nav">
      <NavigationItem
        name={"ADD MESSAGES"}
        route={"CREATE"}
        currentRoute={currentRoute}
        setRouteCallback={setRouteCallback}
      />
      <NavigationItem
        name={`MESSAGES${unreadMessagesCountText}`}
        route={"LIST"}
        currentRoute={currentRoute}
        setRouteCallback={setRouteCallback}
      />
    </nav>
  );
}

export default Navigation;
