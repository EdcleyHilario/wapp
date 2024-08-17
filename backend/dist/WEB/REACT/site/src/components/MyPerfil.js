"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPerfil = void 0;
const phosphor_react_1 = require("phosphor-react");
const Avatar_1 = require("./Avatar");
require("./MyPerfil.css");
function MyPerfil() {
    return (<aside className="sidebar">
                <img className='img-top-profile' src="capatag.jpg"/>
                <div className="profile">
                    <Avatar_1.Avatar src="https://github.com/edcleyhilario.png"/>
                    <strong>Edcley Hilario dos Santos</strong>
                    <span>Web Developer</span>
                </div>
                <footer>
                    <a href="#">
                    <phosphor_react_1.PencilSimpleLine size={20}/> Editar seu Perfil
                    </a>
                </footer>
            </aside>);
}
exports.MyPerfil = MyPerfil;
;
