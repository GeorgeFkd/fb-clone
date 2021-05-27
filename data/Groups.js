import { useSession } from "next-auth";
const [session] = useSession();
export default [
  {
    name: "Guantanamo",
    avatarSrc: session.user.image,
    lastMsg: {
      authorName: session.user.name,
      content: "Ρε μαλακες",
    },
    isNotRead: true,
  },
  {
    name: "Τμήμα Εφαρμοσμένης",
    avatarSrc: session.user.image,
    lastMsg: {
      authorName: session.user.name,
      content: "Ρε μαλακες",
    },
    isNotRead: false,
  },
  {
    name: "Πληροφοριακά Συστήματα",
    avatarSrc: session.user.image,
    lastMsg: {
      authorName: session.user.name,
      content: "Ρε μαλακες",
    },
    isNotRead: true,
  },
];
