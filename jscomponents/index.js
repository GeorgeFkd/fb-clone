import Navbar from "../components/Navbar";
import StoryFeed from "../components/StoryFeed";
import SidebarLeft from "../components/SidebarLeft";
import CreatePost from "../components/CreatePost";
import PostFeed from "../jscomponents/posts/PostFeed";
import CreateRoom from "../components/CreateRoom";
import SidebarRight from "../components/SidebarRight";
import { getSession } from "next-auth/client";
import Login from "../components/Login";
export default function Home({ session }) {
    if (!session) return <Login />;

    return (
        <div className="flex flex-col ">
            <Navbar />
            <main className="flex space-x-4 bg-gray-800 justify-between">
                <SidebarLeft />
                <section
                    style={{ flex: "0.6" }}
                    className="flex flex-col space-y-3 max-w-3xl"
                >
                    <StoryFeed />
                    <CreatePost avatarSrc="https://links.papareact.com/5me" />
                    <CreateRoom avatarSrc="https://links.papareact.com/5me" />
                    <PostFeed />
                </section>
                <SidebarRight />
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
        props: {
            session,
        },
    };
}
