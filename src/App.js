import React, { Component, useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "👀": "Eyes",
  "🤐": "Zipper Mouth Face",
  "🙄": "Face with rolling eyes",
  "🤥": "Lying Face",
  "🥱": "Yawning face",
  "😮": "Shocked Face",
  "😂": "Laughing emoji"
};

//Converting our object into Array
let emojisKnown = Object.keys(emojiDictionary);

export default function App() {
  let [meaning, setMeaning] = useState("");

  //Function for emoji Search Bar
  emojiSearchFunction = (e) => {
    var userInput = e.target.value;

    meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have the meaning of this";
    }
    if (userInput === "") {
      meaning = "";
    }
    setMeaning(meaning);
  };

  //Function to find meanings on Click
  emojiClickHandler = (item) => {
    meaning = emojiDictionary[item];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1> Emoji Recognizer</h1>
      <input
        placeholder="Enter your emoji"
        onChange={emojiSearchFunction}
      ></input>
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisKnown.map((item) => {
        return (
          <span
            key={item}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
