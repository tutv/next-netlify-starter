import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {useEffect} from "react"

export default function Home() {
    // useEffect(() => {
    //     setTimeout(() => {
    //         window.location.href = 'demoo://hello-world?abc=1'
    //     }, 100)
    // }, [])

    return (
        <div className="container">
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Header title="Welcome to my app!"/>
                <p className="description">
                    Get started by editing <code>pages/index.js</code>
                </p>

                <div>
                    <a href="demoo://hello-world?abc=1">Link with schema</a>

                    <p></p>
                    <a href="https://cuskitt.com/hello-word?from-domain=1">From main domain</a>

                    <p></p>
                    <a href="https://medium.com/swlh">Medium</a>
                </div>
            </main>

            <Footer/>
        </div>
    )
}
