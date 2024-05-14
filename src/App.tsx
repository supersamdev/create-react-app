import Main from "./components/main/Main"
import Navbar from './components/navbar/Navbar';

const App = () =>  {
  return (
    <div className="container-fluid">
        <Navbar />
        <Main/>
    </div>
  );
};

export default App;