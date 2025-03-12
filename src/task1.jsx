import './custom.css'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope} from "@fortawesome/free-regular-svg-icons"

export default function UserCard(props){
    return(
        <>
        <div className="card-cont">
            <div className="inner-cont">
            <div className="profile"><FontAwesomeIcon className="profile-img" icon={faUser} /></div>
            <h2 className="name">{props.name}</h2>
            <p className="age">{`Age : ${props.age}`}</p>
            <div>
            <p className="about">About me</p>
            <p className="about-text">{props.about}</p>
            </div>
            <div className="email-cont">
            <FontAwesomeIcon icon={faEnvelope} />
            <a className="email" href="#">{props.email}</a>
            </div>
            </div>
        </div>
        </>
    )
}