console.log('hello ts');

import Navbar from "../components/Navbar";
import StoryFeed from "../components/StoryFeed";
import SidebarLeft from "../components/SidebarLeft";
import CreatePost from "../components/CreatePost";
import PostFeed from "../jscomponents/posts/PostFeed";
import CreateRoom from "../components/CreateRoom";
import SidebarRight from "../components/SidebarRight";
import { getSession } from "next-auth/client";
import Login from "../components/Login";
import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";



//? how do i add return type with the function keyword 
export default  function Home ({ session }):React.FC | JSX.Element {
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
                <SidebarRight UserContacts={[{name:session.user.name,avatarSrc:session.user.image},{name:session.user.name,avatarSrc:session.user.image}]}/>
            </main>
        </div>
    );
}

export  const getServerSideProps:GetServerSideProps = async (context:GetServerSidePropsContext<ParsedUrlQuery>) => {
    const session = await getSession(context);
    return {
        props: {
            session,
        },
    };
}
