import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchCard from "./searchCard";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../styles/explore.css";


export default function SearchResult(props) {


    const state = props.state;
    const result = props.result;
    const holdResult = props.holdResult;



    if (state === 'loading') {
        return <div className="search-result" >
            <div className="centerCircular">
                <FontAwesomeIcon icon={faSpinner} spin size="lg" />
            </div>
        </div>
    }
    if (state === 'error') {

        return <div>
            <div className="search-result" >

                <p className="error">
                    Sorry something error happened
                </p>

            </div>
        </div>
    } else {

        if (result && result.length) {
            const results = result.map((app, index) => {
                return <SearchCard app={app} key={index} />

            });

            return <div className="search-result" style={{ width: '100%' }}>
                {results}
            </div>
        } else {
            if (holdResult && holdResult.length) {
                const resultz = holdResult.map((app, index) => {
                    return <SearchCard app={app} key={index} />

                });
                return <div>
                    <div className="search-result" >

                        <h3 className="error">
                            No results , like your search.
                            <br />
                            here 👇 some tools that may interest you

                        </h3>

                        {resultz}

                    </div>
                </div>

            }



            return <div>
                <div className="search-result" >

                    <h3 className="error">
                        No results , like your search.
                        <br />
                        here 👇 some tools that may interest you

                    </h3>



                </div>
            </div>
        }



    }


} 