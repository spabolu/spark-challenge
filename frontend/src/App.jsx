import Input from "./components/Input";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="w-3/4 m-auto">
      <div className="text-center">
        <Nav />
        <Input />
        <h1 className="text-3xl font-mono underline">Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
