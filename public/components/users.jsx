import Image from "next/image";
import { useState } from "react";
export default function Users(usersData) {
  const [disabled,setDisabled]=useState('false')
  // isDisabled(){
  //  if (usersData.usersData.users[0].online){
  //   setDisabled('true')
  //  }
  
  return (
    <table>
      <thead>
        <th>Photo</th>
        <th>Name</th>
        <th>Status</th>
        <th>Registration</th>
        <th>Age</th>
        <th>Action</th>
      </thead>
      <tbody>
        <td>{usersData.usersData.users[0].photo}</td>
        <td>{usersData.usersData.users[0].name}</td>
        <td>{usersData.usersData.users[0].online  ? 'online':'offline'}</td>
        <td>{usersData.usersData.users[0].registration }</td>
        <td>{usersData.usersData.users[0].age}</td>
        <td>
          <button disabled={usersData.usersData.users[0].online ? false : true}>CHAT</button>
        </td>
      </tbody>
      {/* // console.log(usersData.usersData.users[0]) */}
      {/* <div>
      <div>{usersData.usersData.users[0].name}</div>
      {/* <div>
        {console.log(JSON.stringify(usersData.usersData.users[0].photo))}
        {/* <Image
          src='http://localhost:3000/_next/image?url=/img/brown.jpg&w=128&q=75'
          width={100}
          height={100}
          alt="Face" */}
      {/* </div> */}
      {/* <div>{usersData.usersData.users[0].online}</div>
      <div>
        {usersData.usersData.users[0].registartion}
        <div>{usersData.usersData.users[0].age}</div>
      </div>
    </div> */}
    </table>
  );
}
