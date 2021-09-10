import React, { ReactElement} from "react";
import Layout from "../components/Layout";

export default function Spooky404(): ReactElement {

    return (
        <Layout>
            <div className="w-4/6 bg-gray-800 p-8 mt-12 text-gray-200 text-xl flex flex-col gap-y-5 text-center">

                <h1 className="text-5xl text-gray-100">404 - Page Not Found</h1>
                <p>Well that's spooky, it looks like this page does not exist!</p>
            </div>
        </Layout>
    );
}