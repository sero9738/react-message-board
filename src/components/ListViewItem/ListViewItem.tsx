import clsx from "clsx";
import React from "react";
import "./ListViewItem.css";

type Message = {
  subject: string;
  body: string;
  read: boolean;
};

interface ListViewItemProps {
  message: Message;
  setRead: (message: Message) => any;
}

function ListViewItem({ message, setRead }: ListViewItemProps) {
  function onClick() {
    setRead(message);
  }

  return (
    <li
      className={clsx("message-item", !message.read && "unread-message")}
      onClick={() => onClick()}
    >
      <p className="message-subject">{message.subject}</p>
      <p className="message-body">{message.body}</p>
    </li>
  );
}

export default ListViewItem;
