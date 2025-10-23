import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, role, github, link }: ProjectType) => {
  // Function to get appropriate icon based on project name
  const getProjectIcon = (projectName: string) => {
    const name = projectName.toLowerCase();
    if (name.includes('school') || name.includes('education') || name.includes('mesophia')) {
      return 'ni ni-books text-info';
    } else if (name.includes('digital') || name.includes('transformation') || name.includes('core')) {
      return 'ni ni-laptop text-success';
    } else if (name.includes('driver') || name.includes('management') || name.includes('system')) {
      return 'ni ni-settings text-warning';
    } else if (name.includes('ai') || name.includes('machine') || name.includes('intelligence')) {
      return 'ni ni-satisfied text-primary';
    } else {
      return 'ni ni-laptop text-info';
    }
  };

  return (
    <Col lg="12">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <div className="d-flex align-items-center mb-3">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-center mr-3">
                  <i className={getProjectIcon(name)} />
                </div>
                <div>
                  <h3 className="mb-1">{name}</h3>
                  <h5 className="text-muted">{role}</h5>
                </div>
              </div>
              <p className="description mt-3">{desc}</p>
              {github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="Github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              ) : null}
              {link ? (
                <Button
                  className="btn-icon"
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">Demo</span>
                </Button>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
