import './custom.css'

export default function MemberDisplay() {
    const members = [
       " menata tesfaye",
        "Natinael Beamlaku",
       " Robel Ermiyas",
       "Fkremariam fentahun Masresha",
       " Rakeb Yared Tigabu",
       "Abdurazak Mohammed",
       "Abdurahman Mifta Awole",
       "Amanuel Ayele Getachew",
       "Eden Yedemie Ejigu" 
        ]
  return (
    <div>
    <h1>Team Members</h1>
    <h3>Here are the names of our team members:</h3>
       
        <ul className='member-list'>
            {members.map((member, index) => (
                <li key={index}>{`${index + 1}.  ${member}`}</li>
            ))}
        </ul>
    </div>
  )
}


