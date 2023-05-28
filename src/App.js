import React, { useState } from "react";
//Import Components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const name = "Dishant";
  const [inputText, setInputText] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div>
      <CreateTweet
        inputText={inputText}
        setInputText={setInputText}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} />
    </div>
  );
}

export default App;
