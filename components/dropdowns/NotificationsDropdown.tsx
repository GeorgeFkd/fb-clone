import { MoreHoriz } from "@material-ui/icons";
import { useSession } from "next-auth/client";
import NotificationRow from "./NotificationRow";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import styles from "./NotificationsDropdown.module.css";

interface Props{

}


const  NotificationsDropdown:React.FC<Props> = () => {
    const [session] = useSession();


    return (
        <div
            className={`px-4 flex rounded-lg flex-col w-52   space-y-2 border-2 border-yellow-600 ${styles.container}`}
            style={{
                position: "absolute",
                top: "3.3rem",
                right: "1rem",
                width: "400px",
                maxHeight: "550px",
                overflowY: "auto",
                backgroundColor: "#161414",
            }}
        >
            <div className="flex items-center mb-6">
                <h1
                    className="text-white font-semibold"
                    style={{ fontSize: "2rem" }}
                >
                    Notifications
                </h1>
                <MoreHoriz
                    className="p-1 rounded-full hover:bg-gray-300 ml-auto"
                    fontSize="large"
                />
            </div>
            <div className="flex">
                <p
                    className="text-white font-semibold"
                    style={{ fontSize: "1.25rem" }}
                >
                    Earlier
                </p>
            </div>
            <div className="flex flex-col">
                <NotificationRow
                    from_imgSrc={session.user.image}
                    isNotRead={true}
                    from_name={session.user.name}
                    content="mentioned you in a comment in"
                    group="Programmer NullPosting"
                    ReactionIcon={PeopleOutlineIcon}
                    reactionColor="skyblue"
                />
                <NotificationRow
                    from_imgSrc={session.user.image}
                    isNotRead={false}
                    from_name={session.user.name}
                    content="mentioned you in a comment in"
                    group="Programmer NullPosting"
                    ReactionIcon={ChatBubbleIcon}
                    reactionColor="limegreen"
                />
                <NotificationRow
                    from_imgSrc={session.user.image}
                    isNotRead={true}
                    from_name={session.user.name}
                    content="mentioned you in a comment in"
                    group="Programmer NullPosting"
                    ReactionIcon={PeopleOutlineIcon}
                    reactionColor="skyblue"
                />
                <NotificationRow
                    from_imgSrc={session.user.image}
                    isNotRead={false}
                    from_name={session.user.name}
                    content="mentioned you in a comment in"
                    group="Programmer NullPosting"
                    ReactionIcon={ChatBubbleIcon}
                    reactionColor="limegreen"
                />
                <NotificationRow
                    from_imgSrc={session.user.image}
                    isNotRead={true}
                    from_name={session.user.name}
                    content="mentioned you in a comment in"
                    group="Programmer NullPosting"
                    ReactionIcon={PeopleOutlineIcon}
                    reactionColor="skyblue"
                />
                <NotificationRow
                    from_imgSrc={session.user.image}
                    isNotRead={false}
                    from_name={session.user.name}
                    content="mentioned you in a comment in"
                    group="Programmer NullPosting"
                    ReactionIcon={ChatBubbleIcon}
                    reactionColor="limegreen"
                />
                <NotificationRow
                    from_imgSrc={session.user.image}
                    isNotRead={false}
                    from_name={session.user.name}
                    content="mentioned you in a comment in"
                    group="Programmer NullPosting"
                    ReactionIcon={ChatBubbleIcon}
                    reactionColor="limegreen"
                />
                <NotificationRow
                    from_imgSrc={session.user.image}
                    isNotRead={false}
                    from_name={session.user.name}
                    content="mentioned you in a comment in"
                    group="Programmer NullPosting"
                    ReactionIcon={ChatBubbleIcon}
                    reactionColor="limegreen"
                />
            </div>
        </div>
    );
}

export default NotificationsDropdown;
