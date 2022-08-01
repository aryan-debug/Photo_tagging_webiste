import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLeaderboardInfo } from "../backend";
import { Header } from "./Header";

export function Leaderboard({levelData}){
    const params = useParams()
    const level_name = params.level_id;
    const [leaderboardInfo, setLeaderboardInfo] = useState(null);
    const levelInfo = levelData[level_name]
    useEffect(() => {getLeaderboardInfo(level_name).then(data => setLeaderboardInfo(data)); return;}, []);

    return (
        <div className="font-Oswald">
            <Header></Header>
            <h1 className="text-white text-center text-5xl mt-8">{levelInfo.name}</h1>
            <table className = "w-full text-center text-white mt-[200px]">
                <tr className="text-3xl">
                    <th>Name</th>
                    <th>Time</th>
                </tr>
                {leaderboardInfo && leaderboardInfo.games.map(game => (
                    <tr className="text-2xl">
                        <td className="pt-5">{game.name}</td>
                        <td className="pt-5">{game.time}</td>
                    </tr>)
                    )
                }

            </table>
        </div>
    )
}