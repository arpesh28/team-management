import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

import Member from "../Member";
import AccordionItem from "./AccordionItem";

export default function LeftAccordion({
  allMembers,
  setMembers,
  teams,
  setTeams,
}) {
  return (
    <Accordion defaultActiveKey="0">
      <AccordionItem
        activeKey="0"
        heading="Project Manager"
        members={
          allMembers &&
          allMembers.filter((member) => member.category === "project-manager")
        }
        allMembers={allMembers}
        setMembers={setMembers}
        setTeams={setTeams}
        teams={teams}
      />{" "}
      <AccordionItem
        activeKey="1"
        heading="UI/UX Designer"
        members={
          allMembers &&
          allMembers.filter((member) => member.category === "ui-ux-designer")
        }
        allMembers={allMembers}
        setMembers={setMembers}
        setTeams={setTeams}
        teams={teams}
      />
      <AccordionItem
        activeKey="2"
        heading="Front End Developers"
        members={
          allMembers &&
          allMembers.filter((member) => member.category === "frontend-dev")
        }
        allMembers={allMembers}
        setMembers={setMembers}
        setTeams={setTeams}
        teams={teams}
      />{" "}
      <AccordionItem
        activeKey="3"
        heading="Back End Developers"
        members={
          allMembers &&
          allMembers.filter((member) => member.category === "backend-dev")
        }
        allMembers={allMembers}
        setMembers={setMembers}
        setTeams={setTeams}
        teams={teams}
      />
      <AccordionItem
        activeKey="4"
        heading="QA Tester"
        members={
          allMembers &&
          allMembers.filter((member) => member.category === "qa-tester")
        }
        allMembers={allMembers}
        setMembers={setMembers}
        setTeams={setTeams}
        teams={teams}
      />{" "}
      <AccordionItem
        activeKey="5"
        heading="Mobile Developers"
        members={
          allMembers &&
          allMembers.filter((member) => member.category === "mobile-dev")
        }
        allMembers={allMembers}
        setMembers={setMembers}
        setTeams={setTeams}
        teams={teams}
      />{" "}
      <AccordionItem
        activeKey="6"
        heading="Devops"
        members={
          allMembers &&
          allMembers.filter((member) => member.category === "devops")
        }
        allMembers={allMembers}
        setMembers={setMembers}
        setTeams={setTeams}
        teams={teams}
      />
    </Accordion>
  );
}
