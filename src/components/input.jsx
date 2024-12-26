


function Input({inputId, inputInfo, inputPlaceHolder, data}){
    return(
        <div>
            <label htmlFor={inputId} className='text-[--Marine-blue]'>{inputInfo}</label>
            <br/>
            <input id={inputId} className='border rounded-md w-full p-2 mt-2 mb-6' type='text' placeholder={inputPlaceHolder} defaultValue={data.personal[inputId]}/>
        </div>
    )
}

export default Input;