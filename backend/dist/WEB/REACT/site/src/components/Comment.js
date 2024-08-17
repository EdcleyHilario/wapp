"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const phosphor_react_1 = require("phosphor-react");
const Avatar_1 = require("./Avatar");
require("./Comment.css");
function Comment() {
    return (<div className='comment'>
            <Avatar_1.Avatar noBorder={true} src={'https://github.com/diego3g.png'}/>

            <div className='commentBox'>
                <div className='commentContent'>
                    <header>
                        <div className='authorAndTime'>
                            <strong>Hilário</strong>
                            <time title="29 de setembro de 2022 às 13:00" dateTime="2022-09-29">Cerca de 1h</time>
                        </div>
                        <button title='Deletar comentário'>
                            <phosphor_react_1.Trash size={20}/>
                        </button>
                    </header>
                    <p>
                        Muito bom Devon, parabéns!!
                    </p>
                </div>
                <footer>
                    <button>
                        <phosphor_react_1.ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>);
}
exports.Comment = Comment;
