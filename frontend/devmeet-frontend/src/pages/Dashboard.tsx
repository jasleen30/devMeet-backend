import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
   const {user} = useAuth()
   console.log(user);
    return (
        <div> {user?.firstName}  hiii</div>
    )
}
 export default Dashboard;