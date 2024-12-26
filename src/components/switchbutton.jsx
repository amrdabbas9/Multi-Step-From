

function SwitchButton({mory, setMory}){


    return(
        <div className={`flex transition items-center ${mory == 'mo' ? 'justify-start' : 'justify-end'}  p-1 w-10 h-6 bg-[--Marine-blue] rounded-xl`} 
            onClick={() => mory == 'mo' ? setMory('yr') : setMory('mo')}>
            <span className="w-4 h-4 bg-white block rounded-full"></span>
        </div>

    )
}

export default SwitchButton;