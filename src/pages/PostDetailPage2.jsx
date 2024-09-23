import { Link } from "react-router-dom";
import testImage from "../assets/image/post-detail2.jpg"

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
                    <h3 class="news-card__title">«Зенит» обыграл «Спартак» в зрелищном матче и укрепил лидерство в чемпионате России</h3>
                    <span class="news-card__date">24.08.2024</span>
                    <p class="descriphion">
                    В Санкт-Петербурге на "Газпром Арене" сложилось центральное противостояние 10-го тура Российской Премьер-Лиги, где "Зенит" одержал победу над московским "Спартаком" со счетом 3:2. Матч выдался настоящей битвой, полной неожиданных поворотов и красивых моментов.

Счет был открыт уже на 12-й минуте, когда нападающий «Зенита» Матео Кассира завершил атаку сильным ударом после передачи Клаудиньо. Однако «Спартак» быстро ответил — на 27-й минуте Виктор Мозес сравнял счет ударом с пенальти. Команды ушли на перерыв при равном счете 1:1.

Во втором тайме «Зенит» снова вышел вперёд благодаря голу Андрея Мостового, который забил после сольного прохода по флангу. Но «Спартак» не собирался сдаваться, и на 75-й минуте Квинси Промес снова восстановил равновесие.

Кульминация матча наступила на 89-й минуте, когда Артем Дзюба, вернувшийся в состав «Зенита», забил победный гол головой после углового. Эта победа позволила петербуржцам упрочить свое лидерство в чемпионате, увеличив отрыв от преследователей на 5 очков.
                    </p>
                    <img src={testImage} alt="name" />
                    <span class="author">Источник: <strong class="light-success-text">Sport.ru»</strong></span>
                </div>  
            </div>
        </section>
    );
}

export default PostDetailPage;