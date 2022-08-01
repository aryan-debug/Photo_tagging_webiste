import React from "react";
import { Link } from "react-router-dom";
export function Header(){
    return (
        <div className="flex gap-9 w-full justify-end pr-20 mt-10 text-2xl text-white">
            <Link to = "/"><h3>Home</h3></Link>
            <Link to = "/leaderboard"><h3>Leaderboard</h3></Link>
        </div>
    )
}