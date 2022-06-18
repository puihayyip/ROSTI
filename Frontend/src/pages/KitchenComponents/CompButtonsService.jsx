import ButtontrueServed from "./ButtontrueServed"
import ButtonfalseServed from "./ButtonfalseServed"
export default function CompButtonsService({handleService, served, cooked}){
  
  // if (cooked===true) {

    return(
      <>
    {served===true?  <ButtontrueServed handleService={handleService}/> : <ButtonfalseServed handleService={handleService} />}
</>) 
// }

// else { 
  
//   alert("Food not ready, nothing to serve")
// }
}