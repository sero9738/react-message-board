import { clsx } from "clsx";
import { HookCallbacks } from "async_hooks";
import React from "react";
import "./NavigationItem.css";

interface NavigationItemProps {
  name: string;
  route: string;
  currentRoute: string;
  setRouteCallback: (route: string) => any;
}

function NavigationItem({
  name,
  route,
  currentRoute,
  setRouteCallback,
}: NavigationItemProps) {
  function onClick(route: string) {
    setRouteCallback(route);
  }

  return (
    <button
      type="button"
      id="nav-create"
      className={clsx(
        "nav-item",
        currentRoute === route && "selected-nav-item"
      )}
      onClick={() => onClick(route)}
    >
      {name}
    </button>
  );
}

export default NavigationItem;
