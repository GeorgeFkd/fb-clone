import Post from "./Post";
function PostFeed() {
    return (
        <div className="flex flex-col space-y-4">
            <Post
                avatarSrc="https://links.papareact.com/5me"
                name="Roshan Art"
                //groupname="React JS Developers"
            />
        </div>
    );
}

export default PostFeed;
