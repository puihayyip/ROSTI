import SideTabRunningTab from './SideTabRunningTab';

export default function SideTabMessage ({user}) {


    return (
        <>   
        <h2 style={{ color: "black", fontWeight: "bold", padding:"40px" }}> Click on any menu item to start a new order!</h2>     
        <SideTabRunningTab user={user}/>
        </>

    )
}