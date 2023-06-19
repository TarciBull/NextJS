
export default function Users(usersData) {
 
  return (
    <div>
    <table>
      <thead>
        <th>photo</th>
        <th>name</th>
        <th>status</th>
        <th>registration</th>
        <th>age</th>
        <th>action</th>
      </thead>
      <tbody>
        <td className="photo"><tr>{usersData.usersData.users[0].photo}</tr></td>
        <td className="name"><tr>{usersData.usersData.users[0].name}</tr></td>
        <td className="status"><tr>{usersData.usersData.users[0].online  ? 'online':'offline'}</tr></td>
        <td className="registration"><tr>{usersData.usersData.users[0].registration }</tr></td>
        <td className="age"><tr>{usersData.usersData.users[0].age} year</tr></td>
        <td className="chat"><tr>
          <button disabled={usersData.usersData.users[0].online ? false : true}>CHAT</button></tr>
        </td>
      </tbody>
      <tbody>
        <td className="photo"><tr>{usersData.usersData.users[1].photo}</tr></td>
        <td className="name"><tr>{usersData.usersData.users[1].name}</tr></td>
        <td className="status"><tr>{usersData.usersData.users[1].online  ? 'online':'offline'}</tr></td>
        <td className="registration"><tr>{usersData.usersData.users[1].registration }</tr></td>
        <td className="age"><tr>{usersData.usersData.users[1].age} year</tr></td>
        <td className="chat"><tr>
          <button disabled={usersData.usersData.users[1].online ? false : true}>CHAT</button></tr>
        </td>
      </tbody>
      <tbody>
        <td className="photo"><tr>{usersData.usersData.users[2].photo}</tr></td>
        <td className="name"><tr>{usersData.usersData.users[2].name}</tr></td>
        <td className="status"><tr>{usersData.usersData.users[2].online  ? 'online':'offline'}</tr></td>
        <td className="registration"><tr>{usersData.usersData.users[2].registration }</tr></td>
        <td className="age"><tr>{usersData.usersData.users[2].age} year</tr></td>
        <td className="chat"><tr>
          <button disabled={usersData.usersData.users[2].online ? false : true}>CHAT</button></tr>
        </td>
      </tbody>
      
    </table>
    </div>
  );
}
