import ChatMessage from "./ChatMessage";

interface Props{
    
}

const  ChatFeed:React.FC<Props> = () => {
    return (
        <div className="flex flex-col space-y-2">
            <ChatMessage
                msgText={"Will it work for beginners?"}
                authorName={"Γιωργος Φακιδης"}
                daySent={"Monday"}
                hourSent={"21"}
                minuteSent={"58"}
            />
            <ChatMessage
                msgText={"Will it work for beginners?"}
                authorName={"Γιωργος Φακιδης"}
                daySent={"Monday"}
                hourSent={"21"}
                minuteSent={"58"}
            />
        </div>
    );
}

export default ChatFeed;
