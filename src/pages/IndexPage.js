import {Link} from "react-router-dom"

const IndexPage = (props) => {
    const loaded = () => {
        return props.people.map(person => (
            <div key={person._id} className="person">
                <Link to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>
                </Link>
                {/* if there is an image, render it. otherwise do not render image */}
                {person.image && 
                    <img src={person.image} alt={person.name} />
                }
                <h3>{person.title}</h3>
            </div>
        ))
    }

    const loading = () => {
        return <h1> Loading ... </h1>
    }

    return props.people ? loaded() : loading();
};

export default IndexPage;