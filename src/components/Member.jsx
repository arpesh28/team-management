import React from "react";
import { Button, Dropdown } from "react-bootstrap";

import profileIcon from "../include/images/dp1.jpeg";
import moreIcon from "../include/images/more.png";

export default function Member({
  member,
  type,
  setMembers,
  setTeams,
  removeSetTeam,
  removeSetMembers,
}) {
  const addMember = (e) => {
    const list = localStorage.getItem("teams");
    const oldCategory = JSON.parse(list)
      ? JSON.parse(list)[member.category]
      : [];
    const categoryList =
      oldCategory && oldCategory.length > 0 ? oldCategory : [];
    setTeams();
    setMembers();
    if (list) {
      localStorage.setItem(
        "teams",
        JSON.stringify({
          ...JSON.parse(list),
          [member.category]: [...categoryList, member],
        })
      );
    } else {
      localStorage.setItem(
        "teams",
        JSON.stringify({ [member.category]: [...categoryList, member] })
      );
    }
  };

  const removeMember = (e) => {
    const list = localStorage.getItem("teams");
    const oldCategory = JSON.parse(list)
      ? JSON.parse(list)[member.category]
      : [];
    const categoryList =
      oldCategory && oldCategory.length > 0 ? oldCategory : [];
    removeSetTeam();
    removeSetMembers();
    if (list) {
      localStorage.setItem(
        "teams",
        JSON.stringify({
          ...JSON.parse(list),
          [member.category]: categoryList.filter(
            (mem) => mem.userId !== member.userId
          ),
        })
      );
    }
  };
  return (
    <div className="d-flex member-card">
      <div
        className={`profile-img-container position-relative ${
          member && member.experience == 9 && "show-crown"
        }`}
      >
        <img src={profileIcon} className="profile-img" alt="" />
      </div>
      <div className="d-flex justify-content-between w-100">
        <div className="text-content">
          <h4>{member && member.firstName}</h4>
          <span>{member && member.experience} yrs Exp</span>
        </div>
        {type === "card" ? (
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <img src={moreIcon} alt="more" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Lead</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#" onClick={removeMember}>
                Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Button variant="dark" className="add-btn" onClick={addMember}>
            Add
          </Button>
        )}
      </div>
    </div>
  );
}
