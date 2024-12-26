import StepHeader from "../components/stepheader";
import Input from "../components/input";

function FirstStep({data, setData}){

    return(
        <>
            <StepHeader header='Personal Info' parag='Please provide your name, email address, and phone number.' />
            <div>
                <Input data={data} setData={setData} inputId='name' inputInfo='Name' inputPlaceHolder='e.g. Stephen King' />
                <Input data={data} setData={setData} inputId='email' inputInfo='Email Address' inputPlaceHolder='e.g. stephenking@gmail.com' />
                <Input data={data} setData={setData} inputId='phone' inputInfo='Phone Number' inputPlaceHolder='e.g. +1 234 567 890' />
            </div>
        </>
    )
}
export default FirstStep;