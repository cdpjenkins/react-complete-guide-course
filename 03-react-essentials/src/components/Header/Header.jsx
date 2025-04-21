import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css"

const adjectives = ["Fundamental", "Fun", "Awesome", "Core", "Super", "Crucial", "Exciting"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function Header() {
    let adjective = adjectives[getRandomInt(adjectives.length)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {adjective} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}
