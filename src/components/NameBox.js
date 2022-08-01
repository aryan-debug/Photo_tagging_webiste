import { useState } from "react";
import React from "react";

export function NameBox({submitHandler}){

    const [name, setName] = useState("");

    return (
        <div className="w-full h-full fixed top-[60px] left-0">
            <form onSubmit={(event) => submitHandler(event,name)} className = "fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] flex flex-col bg-slate-900/[0.8] p-10 rounded-lg gap-6">
                <div className="flex flex-col gap-2 ">
                    <label htmlFor = "name-input" className="text-[1.2rem]">Name</label>
                    <input id = "name-input" required onChange = {(event) => setName(event.target.value)}></input>
                </div>
                <button className="bg-slate-900/[0.9] rounded-md py-3">Submit</button>
            </form>
        </div>
    )
}