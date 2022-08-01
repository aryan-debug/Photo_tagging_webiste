export default function Dropdown({visible, characters, posX, posY, handleOptionClick}){
    return (
         <div className = {visible ? "flex flex-col gap-4 absolute bg-slate-900 bg-opacity-85 rounded-lg w-20 p-2" : "hidden"} style = {{left: posX + "px", top: posY + "px"}}>
            {
                characters.map((character, index) => <img key = {index} src = {character.image} alt = {character.name} className="rounded-lg hover:opacity-60" onClick = {(e) => handleOptionClick(e, character.name)}/>)
            }
        </div>)
}