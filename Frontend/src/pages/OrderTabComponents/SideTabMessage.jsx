import SideTabRunningTab from './SideTabRunningTab';
// import {useParams} from 'react-router-dom'

export default function SideTabMessage ({cart, user}) {


    return (
        <>   
        <h3> Click on any food item to add!</h3>     
        <SideTabRunningTab user={user}/>
        </>

    )
}