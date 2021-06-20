import "tailwindcss/tailwind.css";
import { Provider } from "next-auth/client";
import { AppProps } from "next/dist/next-server/lib/router/router";

function MyApp({ Component, pageProps }:AppProps) {
    console.log('hello app.tsx')
    return (
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
