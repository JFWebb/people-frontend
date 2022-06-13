// component library 
import {Route} from 'react-router-dom'

// page components
import Index from '../pages/IndexPage';
import Show from '../pages/ShowPage';

const Main = (props) => {
    return (
        <main>
            <Route exact path="/">
                <Index />
            </Route>

            {/* will only render when this path is matched */}
            {/* spread history match and location via prop spreading */}
            <Route path="/people/:id" render={(rp) => (<Show {...rp}/>
            )} />
            
        </main>
    );
};

export default Main;