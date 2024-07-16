import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Counter from "./pages/Counter"
import Input from "./pages/input"
import Input2 from "./pages/input2"
import UserList from "./pages/List"
import MemberList from './components/MemberList';
import SwaggerPage from './components/SwaggerPage';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home!</Link> | {" "}
        <Link to="/member">MemberList</Link> | {" "}
        <Link to="/swagger">Swagger</Link> | {" "}
        <Link to="/about">About</Link> | {" "} 
        <Link to="/counter">Counter</Link> | {" "} 
        <Link to="/input">Input</Link> | {" "} 
        <Link to="/input2">Input2</Link> | {" "} 
        <Link to="/list">List</Link> | {" "} 
      </nav>

      {/* 매핑되는 컴포넌트 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/member" element={<MemberList />}></Route>
        <Route path="/swagger" element={<SwaggerPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/input" element={<Input />}></Route>
        <Route path="/input2" element={<Input2 />}></Route>
        <Route path="/list" element={<UserList />}></Route>
      </Routes>
      
    </div>
  );
}

// const App = () => {
//   return (
//       <div>
//           <MemberInfo />
//       </div>
//   );
// };

export default App;
