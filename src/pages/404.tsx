import React, { ReactElement } from "react";
import Layout from "../components/Layout";

export default function Spooky404(): ReactElement {

    return (
        <Layout title='404 - Page Not Found'>
            <p>Well that's spooky, it looks like this page does not exist!</p>
        </Layout>
    );
}