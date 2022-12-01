import React, { useState } from "react";
import "./TextField.css";

interface TextFieldProps {
  label: string;
  inputRef: any;
}

function TextField({ label, inputRef}: TextFieldProps) {

  return (
    <tr className="input-group">
      <td className="input-label">
        <span>{label}</span>
      </td>
      <td>
        <input ref={inputRef} type="text" className="text-input" required={true}/>
      </td>
    </tr>
  );
}

export default TextField;