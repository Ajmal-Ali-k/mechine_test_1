import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="container ">
        <div className="flex gap-2  ">
          <Sidebar />
          <Main />
        </div>
      </section>
    </main>
  );
}

export default App;
