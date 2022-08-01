import React from "react";

export function LevelCard({name, image}){
    return (
        <div className="text-center capitalize target transition ease-in-out delay-100 hover:scale-110">
          <h2 className="text-2xl mb-5">{name}</h2>
          <img src = {image} alt = {name} className = "h-[38rem] rounded-[20px]"/>
        </div>
    )
}