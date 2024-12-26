import confirmPic from '../images/icon-checkmark.svg'

function Confirm(){

    return(
        <div className='h-full flex flex-col items-center justify-center'>
            <div className='confirm-pic mb-7 w-14 h-14 bg-[--Strawberry-red] rounded-full flex items-center justify-center'>
                <img src={confirmPic} className='w-7'/>
            </div>
            <h1 className='mb-7 text-[--Marine-blue] text-3xl font-bold'>Thank You!</h1>
            <p className='text-lg text-[--Cool-gray] text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel fre to email us at support@loremgaming.com.</p>
        </div>
    )
}

export default Confirm;