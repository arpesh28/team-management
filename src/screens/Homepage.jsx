import React, { useEffect, useState } from "react";
import axios from "axios";
import { Stepper, Step } from "react-form-stepper";

//  Images
import logoIcon from "../include/images/logo.svg";

//  Components
import LeftAccordion from "../components/Accordion/LeftAccordion";
import TeamCard from "../components/TeamCard/TeamCard";

export default function Homepage() {
  const getTeams = () => {
    let list = localStorage.getItem("teams");
    if (list) return JSON.parse(list);
    else return [];
  };
  const [loading, setLoading] = useState(false);
  const [allMembers, setMembers] = useState([]);
  const [teams, setTeams] = useState(getTeams());
  useEffect(() => {
    setLoading(true);
    if (!localStorage.getItem("all-members")) {
      axios({
        url: "members.json",
        method: "get",
      }).then((res) => {
        localStorage.setItem("all-members", JSON.stringify(res.data.members));
        setMembers(res.data.members);
        setLoading(false);
      });
    } else {
      setMembers(JSON.parse(localStorage.getItem("all-members")));
      setLoading(false);
    }
  }, []);
  console.log("teams:", teams);
  return (
    <>
      <div className="container">
        <header>
          <img src={logoIcon} alt="pool-logo" />
          <Stepper
            styleConfig={{
              activeBgColor: "#00000032",
              activeTextColor: "#fff",
              completedBgColor: "#0169fe",
              completedTextColor: "#fff",
              size: "3em",
            }}
            steps={[
              { label: "Create Project" },
              { label: "Add Team" },
              { label: "Preview & Hire" },
            ]}
            activeStep={2}
          />
        </header>
        <main>
          <div className="row">
            <div className="col-12 col-md-4">
              <h2 className="section-titles">Categories</h2>
              <LeftAccordion
                allMembers={allMembers}
                setMembers={setMembers}
                teams={teams}
                setTeams={setTeams}
              />
            </div>
            <div className="col-12 col-md-8">
              <h2 className="section-titles">Team Members</h2>
              <div className="row gy-3">
                <div className="col-12 col-lg-6">
                  <TeamCard
                    title="Project Manager"
                    members={teams["project-manager"]}
                    allMembers={allMembers}
                    teams={teams}
                    setTeams={setTeams}
                    setMembers={setMembers}
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <TeamCard
                    title="UI/UX Designer"
                    members={teams["ui-ux-designer"]}
                    teams={teams}
                    allMembers={allMembers}
                    setTeams={setTeams}
                    setMembers={setMembers}
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <TeamCard
                    title="Front End Developers"
                    members={teams["frontend-dev"]}
                    teams={teams}
                    setTeams={setTeams}
                    allMembers={allMembers}
                    setMembers={setMembers}
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <TeamCard
                    title="Back End Developers"
                    members={teams["backend-dev"]}
                    teams={teams}
                    setTeams={setTeams}
                    allMembers={allMembers}
                    setMembers={setMembers}
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <TeamCard
                    title="QA/Tester"
                    members={teams["qa-tester"]}
                    teams={teams}
                    setTeams={setTeams}
                    allMembers={allMembers}
                    setMembers={setMembers}
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <TeamCard
                    title="Mobile Developers"
                    members={teams["mobile-dev"]}
                    teams={teams}
                    allMembers={allMembers}
                    setTeams={setTeams}
                    setMembers={setMembers}
                  />
                </div>{" "}
                <div className="col-12 col-lg-6">
                  <TeamCard
                    title="Devops"
                    members={teams["devops"]}
                    teams={teams}
                    allMembers={allMembers}
                    setTeams={setTeams}
                    setMembers={setMembers}
                  />
                </div>
              </div>{" "}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
