import { useSession } from "next-auth";
const [session] = useSession();

("https://images.ctfassets.net/23aumh6u8s0i/6uBzrqHNLlSAoER6HtgDN0/accd8f871b1de37f472b94da4346afa2/python-hero");

export default [
  {
    creator: session.user,
    postTitle: "Δε θα μαντέψετε τι επαθα",
    postImage:
      "https://images.ctfassets.net/23aumh6u8s0i/6uBzrqHNLlSAoER6HtgDN0/accd8f871b1de37f472b94da4346afa2/python-hero",
  },
  {
    creator: session.user,
    postTitle: "Δε θα μαντέψετε τι επαθα",
    postImage:
      "https://images.ctfassets.net/23aumh6u8s0i/6uBzrqHNLlSAoER6HtgDN0/accd8f871b1de37f472b94da4346afa2/python-hero",
  },
];
