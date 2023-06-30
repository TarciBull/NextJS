
import Image from 'next/image'
export default function Users(usersData) {
  const imageLoader = ({ src, width, quality }) => {
    return `https://tz.smart-ui.pro/${src}?w=${width}&q=${quality || 75}`
  }
  const imageStyle = {
    objectFit:'cover',
  }
  
  return (
    <>
    <div className='second-wrap'>
    <h2>our users</h2>
    <table>
      <thead>
        <tr>
        <td>photo</td>
        <td>name</td>
        <td>status</td>
        <td>registration</td>
        <td>age</td>
        <td>action</td>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td className="photo"><Image className="avatar"loader ={imageLoader} src={usersData.usersData.users[0].photo} width={60}
      height={60}alt={'avatar'}style={imageStyle} /></td>
        <td className="name">{usersData.usersData.users[0].name}</td>
        <td className="status">{usersData.usersData.users[0].online  ? 'online':'offline'}</td>
        <td className="registration">{usersData.usersData.users[0].registration }</td>
        <td className="age">{usersData.usersData.users[0].age} year</td>
        <td className="chat">
          <button disabled={usersData.usersData.users[0].online ? false : true}>CHAT</button>
        </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
        <td className="photo"><Image className="avatar"loader ={imageLoader}src={usersData.usersData.users[1].photo} width={60}
      height={60}alt={'avatar'}style={imageStyle}/></td>
        <td className="name">{usersData.usersData.users[1].name}</td>
        <td className="status">{usersData.usersData.users[1].online  ? 'online':'offline'}</td>
        <td className="registration">{usersData.usersData.users[1].registration }</td>
        <td className="age">{usersData.usersData.users[1].age} year</td>
        <td className="chat">
          <button disabled={usersData.usersData.users[1].online ? false : true}><FontAwesomeIcon icon="far fa-comment-dots" /></button>
        </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
        <td className="photo"><Image className="avatar"loader ={imageLoader}src={usersData.usersData.users[2].photo} width={60}
      height={60}alt={'avatar'}style={imageStyle}/></td>
        <td className="name">{usersData.usersData.users[2].name}</td>
        <td className="status">{usersData.usersData.users[2].online  ? 'online':'offline'}</td>
        <td className="registration">{usersData.usersData.users[2].registration }</td>
        <td className="age">{usersData.usersData.users[2].age} year</td>
        <td className="chat">
          <button disabled={usersData.usersData.users[2].online ? false : true}>CHAT</button>
        </td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
  );
}
