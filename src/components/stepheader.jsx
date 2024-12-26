

function StepHeader({header, parag}){

    return(
        <div>
            <h1 className='text-[--Marine-blue] text-3xl font-bold'>{header}</h1>
            <p className='text-[--Cool-gray] text-base'>{parag}</p>
        </div>
    )
}

export default StepHeader;