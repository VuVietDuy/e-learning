'use client'
import React from "react";

import './index.scss'
import Layout1 from './Layout1'
import Layout2 from './Layout2'
import Layout3 from "./Layout3";
import Layout4 from "./Layout4";

export function HomePage() {
    return (
        <div className="HomePage">
            <Layout1></Layout1>
            <Layout2></Layout2>
            <Layout3></Layout3>
            <Layout4></Layout4>
        </div>
    )
}