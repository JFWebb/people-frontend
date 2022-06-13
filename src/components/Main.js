// component library 
import {Route} from 'react-router-dom'
import {useEffect, useState} from 'react';


// page components
import Index from '../pages/IndexPage';
import Show from '../pages/ShowPage';

const Main = (props) => {

    const [people, setPeople] = useState(null);

    const URL = 'http://localhost:4000/people'

    // get people api data and parse to json. set it to our state 
    const getPeople = async() => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    }

    // on first render, grab people
    useEffect(() => {
        getPeople();
    }, []);


    return (
        <main>
            <Route exact path="/">
                {/* pass people state to index */}
                <Index people={people} />
            </Route>

            {/* will only render when this path is matched */}
            {/* spread history match and location via prop spreading */}
            <Route path="/people/:id" render={(rp) => (<Show {...rp}/>
            )} />
            
        </main>
    );
};

export default Main;