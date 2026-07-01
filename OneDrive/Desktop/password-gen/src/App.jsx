import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setnumber] = useState(false);
  const [character, setcharacter] = useState(false);
  const [password, setpassword] = useState("");
  //use ref hooks for dom manipulation
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if (number) str += "0123456789";
    if (character) str += "!@#$%&*";
    for (let i = 1; i <= length; i++) {
      let charindex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charindex);
    }
    setpassword(pass);
  }, [length, number, character]);

  const copyclipboard = useCallback(() => {
    navigator.clipboard.writeText(password);
  }, [[password]]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
rounded-lg px-4 my-8 text-white transparent shadow-black  py-2"
      >
        <h1 className="text-2xl font-bold  text-center flex justify-center underline  text-white">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 transparent shadow-black">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 transparent"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 p-3 text-bold text-white rounded outline-none shrink-0"
            onClick={copyclipboard}
            title="copy"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={number}
              onChange={() => {
                setnumber((prev) => !prev);
              }}
            />
            <label>Numbers{number ? " ✓" : " ✗"}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={character}
              onChange={() => {
                setcharacter((prev) => !prev);
              }}
            />
            <label>Characters{character ? " ✓" : " ✗"}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
