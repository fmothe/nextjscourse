import Head from "next/head";
import Link from "next/link";
import React, { FC } from "react";
import { Navbar } from "../Navbar";
import  styles  from "./MainLayout.module.css";

interface Props{
    children: React.ReactNode
}
export const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - app</title>
                <meta name="description" content="HomePage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <main className={styles.main}>
              {children}
            </main>
        </div>
    );
};
