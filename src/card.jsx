import UserCard from "./task1"
import './custom.css'
export default function Card(){

    return(
        <>
        <div className="all-card-cont">
        <UserCard 
        name = "Abel"
        age = {31}
        about = "Abel inspires young minds with engaging lessons and supportive teaching."
        email = "abela34@gmail.com" />

        <UserCard 
        name = "Meron"
        age = {25}
        about = "Meron designs innovative buildings, balancing aesthetics and function."
        email = "meron14@gmail.com" />

        <UserCard 
        name = "Eyerus"
        age = {28}
        about = "Eyerus develops cutting-edge applications with her coding expertise."
        email = "eyerus63@gmail.com" />
        </div>
        
        </>
    )
}