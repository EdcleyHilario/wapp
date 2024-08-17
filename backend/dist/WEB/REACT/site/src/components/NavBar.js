"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
require("./NavBar.css");
const Ignite_simbol_svg_1 = __importDefault(require("../assets/Ignite_simbol.svg"));
function NavBar() {
    return (<div className='header'>  
  <header className="header">
    <img src={Ignite_simbol_svg_1.default} alt="logoIgnite"/>
  </header>
    </div>);
}
exports.NavBar = NavBar;
