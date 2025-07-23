import Homepage from "./pages/Homepage/Homepage";

import Header from "./Components/Header/Header";

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path="/" element={<Homepage/>} />
      </Routes>
     
    </div>
  );
}

export default App;
