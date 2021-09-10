import React, { ReactElement} from "react";
import Layout from "../components/Layout";

export default function Spooky500(): ReactElement {

    return (
        <Layout>
            <div className="w-4/6 bg-gray-800 p-8 mt-12 text-gray-200 text-xl flex flex-col gap-y-5 text-center">

                <h1 className="text-5xl text-gray-100">500 - Server Error</h1>
                <p>A server side error occurred!</p>
            </div>
        </Layout>
    );
}