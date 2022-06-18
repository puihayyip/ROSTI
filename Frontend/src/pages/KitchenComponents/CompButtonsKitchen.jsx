import ButtontrueCooked from './ButtontrueCooked';
import ButtonfalseCooked from './ButtonfalseCooked';

export default function CompButtonsKitchen({handleKitchen, cooked}){

    return(
    <>
    {cooked===true?  <ButtontrueCooked handleKitchen={handleKitchen}/> : <ButtonfalseCooked handleKitchen={handleKitchen} />}
    </>
    
    )
}