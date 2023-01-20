import React from "react";
import Card from "react-bootstrap/Card";
import Member from "../Member";

export default function TeamCard({
  title,
  members,
  setTeams,
  setMembers,
  teams,
  allMembers,
}) {
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <ul className="p-0 member-container">
          {members && members.length > 0 ? (
            members.map((member) => (
              <li className="mb-3">
                <Member
                  type="card"
                  removeSetTeam={() => {
                    setTeams({
                      ...teams,
                      [member.category]: teams[member.category]
                        ? teams[member.category].filter(
                            (mem) => mem.userId != member.userId
                          )
                        : [],
                    });
                  }}
                  removeSetMembers={() => {
                    setMembers([...allMembers, member]);
                  }}
                  member={member}
                />
              </li>
            ))
          ) : (
            <>
              <h2>No Members</h2>
            </>
          )}
        </ul>
      </Card.Body>
    </Card>
  );
}
