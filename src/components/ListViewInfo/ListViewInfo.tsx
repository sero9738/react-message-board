import { info } from "console";
import React, { useState } from "react";
import "./ListViewInfo.css";

function ListViewInfo({ infoMessage }: { infoMessage: string }) {
  return <div id="messenger-information">{infoMessage}</div>;
}

export default ListViewInfo;
