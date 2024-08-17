"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
require("./Avatar.css");
function Avatar({ ...props }) {
    return (<img className={props.noBorder ? "avatarNoBorder" : "avatar"} src={props.src}/>);
}
exports.Avatar = Avatar;
;
