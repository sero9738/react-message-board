import React from "react";
import "./ListView.css";
import ListViewInfo from "../ListViewInfo/ListViewInfo";
import ListViewItem from "../ListViewItem/ListViewItem";

type Message = {
  subject: string;
  body: string;
  read: boolean;
};

interface ListViewProps {
  messages: Message[];
  infoMessage: string;
  setRead: (message: Message) => any;
}

function ListView({ messages, infoMessage, setRead }: ListViewProps) {
  return (
    <section id="view-list">
      <ListViewInfo infoMessage={infoMessage} />
      <ul id="message-list">
        {messages.map((message, index) => (
          <ListViewItem key={index} message={message} setRead={setRead} />
        ))}
      </ul>
    </section>
  );
}

export default ListView;
