import React from "react";
import "../styles/Home.css";
import ChooseMonth from "./ChooseMonth";
import CurrentSeason from "./CurrentSeason";

//Component import
import Hero from "./Hero";
import Introduction from "./Introduction";

export default function Home() {
    return (
        <div>
            <Hero />
            <Introduction />
            <ChooseMonth />
            <CurrentSeason />
        </div>
    );
}