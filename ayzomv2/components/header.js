import Head from 'next/head';
import Navbar from '../components/navbar';
import HireMe from '../components/hireme';
import { useState, useEffect } from "react";

export default function Header() {


    const [isModalVisible, updateModalVisibility] = useState(false);


    function triggerHireModal(e, closeNavRef) {
        console.log("hi", e, closeNavRef);
        if (closeNavRef) {
            closeNavRef.checked = false;
        }
        updateModalVisibility((e) => {
            console.log({ e });
            return !e;
        });
        return;
    }

    return (
        <>
            <Head>
                <title>Ayzom - Akhilesh Yadav</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Navbar triggerHireModal={triggerHireModal}></Navbar>
            </header>
            <div>
                <HireMe isModalVisible={isModalVisible} triggerHireModal={triggerHireModal}></HireMe>
            </div>

            {/* <style jsx>{`

                overflow: visible;  

                main {
                flex: 1;
                display: flex;
                flex-direction: column;
                padding:0;
                }

                footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
                }

                footer img {
                margin-left: 0.5rem;
                }

                footer a {
                display: flex;
                justify-content: center;
                align-items: center;
                }

                a {
                color: inherit;
                text-decoration: none;
                }

                .title a {
                color: #0070f3;
                text-decoration: none;
                }

                .title a:hover,
                .title a:focus,
                .title a:active {
                text-decoration: underline;
                }

                .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
                }

                .title,
                .description {
                text-align: center;
                }

                .description {
                line-height: 1.5;
                font-size: 1.5rem;
                }

                code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                }

                .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                max-width: 800px;
                margin-top: 3rem;
                }

                .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
                }

                .card:hover,
                .card:focus,
                .card:active {
                color: #0070f3;
                border-color: #0070f3;
                }

                .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
                }

                .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
                }

                .logo {
                height: 1em;
                }

                @media (max-width: 600px) {
                .grid {
                    width: 100%;
                    flex-direction: column;
                }
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                background-color: #3c415c;
                }

                * {
                box-sizing: border-box;
                }
                h1,h2 {
                color: white;
                font-weight: bold;
                }
            `}</style> */}

        </>
    )
}
