import React from "react";
import SubHeader from "../subHeader/SubHeader"
import { TableRow, TableKey, TableValue } from "../tableElements/TableElements";
import "./Profile.css"

const {firstName, lastName, avatarImage, phone, email, bio} =  {
    "firstName": "Sally",
    "lastName": "Wang",
    "avatarImage": "https://upload.wikimedia.org/wikipedia/commons/5/59/That_Poppy_profile_picture.jpg",
    "phone": "01-343-989-2345",
    "email": "sw@nowhere.ic.kp",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
}

export default function profile() {
  return(
      <div className="profile-container">
        <SubHeader text="Profile" />
        <div className="profile-details-container">
            <div className="image-container">
                <img src={avatarImage} alt="profile image" />
            </div>
            <div className="details-container">
                <TableRow>
                    <TableKey text="First name" />
                    <TableValue text={firstName} />
                </TableRow>
                <TableRow>
                    <TableKey text="Last name" /> <TableValue text={lastName} />
                </TableRow>
                <TableRow>
                    <TableKey text="Phone" />  <TableValue text={phone} />
                </TableRow>
                <TableRow>
                    <TableKey text="Email" />  <TableValue text={email} />
                </TableRow>
                <TableRow>
                    <TableKey text="Bio" />  <TableValue text={bio} />
                </TableRow>
            </div>
        </div>
    </div>
  );
}
