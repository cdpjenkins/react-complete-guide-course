import {useState} from "react";
import "./styles.css";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  // [
  //   "Vanilla JavaScript requires imperative programming",
  //   "Imperative Programming: You define all the steps needed to achieve a result",
  //   "React on the other hand embraces declarative programming",
  //   "With React, you define the goal and React figures out how to get there"
  // ],
  [
      "Behold: I have written some more text here",
      "What does the text say?",
      "It says stuff, and things"
  ]
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Stuff and Things
          </button>

        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h1>{counter}</h1>
          <button onClick={function () {
            setCounter(counter - 1);
          }}>-</button>
          <button onClick={function () {
            setCounter(counter + 1);
          }}>+</button>
        </div>
      </div>
    </div>
  )
}
