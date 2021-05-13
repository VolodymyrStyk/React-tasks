import './User.css'
import {Link} from "react-router-dom";

export const User = ({item, props}) => {
    const {match: {url}} = props;
    const {id, name, email} = item;
    const pathDetails = `${url}/${item.id}`;
    const pathPosts = `/posts`;
    return (
        <div>
            <div className={'user-wrap'}>
                <h3>{`ID:${id} ${name}`}</h3>
                <p>{`E-mail ${email}`}</p>
                <Link to={
                    {
                        pathname: pathDetails,
                        state: item,
                    }}>
                    <button>User details</button>
                </Link>
                <Link to={
                    {
                        pathname: pathPosts,
                        state: item,
                        search: `userId=${id}`,
                    }}>
                    <button>User Posts</button>
                </Link>
            </div>
        </div>
    )
}
