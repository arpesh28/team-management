import React from "react";
import Card from "react-bootstrap/Card";
import Member from "../Member";

export default function TeamCard({ title, members }) {
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <ul className="p-0 member-container">
          {members && members.length > 0 ? (
            members.map((member) => (
              <li className="mb-3">
                <Member type="card" />
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
