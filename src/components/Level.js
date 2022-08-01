import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Dropdown from "./Dropdown";
import levels from "../level_loader";
import { addToLeaderboard, getlevel } from "../backend";
import { NameBox } from "./NameBox";

export function Level({levelData, setLevelsData}){
    const params = useParams()
    const [timer, setTimer] = useState(0)
    const [dropdownToggle, setDropdownToggle] = useState(0);
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [charactersInfo, setCharactersInfo] = useState(null);
    const [start_time, setStartTime] = useState(Date.now());
    const [gameOver, setGameOver] = useState(false);
    const [name, setName] = useState("");

    const level = levels[params.level_id]

    useEffect(() => {
        getlevel(params.level_id).then(data => setCharactersInfo(data))
    }, [params.level_id])

    setTimeout(() => setTimer(timer + 1), 1000)
    function showDropdown(event){
        setDropdownToggle(!dropdownToggle);
        setPosX(event.pageX);
        setPosY(event.pageY);
    }
    
    function handleOptionClick(event, character_name){
        const {start_x, end_x, start_y, end_y} = charactersInfo[0][character_name];
        if((start_x <= posX  && posX <= end_x) && (start_y <= posY && posY <= end_y && !gameOver)){
            setLevelsData(levelData, levelData[params.level_id].characters.find(character => character.name === character_name).found = true)
            setGameOver(levelData[params.level_id].characters.every(character => character.found))
        }
        else{
            console.log("try again")
        }
    }
    function submitHandler(event, name){
        event.preventDefault();
        const passedTime = Date.now() - start_time;
        addToLeaderboard(passedTime, params.level_id, name)
    }
    return (
    <div className="font-Oswald text-white text-[2rem]">
        <div className = "flex justify-evenly items-center fixed bg-[#181818] w-full py-3 opacity-90">
            <Link to="/"><h1>Where Am I?</h1></Link>
            {
                level.characters.map((character, index) => !character.found && <img key = {index} src = {character.image} alt = "character" className="h-[70px] rounded-lg"/>)
            }
            <h1>Time: {timer}s</h1>
        </div>
        <img src = {level.image} className = "w-full" alt = {level.name} onClick={showDropdown}/>
        <Dropdown visible={dropdownToggle} characters = {level.characters} posX = {posX} posY = {posY} handleOptionClick = {handleOptionClick}/>
        {gameOver? <NameBox submitHandler={submitHandler}></NameBox> : null}
    </div>)
}