import { Link } from "react-router-dom";
import testImage from "../assets/image/post-detail3.jpg"

function PostDetailPage() {
    return (
        <section class="mobile-block">
            <Link to="/category/posts" class="back-button">
                <div class="container">
                    Вернуться
                </div>  
            </Link>
            <div class="container">
                <div class="post-detail-block">
                    <h3 class="news-card__title">Лионель Месси объявил о завершении карьеры в большом футболе</h3>
                    <span class="news-card__date">22.09.2024</span>
                    <p class="descriphion">
                    Сегодня легендарный аргентинский футболист Лионель Месси официально объявил о завершении профессиональной карьеры. В своих заявлениях, опубликованных на личной странице в социальных сетях, Месси поблагодарил фанатов, тренеров, игроков и всех, кто был с ними на протяжении более чем двух достижений в футболе.

«Этот путь был полон ярких моментов, победы, а также сложностей. Я благодарен всем, кто поддержал меня в этом успешном пути. Теперь пришло время сосредоточиться на других аспектах жизни», — отметил Месси в своем начале.

За свою основу Месси установил множество рекордов, включая семь победных «Золотых мячей» и более 700 голов за клубы и сборную. В последние годы он выступал за клуб «Интер Майами», помогая развитию футбола в США.

Клубы и федерации всего мира уже выразили свою благодарность легендам, болельщикам и планируют масштабные акции в его честь. Ожидается, что прощальный матч Месси состоится в следующем месяце.
                    </p>
                    <img src={testImage} alt="name" />
                    <span class="author">Источник: <strong class="light-success-text">FootballPlanet.ru</strong></span>
                </div>  
            </div>
        </section>
    );
}

export default PostDetailPage;