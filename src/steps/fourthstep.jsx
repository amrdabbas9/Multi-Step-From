import StepHeader from "../components/stepheader";


function FourthStep({data, mory}){
    let totalPrice = 0
    return(
        <>
            <StepHeader header='Finishing Up' parag='Double-check everything looks OK before confirming.' />
            <div>
                <div className="bg-[#80808017] p-5 rounded-lg">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-[--Marine-blue] font-bold">{data.plan.name} ({mory == 'mo' ? 'Monthly' : 'Yearly'})</h1>
                            <p className="text-[--Cool-gray]">Change</p>
                        </div>
                        <h2 className="text-[--Marine-blue] text-lg font-bold">${data.plan.price}{mory == 'yr' && '0'}/{mory}</h2>
                    </div>
                    <div className="divider mt-5 mb-5 w-4/5 m-auto h-px bg-black"></div>
                    <div>
                        {data.addons.map((e) => {
                            totalPrice += e.price
                            return(
                                <>
                                    <div className="flex justify-between mb-3">
                                        <p className="text-[--Cool-gray]">{e.adds}</p>
                                        <h2 className="text-[--Marine-blue]">${e.price}{mory == 'yr' && '0'}/{mory}</h2>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="flex justify-between p-5">
                    <p className="text-[--Cool-gray]">Total (per month)</p>
                    <h1 className="text-[--Purplish-blue]">+${(totalPrice + data.plan.price) * (mory == 'mo' ? 1 : 10)}/{mory}</h1>
                </div>
            </div>
        </>
    )
}

export default FourthStep;