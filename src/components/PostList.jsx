import PostCard from "./PostCard";

function PostList() {

    const posts = [
        {
            id: 1,
            title: "Стартовал отбор на Чемпионат Мира 2026",
            date: "05.09.2024",
            category: "Футбол"
        },
        {
            id: 2,
            title: "Скоро начнется чемпионат по боксу",
            date: "04.09.2024",
            category: "Бокс"
        },
        {
            id: 3,
            title: "В CS2 вышло грандиозное обновление",
            date: "04.09.2024",
            category: "Игры"
        },
        {
            id: 4,
            title: "Роналду забил 900 гол в карьере",
            date: "03.09.2024",
            category: "Футбол"
        },
        {
            id: 5,
            title: "Valve анонсировали нового героя в Dota 2",
            date: "18.09.2024",
            category: "Игры"
        },
        {
            id: 6,
            title: "Скоро состоится бой между Хабибом Нурмагомедов и Конором Макгрегором",
            date: "05.04.2018",
            category: "Смешанные бои"
        },
        {
            id: 7,
            title: "Сборная России одержала победу над Канадой в финале Чемпионата мира",
            date: "11.07.2022",
            category: "Хоккей"
        },
        {
            id: 8,
            title: "Сборная Франции по регби сенсационно обыграла Новую Зеландию в финале Кубка мира",
            date: "30.12.2023",
            category: "Регби"
        },
        {
            id: 9,
            title: "Александр Усик защитил титул чемпиона мира, нокаутировав Джошуа",
            date: "28.02.2024",
            category: "Бокс"
        },
        {
            id: 10,
            title: "Леброн Джеймс ведёт Лос-Анджелес Лейкерс к победе в финале НБА",
            date: "01.03.2024",
            category: "Басскетбол"
        },
        {
            id: 11,
            title: "Команда G2 Esports выиграла чемпионат мира по League of Legends в драматичном финале",
            date: "22.07.2024",
            category: "Игры"
        },
        {
            id: 12,
            title: "FaZe Clan одерживает победу на чемпионате мира по CS2 сокрушая NAVI в финале",
            date: "18.09.2024",
            category: "Игры"
        },
    ]

    return (
        <div class="all-news-block">
            {posts.map((post, index) => (
                <PostCard
                    key={index}
                    title={post.title}
                    date={post.date}
                    category={post.category}
                />
            ))}
        </div>
    );
}

export default PostList;