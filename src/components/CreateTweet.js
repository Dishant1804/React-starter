import React from "react";

const CreateTweet = ({ tweets, setInputText, setTweets, inputText }) => {
  const userInputHandler = (e) => {
    setInputText(e.target.value);
  };
  const userTweetsHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, inputText]);
    setInputText("");
  };

  return (
    <form onSubmit={userTweetsHandler}>
      <textarea
        value={inputText}
        onChange={userInputHandler}
        cols="50"
        rows="10"
        placeholder="Write a tweet here"
      ></textarea>
      <button>Submit</button>
      {/* <h1>Dishant</h1> */}
    </form>
  );
};

export default CreateTweet;
