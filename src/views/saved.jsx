import '../styles/newSection.css';
import NewCard from "./newCard";

function Saved() {
    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var cards = lista.map((item, index) => {
        return <NewCard key={index} props={item} />
    });
    return (
        <div className="newContainer" style={{ marginTop: "5px" }}>
            <div className="topTitle"> Saved Apps : </div>
            <section className="newSection">
                {cards}
            </section>

        </div>

    );
}


export default Saved;