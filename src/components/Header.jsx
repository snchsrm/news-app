import homeIcon from "../assets/image/home-icon.svg"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header class="header">
            <div class="container">
                <Link to="/categorias" class="btn-category">
                    <img src={homeIcon} alt="Кнопка меню" />
                </Link>
            Категории
            </div>
        </header>
    );
}

export default Header;