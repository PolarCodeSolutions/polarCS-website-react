// pages/_app.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-76N1PJZ11X'; 

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        ReactGA.initialize(TRACKING_ID);

        const handleRouteChange = (url: string) => {
            ReactGA.send({ hitType: 'pageview', page: url });
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return <Component {...pageProps }
    />;
}

export default MyApp;