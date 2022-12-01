import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CreateView from "./components/CreateView/CreateView";
import ListView from "./components/ListView/ListView";
import ContentBoard from "./components/ContentBoard/ContentBoard";

enum Route {
  CREATE = "CREATE",
  LIST = "LIST",
}

type Message = {
  subject: string;
  body: string;
  read: boolean;
};

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [route, setRoute] = useState(Route.CREATE);
  const [listViewInfoMessage, setListViewInfoMessage] = useState("");
  const [listViewNavigationLabel, setListViewNavigationLabel] = useState("");

  function createMessage(subject: string, body: string) {
    let message: Message = { subject: subject, body: body, read: false };
    addMessages(message);
  }

  function addMessages(message: Message) {
    let newArray = copyToNewArray();
    newArray.unshift(message);
    setMessages(newArray);
    messagesStateHasChanged(newArray);
  }

  function copyToNewArray() {
    const newArray = [];
    for (let i = 0; i < messages.length; i++) {
      newArray.push(messages[i]);
    }
    return newArray;
  }

  function setRead2(message: Message) {
    const index = messages.indexOf(message);
    const newArray = copyToNewArray();
    newArray[index].read = true;
    setMessages(newArray);
    messagesStateHasChanged(newArray);
  }

  function messagesStateHasChanged(messagesArray: Message[]) {
    changeListViewInfoMessage(messagesArray);
    changeListViewNavigationLabel(messagesArray);
  }

  function changeListViewInfoMessage(messagesArray: Message[]) {
    const unreadMessagesCount: number = countUnreadMessages(messagesArray);
    debugger;
    if (unreadMessagesCount === 1) {
      setListViewInfoMessage("You have one unread message.");
    } else if (unreadMessagesCount >= 2) {
      setListViewInfoMessage(
        `You have ${unreadMessagesCount} unread messages.`
      );
    } else {
      setListViewInfoMessage("");
    }
  }

  function changeListViewNavigationLabel(messagesArray: Message[]) {
    const unreadMessagesCount: number = countUnreadMessages(messagesArray);
    if (unreadMessagesCount > 0 && unreadMessagesCount < 6) {
      setListViewNavigationLabel(` (${unreadMessagesCount})`);
    } else if (unreadMessagesCount > 5) {
      setListViewNavigationLabel(" (5+)");
    } else {
      setListViewNavigationLabel("");
    }
  }

  function countUnreadMessages(messagesArray: Message[]) {
    let count: number = 0;
    if (messagesArray != null) {
      messagesArray.forEach((message) => {
        if (message.read === false) {
          count++;
        }
      });
    }
    return count;
  }

  return (
    <div className="App">
      <Header
        unreadMessagesCountText={listViewNavigationLabel}
        currentRoute={route}
        setRouteCallback={setRoute}
      />
      <ContentBoard>
        {route === Route.LIST ? (
          <ListView
            messages={messages}
            infoMessage={listViewInfoMessage}
            setRead={setRead2}
          />
        ) : (
          <CreateView createMessage={createMessage} />
        )}
      </ContentBoard>
    </div>
  );
}

export default App;
