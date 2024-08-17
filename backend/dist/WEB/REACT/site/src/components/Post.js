"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
require("./Post.css");
const Comment_1 = require("./Comment");
const Avatar_1 = require("./Avatar");
function Post() {
    return (<main>
       <article className="post">
            <header>
                <div className='author'>
                    <Avatar_1.Avatar src={'https://github.com/edcleyhilario.png'}/>
                    <div className='authorInfo'>
                        <strong>
                            Edcley Hilario
                        </strong>
                        <span>
                            Web Developer
                        </span>
                    </div>
                    <time title="29 de setembro de 2022 às 13:00" dateTime="2022-09-29">Publicado há 1h</time>
                </div>
            </header>

            <div className='content'>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
            <form className='comentsForm'>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixar um comentário'/>
                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className='commentList'>
                <Comment_1.Comment />
                <Comment_1.Comment />
                <Comment_1.Comment />
            </div>
       </article>
    </main>);
}
exports.Post = Post;
