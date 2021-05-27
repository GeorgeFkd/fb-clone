function PostOption({ Icon, text, color }) {
    return (
        <div className="cursor-pointer justify-center p-2 px-6 rounded-md flex space-x-1 hover:bg-gray-500 flex-grow">
            <Icon style={{ color }} />
            <p>{text}</p>
        </div>
    );
}

export default PostOption;
