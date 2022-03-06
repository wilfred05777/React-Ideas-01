import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="container">
      {/* <h1> Task Tracer App</h1> */}
      <Header />
      <Tasks />
    </div>
  );
};

export default App;
