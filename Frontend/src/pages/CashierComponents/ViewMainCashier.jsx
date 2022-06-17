import Head from "../Head"
import {Link} from 'react-router-dom'
function ViewMainCashier() {
    return(
        <>
        <Head/>
        <h1>Which Table Bill do you want to see?</h1>
        <ul>

        <li>
            <Link to="/tablebill">Table 34</Link>
            </li>
        <li>
            <Link to="/tablebill">Table 44</Link>
            </li>

        </ul>

       
        </>
    )
}

export default ViewMainCashier;