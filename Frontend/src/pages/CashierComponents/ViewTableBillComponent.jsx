import CompFinalOrderList from "./CompFinalOrderList";
import CompEditOrderList from "./CompEditOrderList";

function ViewTableBillComponent ({edit}) {
    return(

        edit=== true? <CompEditOrderList/> : <CompFinalOrderList/>
   
    )
}

export default ViewTableBillComponent