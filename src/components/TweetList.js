import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet name={name} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
