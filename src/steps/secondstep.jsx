import StepHeader from "../components/stepheader"

import arcadePic from '../images/icon-arcade.svg'
import advancedPic from '../images/icon-advanced.svg'
import proPic from '../images/icon-pro.svg'
import Plan from "../components/plan"
import SwitchButton from "../components/switchbutton"

function SecondStep({mory, setMory, data, setData}){


    return(
        <>
            <StepHeader header='Select Your Plan' parag='You have the option of monthly or yearly billing.' />
            <div>
                <div className="flex gap-3">
                    <Plan picture={arcadePic} plan={'Arcade'} price={9} mory={mory} data={data} setData={setData} />
                    <Plan picture={advancedPic} plan={'Advanced'} price={12} mory={mory} data={data} setData={setData} />
                    <Plan picture={proPic} plan={'Pro'} price={15} mory={mory} data={data} setData={setData} />
                </div>
                <div className="flex bg-[--Magnolia] justify-center items-center gap-3 mt-5 p-3">
                    <p className={`${mory == 'mo' ? 'text-[--Marine-blue]' : 'text-[--Cool-gray]'} transition`}>Monthly</p>
                    <SwitchButton mory={mory} setMory={setMory} />
                    <p className={`${mory == 'yr' ? 'text-[--Marine-blue]' : 'text-[--Cool-gray]'} transition`}>Yearly</p>
                </div>
            </div>
        </>
    )
}

export default SecondStep;