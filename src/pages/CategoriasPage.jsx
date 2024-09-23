import AllNewsIcon from "../assets/image/category-icons/all-news-icon.svg"
import FootBallIcon from "../assets/image/category-icons/football-icon.svg"
import GamesIcon from "../assets/image/category-icons/games-icon.svg"
import HokkeyIcon from "../assets/image/category-icons/hokkey-icon.svg"
import BoxIcon from "../assets/image/category-icons/box-icon.svg"
import BassketBallIcon from "../assets/image/category-icons/bassketball-icon.svg"
import RegbiIcon from "../assets/image/category-icons/regbi.svg"
import MixFightIcon from "../assets/image/category-icons/mix-fight-icon.svg"
import { Link } from "react-router-dom"


function CategoriasPage() {
    return (
        <section class="mobile-block">
            <div class="container">
                <div class="category-row">
                    <Link to="/allnews" class="category-item">
                        <img src={AllNewsIcon} alt="Категория все новости" class="category-item__img" />
                        <span class="category-item__title">Все новости</span>
                    </Link>
                    <Link to="/category/posts" class="category-item">
                        <img src={FootBallIcon} alt="Категория футбол" class="category-item__img" />
                        <span class="category-item__title">Футбол</span>
                    </Link>
                    <div class="category-item">
                        <img src={GamesIcon} alt="Категория кабер-спорт" class="category-item__img" />
                        <span class="category-item__title">Игры</span>
                    </div>
                    <div class="category-item">
                        <img src={HokkeyIcon} alt="Категория хоккей" class="category-item__img" />
                        <span class="category-item__title">Хоккей</span>
                    </div>
                    <div class="category-item">
                        <img src={BoxIcon} alt="Категория бокс" class="category-item__img" />
                        <span class="category-item__title">Бокс</span>
                    </div>
                    <div class="category-item">
                        <img src={BassketBallIcon} alt="Категория баскетбол" class="category-item__img" />
                        <span class="category-item__title">Баскетбол</span>
                    </div>
                    <div class="category-item">
                        <img src={RegbiIcon} alt="Категория регби" class="category-item__img" />
                        <span class="category-item__title">Регби</span>
                    </div>
                    <div class="category-item">
                        <img src={MixFightIcon} alt="Категория микcфайт" class="category-item__img" />
                        <span class="category-item__title">Смешанные бои</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoriasPage;