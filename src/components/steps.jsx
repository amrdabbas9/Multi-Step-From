import pic from '../images/bg-sidebar-desktop.svg'
import Mobpic from '../images/bg-sidebar-mobile.svg'
import Step from './step';


function Steps({stepNumber}){

    return(
        <div className='mr-10 relative max-md:hidden'>
            <img className='' src={pic} />
            {/* <img className='sm:hidden' src={Mobpic} /> */}
            <div className='absolute top-5 left-5'>
                <Step stepNumber={stepNumber} stepTarget={1} stepInfo={'YOUR INFO'} />
                <Step stepNumber={stepNumber} stepTarget={2} stepInfo={'SELECT PLAN'} />
                <Step stepNumber={stepNumber} stepTarget={3} stepInfo={'ADD-ONS'} />
                <Step stepNumber={stepNumber} stepTarget={4} stepInfo={'SUMMARY'} />
            </div>
        </div>
    )
}


export default Steps;