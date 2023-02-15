import '../styles/newSection.css';
import NewCard from "./newCard";
function NewPart() {
    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var cards = lista.map((item, index) => {
        return <NewCard key={index} props={item} />
    });
    return (
        <div className="newContainer">
            <div className="topTitle"> Find New Featured Apps </div>
            <section className="newSection">
                {cards}
            </section>
        </div>

    );
}


export default NewPart;