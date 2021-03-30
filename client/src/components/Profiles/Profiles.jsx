import Posts from '../Posts/Posts';
const Profiles = ({postsData}) => {
    return <div className="content">
        <Posts postsData={postsData}></Posts>
    </div>
}

export default Profiles;