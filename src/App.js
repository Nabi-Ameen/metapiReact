import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import { RxCross2 } from "react-icons/rx";
import Tabs from "./components/Tabs/Tabs";
import { products } from "./assets/data";
import Products from "./components/products";

function App() {
  const [increament, setIncreament] = useState(0);

  const [toggle, setToggle] = useState(false);

  const handleIncreament = () => {
    setIncreament(increament + 1);
  };

  const [text, setText] = useState("");

  const [todo, setTodo] = useState([]);
  const handleTodo = () => {
    setTodo([...todo, text]);
    setText("");
  };

  return (
    <>
      <div className="App">
        <Header />

        <div className="bg-gray-300 p-20">
          <div className="flex items-center rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Add to do"
              className="py-3 px-4 w-[450px] outline-none"
              value={text}
              name="text"
              onChange={(event) => setText(event.target.value)}
            />
            <button
              className="bg-blue-400 px-4 py-3 font-semibold"
              onClick={handleTodo}
            >
              Add
            </button>
          </div>

          {todo.map((item) => {
            return (
              <ul>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>

        {/* <div>
          <Products />
        </div> */}

        <div className="flex justify-center items-center mt-20 rounded-md">
          {/* <div className="w-1/2 h-96 bg-slate-200">
            <Tabs />
          </div> */}
        </div>

        {/* <div className="bg-gray-200 pl-20 p-10 flex gap-2">
          <Card
            desc="Transparent Lightweight Anti Glare UV Eyeglasses For Men and Women White Glasses for Boys and Girls"
            category="women sunglass"
            price={400}
            discount={true}
          />

          <Card
            desc="Eye contact lense eye care lense party wear lense in light grey"
            category="man sunglass"
            price={300}
            discount={false}
          />

          <Card
            desc="Eye contact lense eye care lense party wear lense in light grey"
            category="man sunglass"
            price={300}
            discount={true}
          />
        </div>

        <div className="p-20 bg-blue-300 w-[300px] m-20">
          <div className="font-bold text-xl">{increament}</div>
          <button
            onClick={handleIncreament}
            className="bg-blue-600 text-white p-2 rounded-md mt-6"
          >
            Increament
          </button>
        </div>

        <div className="m-20">
          <button
            onClick={() => setToggle(true)}
            className="bg-blue-600 text-white p-2 rounded-md mt-6 mb-4"
          >
            toggle
          </button>

          {toggle ? (
            <div className="fixed inset-0 bg-black/50">
              {" "}
              <div
                onClick={() => setToggle(false)}
                className="w-1/3 h-1/2 bg-white fixed top-56 left-[550px] rounded-md relative"
              >
                <div className="absolute top-3 right-4">
                  <RxCross2 />
                </div>
              </div>
            </div>
          ) : null}
        </div> */}
      </div>
    </>
  );
}

export default App;
