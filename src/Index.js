import { render } from "react-dom";
import Heading from "./Heading";
import Input from "./Input";
import "./global.css";

const App = () => {
  return (
    <div>
      <Heading />
      <Input />
    </div>
  );
};

render(<App />, document.getElementById("root"));
