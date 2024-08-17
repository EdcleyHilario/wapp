"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const BannerTop_1 = require("./components/BannerTop");
const MyPerfil_1 = require("./components/MyPerfil");
const NavBar_1 = require("./components/NavBar");
const Post_1 = require("./components/Post");
function App() {
    return (<div className="App">
      <NavBar_1.NavBar />
      <BannerTop_1.BannerTop />
      <div className="wrapper">
        <MyPerfil_1.MyPerfil />
        <Post_1.Post />
      </div>
    </div>);
}
exports.default = App;
