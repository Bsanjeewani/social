import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Posts />
    </div>
  );
}

export default App;
