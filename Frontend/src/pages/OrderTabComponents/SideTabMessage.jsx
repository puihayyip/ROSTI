import SideTabRunningTab from './SideTabRunningTab';
// import {useParams} from 'react-router-dom'

export default function SideTabMessage ({user}) {


    return (
        <>   
        <h3 style={{ color: "orange", fontWeight: "bold" }}> Click on any menu item to add start a new order!</h3>     
        <SideTabRunningTab user={user}/>
        </>

    )
}