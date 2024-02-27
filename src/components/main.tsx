import sonnig from './sonnig.jpg';
import sport from './sport.jpg';
export default function Main(){
    return (
        <div>
            <div className="article">
                <h2>
                    <main id="first-article">Thema 1 : Heute ist es Sonnig</main>
                </h2>
                <img width="500" src={sonnig}  alt="Genieße das Wetter"/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                    sed
                    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea
                    takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="article">
                <h2>
                    <main className="article-title">Thema 2 : Sport</main>
                </h2>
                <img width="500" src={sport} alt="Genieße das Wetter"/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                    sed
                    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea
                    takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="article">
                <h2>
                    <main className="article-title">Thema 3 : Sport</main>
                </h2>
                <img width="500" src={sport} alt="Genieße das Wetter"/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                    sed
                    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea
                    takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>

        </div>
    )
}