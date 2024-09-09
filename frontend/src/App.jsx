import Input from "./components/Input";
import Nav from "./components/Nav";
import CommentCards from './components/CommentCards';
function App() {
  return (
    <div className="w-3/4 m-auto">
      <div className="text-center">
        <Nav />
        <Input />
        <h1 className="text-3xl font-mono underline"></h1>
      </div>
      <CommentCards />
    </div>
  );
}

export default App;
