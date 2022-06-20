import {Link} from 'react-router-dom'

export default function CompTableListing ({index,order,handleClick,data}) {
    return (
        <>
            {/* <Link to={`/tablebill/${data?.[index]?.tblNum}`} onClick={handleClick}> Table {data?.[index]?.tblNum}</Link> */}
            <li>
            <Link to={`/tablebill/${order?.tblNum}`} onClick={handleClick}> Table {order?.tblNum}</Link>
            </li>

        </>
    )
}