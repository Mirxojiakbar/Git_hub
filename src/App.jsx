import { useState } from "react";
import Nav from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer";
import { Context } from "./context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./components/OverViev";
import Repos from "./components/Repos";
import Left_side from "./components/Left"
import SecondMain from "./UI/Second_nav"
import Followers from "./components/Followers/index"
import Followings from "./components/Followings/index"
import Find from "./components/Found"

import Repo_two from "./components/Repos_two"

const App = () => {
  const [state, setState] = useState(false);
  const [apiValue, setApi] = useState(localStorage.getItem("key") || "mirxojiakbar");
  console.log(apiValue);
  return (
    <>
      <BrowserRouter>
        <Context.Provider value={{ state: state, setState: setState, apiValue: apiValue, setApi: setApi }}>
          <Nav />
          <Main />
          <div className="container-xl ">
            <div className="row">
              <Left_side />
              <SecondMain />
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/repositories" element={<Repos />} />
                <Route path="/followers" element={<Followers />} />
                <Route path="/followings" element={<Followings />} />
                <Route path="/find" element={<Find />} />
                <Route path="/repositories_two" element={<Repo_two />} />
              </Routes>
            </div>

          </div>
          <Footer />

        </Context.Provider>
      </BrowserRouter>
    </>
  );
};


export default App;