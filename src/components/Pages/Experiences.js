import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import './Experiences.css'

const Experiences = () => {
  return (
    <div >
      <VerticalTimeline lineColor= "#38599b">
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date = "May 2023 - Present"
          iconStyle={{ background: "#5f97d9", color: "#fff"}}
          icon = {<WorkIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Software Engineer - Bank of America
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Charlotte, FL
          </h4>
          <p>
            Incoming!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date = "August 2019 - May 2023"
          iconStyle={{ background: "#8dc9fe", color: "#fff"}}
          icon = {<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            University of Florida, Gainesville, Florida
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Computer Science, Statistics double major</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date = "August 2022 - December 2022"
          iconStyle={{ background: "#5f97d9", color: "#fff"}}
          icon = {<WorkIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Web Development Intern - University of Florida IT Department
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gainesville, FL
          </h4>
          <p>
            Helped maintaining the current UFIT website and implemented new functionalities.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date = "August 2022 - December 2022"
          iconStyle={{ background: "#5f97d9", color: "#fff"}}
          icon = {<WorkIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Web Development Intern - InfoTech
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gainesville, FL
          </h4>
          <p>
            Created a time management web application for helping a group of people share availabilities and schedule meetings.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date = "January 2021 - April 2021"
          iconStyle={{background: "#38599b", color: "#fff"}}
          icon={<PeopleIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            President - Chinese American Student Association
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Florida
          </h4>
          <p>
            <ul>
              <li>Overseeing all affairs of the organization and leading the direction of growth</li>
              <li>Coordinating outreach on UF campus and in Gainesville by contacting local schools and businesses</li>
              <li>Presiding all general member and officer meetings</li>
              <li>Managing the officer board and ensuring officer accountability</li>
            </ul>
          </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2021 - April 2021"
          iconStyle={{ background: "#38599b", color: "#fff" }}
          icon={<PeopleIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            VP of Culture - Chinese American Student Association
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Florida
          </h4>
          <p>
            <ul>
              <li>Organized the biggest events of the organization: Fall and Spring cultural shows with 500+ attendees</li>
              <li>Adapted to the online show format by innovating in uses of digital medias</li>
              <li>Created and managed ad-hoc committees to fulfill the needs of the events</li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experiences