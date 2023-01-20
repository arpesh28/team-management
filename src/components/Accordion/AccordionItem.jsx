import React from "react";
import { Accordion } from "react-bootstrap";

import Member from "../Member";

export default function AccordionItem({
  activeKey,
  members,
  heading,
  setMembers,
  setTeams,
  teams,
  allMembers,
}) {
  return (
    <Accordion.Item eventKey={activeKey}>
      <Accordion.Header>{heading}</Accordion.Header>
      <Accordion.Body>
        <ul className="p-0 member-container">
          {members && members.length > 0 ? (
            members.map((member) => (
              <li className="mb-3">
                <Member
                  member={member}
                  type="accordion"
                  setMembers={() => {
                    setMembers(
                      allMembers.filter((mem) => mem.userId != member.userId)
                    );
                  }}
                  setTeams={() => {
                    const list = teams[member.category]
                      ? teams[member.category]
                      : [];
                    setTeams({
                      ...teams,
                      [member.category]: [...list, member],
                    });
                  }}
                />
              </li>
            ))
          ) : (
            <div>
              <h3>No Members</h3>
            </div>
          )}
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  );
}
