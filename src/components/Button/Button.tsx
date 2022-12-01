import React from "react";
import "./Button.css";

function Button({ name }: { name: string }) {
  return (
    <tr className="input-group">
      <td className="input-label"></td>
      <td>
        <button type="submit" className="submit-button">
          {name}
        </button>
      </td>
    </tr>
  );
}

export default Button;
