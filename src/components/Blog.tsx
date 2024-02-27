import Main from "./main.tsx";
import Foot from "./foot.tsx";

export default function Blog(){
    return (
        <div>
        <h1>BLOG</h1>
        <p>Herzlich willkommen in BE</p>
            <header >In meinem Blog finden Sie viele Abmerkung über alltägliche Leben.</header>
            <h3>
                <li>Thema 1</li>
                <li>Thema 2</li>
                <li>Thema 3</li>
            </h3>
            <Main/>
            <Foot/>
        </div>
    )
}