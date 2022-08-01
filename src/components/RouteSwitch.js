import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Level } from "./Level";
import levels from "../level_loader";
import { useState } from "react";
import { LeaderboardPage } from "./LeaderboardPage";
import { Leaderboard } from "./Leaderboard";

export const RouteSwitch = () => {
    const [levelsData, setLevelsData] = useState(levels)

    return(
    <BrowserRouter basename= {process.env.PUBLIC_URL}>
        <Routes>
            <Route path = "/" element = {<App levelData = {levels}/>} />
            <Route path = "/level/:level_id" element = {<Level levelData = {levelsData} setLevelsData = {setLevelsData}/>}/>
            <Route path = "/leaderboard" element = {<LeaderboardPage levelData = {levels} />}/>
            <Route path = "/leaderboard/level/:level_id" element = {<Leaderboard levelData = {levelsData}/>}/>
        </Routes>
    </BrowserRouter>
    )
}