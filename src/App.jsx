import './App.css'
import { useState } from 'react'

import Steps from './components/steps'
import FirstStep from './steps/firststep'
import SecondStep from './steps/secondstep'
import ThirdStep from './steps/thirdstep'
import FourthStep from './steps/fourthstep'
import Confirm from './steps/confirm'

import Step from './components/step'

import Mobpic from './images/bg-sidebar-mobile.svg'


function App() {
  const [stepNumber, setStepNumber] = useState(1)
  const [mory, setMory] = useState('mo')
  const [data, setData] = useState({
    personal : {
      name : '' ,
      email : '' ,
      phone : ''
    },
    plan : {name: 'Arcade', price: 9},
    addons : []
  })

  function handleNextStep(){
    if(stepNumber == 1){
      let name = document.getElementById('name').value
      let email = document.getElementById('email').value
      let phone = document.getElementById('phone').value
      setData(data => {
        return(
          {
            personal : {
              name : name ,
              email : email ,
              phone : phone
            },
            plan : data.plan,
            addons : data.addons
          }
        )
      })
    }
    setStepNumber(prevStep => prevStep + 1)
  }
  function handlePrevStep(){
    setStepNumber(prevStep => prevStep - 1)
  }

  return (
    <>
      <div className='app flex justify-center items-center w-full h-dvh bg-[--Light-gray]'>
        <div className='flex justify-center md:hidden absolute -z-0 left-0 top-0 w-full'>
          <img className='absolute -z-0 left-0 top-0 w-full' src={Mobpic} />
          <div className='flex mt-10 -z-0 '>
            <Step stepNumber={stepNumber} stepTarget={1} stepInfo={''} />
            <Step stepNumber={stepNumber} stepTarget={2} stepInfo={''} />
            <Step stepNumber={stepNumber} stepTarget={3} stepInfo={''} />
            <Step stepNumber={stepNumber} stepTarget={4} stepInfo={''} />
          </div>
        </div>
        
        <div className='form p-3 relative -z-0 rounded-lg flex w-3/5 bg-white flex-row max-xl:w-11/12'>
          <Steps stepNumber={stepNumber} />
          <div className='flex-1 flex justify-center items-center'>
            <div className='w-11/12 h-full pt-10 flex flex-col justify-between'>
              {stepNumber == 1 && <FirstStep data={data} setData={setData} />}
              {stepNumber == 2 && <SecondStep mory={mory} setMory={setMory} data={data} setData={setData} />}
              {stepNumber == 3 && <ThirdStep mory={mory} data={data} setData={setData} />}
              {stepNumber == 4 && <FourthStep mory={mory} data={data} />}
              {stepNumber == 5 && <Confirm />}
              
              {stepNumber < 5 && 
                <div className='w-full flex justify-between max-md:hidden'>
                  <button onClick={handlePrevStep} className={`${stepNumber > 1 ? 'block' : 'invisible'} text-[--Cool-gray] p-3 pl-5 pr-5 rounded-lg w-fit transition hover:text-[--Marine-blue]`}>Go Back</button>
                  {stepNumber != 4 && <button onClick={handleNextStep} className='text-white bg-[--Marine-blue] p-3 pl-5 pr-5 rounded-lg w-fit'>Next Step</button>}
                  {stepNumber == 4 && <button onClick={handleNextStep} className='text-white bg-[--Purplish-blue] p-3 pl-5 pr-5 rounded-lg w-fit'>Confirm</button>}
                </div>
              }
            </div>
          </div>
        </div>
        {stepNumber < 5 && 
          <div className='bg-white p-10 pt-4 pb-4 w-full flex justify-between absolute left-0 bottom-0 md:hidden'>
            <button onClick={handlePrevStep} className={`${stepNumber > 1 ? 'block' : 'invisible'} text-[--Cool-gray] p-3 pl-5 pr-5 rounded-lg w-fit transition hover:text-[--Marine-blue]`}>Go Back</button>
            {stepNumber != 4 && <button onClick={handleNextStep} className='text-white bg-[--Marine-blue] p-3 pl-5 pr-5 rounded-lg w-fit'>Next Step</button>}
            {stepNumber == 4 && <button onClick={handleNextStep} className='text-white bg-[--Purplish-blue] p-3 pl-5 pr-5 rounded-lg w-fit'>Confirm</button>}
          </div>
        }
      </div>

    </>
  )
}

export default App
