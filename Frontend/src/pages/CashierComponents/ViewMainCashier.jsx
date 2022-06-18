import Head from "../GeneralComponents/MainHeader";
import {Link} from 'react-router-dom'


const handleClick = () => {
    console.log("say heyyyyy")
//     fetch(`http://localhost:7000/api/orders/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ ...item }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         // replaceHoliday(data.data);
//       });
  };
//   const item = data ?? {} ;

function ViewMainCashier() {
    return(
        <>
        <Head/>
        <h1>Which Table Bill do you want to see?</h1>
        <ul>

        <li>
            <Link to="/tablebill" onClick={handleClick}>Table 34</Link>
            </li>
        <li>
            <Link to="/tablebill">Table 44</Link>
            </li>

        </ul>

       
        </>
    )
}

export default ViewMainCashier;
