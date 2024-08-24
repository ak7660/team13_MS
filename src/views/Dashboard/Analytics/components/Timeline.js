import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import peopleImage from "assets/img/people-image.png";
import "react-vertical-timeline-component/style.min.css";
import {
  Flex,
  Icon,
  Image,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

import React from "react";
import { GPSIcon } from "components/Icons/Icons";
import { StarIcon } from "@chakra-ui/icons";

const Timeline = () => {
    const textColor = useColorModeValue("gray.700", "white");
    const data = {
        name: "Chai Tea Meet Up Event",
        image: "https://via.placeholder.com/150",
        startTime: "17/05/2024",
        endTime: "18/05/2024",
        location: "Wan Chai",
        rating: 4.2,
        numOfReviews: 20,
    };
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentStyle={{ padding: 4 }}
        icon={<GPSIcon />}
      >
        <Flex direction="row">
          <Image
            src={peopleImage}
            alt="chakra image"
            w="40%"
            objectFit="cover"
            p="4px"
            rounded="10"
          />
          <Flex direction="column" padding="6">
          <p className="vertical-timeline-element-title">{data.name}</p>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <Flex align="center">
        <Icon as={StarIcon} color="yellow.400" w="0.7rem" />
        <p>{data.rating}</p>
              
        </Flex>
          </Flex>
          
        </Flex>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<GPSIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<GPSIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<GPSIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<GPSIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Agile Development Scrum Master
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<GPSIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
