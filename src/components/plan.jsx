

function Plan({picture, plan, price, mory, data, setData}){
    return(
        <div onClick={() => setData(data => {
            return(
                {
                    personal : data.personal,
                    plan : {name: plan, price:price},
                    addons : data.addons
                }
            )})} className={`flex flex-1 flex-col p-3 border rounded-md transition ${data.plan.name == plan ? 'border-[--Purplish-blue]' : ''} hover:border-[--Purplish-blue]`}>
            <img src={picture} className="w-8 mb-10" />
            <h2 className="text-[--Marine-blue] font-bold">{plan}</h2>
            <p className="text-[--Cool-gray]">${price}{mory == 'yr' && '0'}/{mory}</p>
            <h3 className={`${mory == 'yr' ? 'text-[--Marine-blue]' : 'text-transparent'}  text-sm`}>2 Months Free</h3>
            {/* {mory == 'yr' && <h3 className="text-[--Marine-blue] text-sm">2 Months Free</h3>} */}
        </div>
    )
}

export default Plan;