import { Link } from "react-router-dom";

function Politica() {
    return (
        <section class="politica">
        <div class="main-menu">
            <div class="container">
                <div class="post-detail-block">
                    <h1 class="title">Главная страница</h1>
                    <p class="description">Добро пожаловать в приложение специлизирующиеся на доведении акуальной новостной информации в кратчайшие сроки!</p>
                    <p class="description">Перед началом использования нашего приложения, просьба тщательно ознакомиться с "политикой конфиденциальности" а после подтвердить что вы ознакомлены и даёте своё добро!</p>
                    <p class="description-button">Ознакомиться можно тут:</p>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="button1">Политика</a>
                    <a href="http://localhost:3000/categorias" class="button2">Я ознакомился!</a>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Politica;