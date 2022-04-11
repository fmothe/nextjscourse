import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayouts";
import { Navbar } from "../components/Navbar";

export default function HomePage() {
    return (
        <>
            <h1>Home PAge</h1>
            <h1 className={"title"}>
                {" "}
                Ir a <Link href="/about">About</Link>
            </h1>

            <p className={"description"}>
                Get started by editing{" "}
                <code className={"code"}>pages/index.js</code>
            </p>
        </>
    );
}

HomePage.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    );
}