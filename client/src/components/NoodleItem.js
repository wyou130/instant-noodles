import { Link } from 'react-router-dom'

function NoodleItem({ noodle }) {
    return(
        <div>
            <Link to={`/noodles/${noodle.id}`}>
                <h3>{noodle.brand} {noodle.flavor}</h3>
            </Link>
        </div>
    )
}

export default NoodleItem