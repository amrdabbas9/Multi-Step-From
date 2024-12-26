import CheckBox from "./checkbox";

function Addons({addons, info, price, mory, checks, setChecks}){
    return(
        <div className={`transition flex items-center gap-3 p-4 rounded-md border hover:border-[--Purplish-blue] ${(checks.includes(addons)) ? 'border-[--Purplish-blue]' : ''}`}>
            <div className="p-3">
                {/* <input type='checkbox' /> */}
                <CheckBox addons={addons} checks={checks} setChecks={setChecks} />
            </div>
            <div className="flex-1">
                <h2 className="text-[--Marine-blue] font-bold">{addons}</h2>
                <p className="text-[--Cool-gray] text-base">{info}</p>
            </div>
            <div>
                <p className="text-[--Purplish-blue]">+${price}{mory == 'yr' && '0'}/{mory}</p>
            </div>
        </div>
    )
}

export default Addons;