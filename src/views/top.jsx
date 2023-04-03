import { useRef } from "react";
import Card from "./card";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


function TopSection() {
    const searchRef = useRef();
    const naigate = useNavigate();

    function handleEnter(e) {
        const str = searchRef.current.value;
        if (e.key === 'Enter' & str.trim() != null) {
            console.log(str);
            const url = "/explore/" + searchRef.current.value;
            naigate(url);

        }
    }

    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var cards = lista.map((item, index) => {
        return <Card key={index} props={item} />
    });
    return (
        <div >
            <div className="topTitle"> Find the best apps and software to grow your business </div>
            <div className="input-container">
                <input ref={searchRef} type="text" className="search"
                    placeholder="search apps, tools, extensions and more" onKeyDown={(e) => handleEnter(e)} />
                <div className="clear" onClick={() => searchRef.current.value = null}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            </div>

            <section className="topApps">
                {cards}
            </section>
        </div>

    );
}


export default TopSection;