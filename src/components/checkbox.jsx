import checkMark from '../images/icon-checkmark.svg'

function CheckBox({addons, checks, setChecks}){
    return(
        <>
            <div onClick={() => setChecks(() => !(checks.includes(addons)) ? [...checks, addons] : [...checks.slice(0, checks.indexOf(addons)), ...checks.slice(checks.indexOf(addons) + 1)])} 
                className={`flex transition justify-center items-center w-5 h-5 border ${(checks.includes(addons)) ? 'bg-[--Purplish-blue]' : 'bg-transparent'} rounded-md`}>
                <img src={checkMark} />
            </div>
        </>
    )
}

export default CheckBox;