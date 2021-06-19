import Story from "./Story";
import React from "react";


interface StoryType{
    avatarSrc:string,
    imgSrc:string,
    author:string
}



const StoryFeed:React.FC<StoryType[]> = ({}) => {
    return (
        <div className="flex space-x-2">
            <Story
                avatarSrc="https://links.papareact.com/5me"
                imgSrc="https://images.ctfassets.net/23aumh6u8s0i/6uBzrqHNLlSAoER6HtgDN0/accd8f871b1de37f472b94da4346afa2/python-hero"
                author="George Fakidis"
            />
            <Story
                avatarSrc="https://links.papareact.com/5me"
                imgSrc="https://images.ctfassets.net/23aumh6u8s0i/6uBzrqHNLlSAoER6HtgDN0/accd8f871b1de37f472b94da4346afa2/python-hero"
                author="George Fakidis"
            />
            <Story
                avatarSrc="https://links.papareact.com/5me"
                imgSrc="https://images.ctfassets.net/23aumh6u8s0i/6uBzrqHNLlSAoER6HtgDN0/accd8f871b1de37f472b94da4346afa2/python-hero"
                author="George Fakidis"
            />
            <Story
                avatarSrc="https://links.papareact.com/5me"
                imgSrc="https://images.ctfassets.net/23aumh6u8s0i/6uBzrqHNLlSAoER6HtgDN0/accd8f871b1de37f472b94da4346afa2/python-hero"
                author="George Fakidis"
            />
            <Story
                avatarSrc="https://links.papareact.com/5me"
                imgSrc="https://images.ctfassets.net/23aumh6u8s0i/6uBzrqHNLlSAoER6HtgDN0/accd8f871b1de37f472b94da4346afa2/python-hero"
                author="George Fakidis"
            />
        </div>
    );
}

export default StoryFeed;