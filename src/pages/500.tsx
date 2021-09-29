import React, {ReactElement} from "react";
import Layout from "../components/Layout";

export default function Spooky500(): ReactElement {

    return (
        <Layout title='500 - Internal Server Error'>
            <p>A server side error occurred!</p>
        </Layout>
    );
}