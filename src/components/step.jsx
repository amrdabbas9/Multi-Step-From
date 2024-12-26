

function Step({stepNumber, stepTarget, stepInfo}){

    return(
        <div className='flex items-center mb-5'>
            <div className={`${stepNumber === stepTarget ? 'bg-[--Light-blue]' : ''} flex text-white items-center justify-center border rounded-full p-1 pl-3 pr-3 mr-4`}>{stepTarget}</div>
            {stepInfo != '' &&
                <div className='flex flex-col'>
                    <p className='text-xs text-[--Light-gray]'>STEP {stepTarget}</p>
                    <h2 className='text-white font-bold'>{stepInfo}</h2>
                </div>
            }
        </div>
    )
}

export default Step;