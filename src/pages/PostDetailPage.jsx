import { Link } from "react-router-dom";
import testImage from "../assets/image/post-detail.jpg"

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
                    <h3 class="news-card__title">Футбольный клуб "Динамо" одержал уверенную победу в дерби против "Спартака"</h3>
                    <span class="news-card__date">15.08.2024</span>
                    <p class="descriphion">
                        Вечером 15 августа 2022 года на стадионе «ВТБ Арена» состоялось одно из самых ожидаемых событий футбольного сезона — московское дерби между «Динамо» и «Спартаком». Игра завершилась со счетом 2:0 в пользу «Динамо», что бело-голубым эквивалентом было лидерам чемпионата.

                        Матч начался на высоких скоростях, и уже на 18-й минуте полузащитник «Динамо» Александр Кузьмин открыл счет после резкого удара с правого фланга, точно пробив в нижний угол ворот. Этот гол придал команде уверенность!
                    </p>
                    <img src={testImage} alt="name" />
                    <span class="author">Источник: <strong class="light-success-text">Издание «Футбол+»</strong></span>
                </div>  
            </div>
        </section>
    );
}

export default PostDetailPage;