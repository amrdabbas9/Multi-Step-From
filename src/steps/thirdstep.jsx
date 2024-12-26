import Addons from "../components/addons";
import StepHeader from "../components/stepheader";
import { useState, useEffect } from "react";

let addonsPrices = {
    'Online service' : 1,
    'Larger Storage' : 2,
    'Customizable profile' : 2
}

function ThirdStep({mory, data, setData}){
    const [checks, setChecks] = useState(() => {
        let check = []
        for(let i = 0; i < data.addons.length; i++){
            check.push(data.addons[i].adds)
        }
        return check
    })
    useEffect(() => {
        let addons = []
        for(let i = 0; i < checks.length; i++){
            addons.push({adds: checks[i], price: addonsPrices[checks[i]]})
        }
        setData(data => {
            return(
                {
                    personal : data.personal,
                    plan : data.plan,
                    addons : addons
                }
            )
        })
        console.log(addons)
    }, [checks])
    return(
        <>
            <StepHeader header='Pick add-ons' parag='Add-ons help enhance your gaming experience.' />
            <div className="flex flex-col gap-6">
                <Addons checks={checks} setChecks={setChecks} addons='Online service' info='Access to multiplayer games' price={1} mory={mory}/>
                <Addons checks={checks} setChecks={setChecks} addons='Larger Storage' info='Extra 1TB of cloud save' price={2} mory={mory}/>
                <Addons checks={checks} setChecks={setChecks} addons='Customizable profile' info='Custom theme on your profile' price={2} mory={mory}/>
            </div>
        </>
    )
}


export default ThirdStep;