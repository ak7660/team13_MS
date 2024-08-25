// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import the CSS
import CustomCalendar from "./components/CustomCalendar";

export default function EventsCalendar() {
  const iconBoxInside = useColorModeValue("white", "white");
  const [events, setEvents] = useState([
    {
      attendStatus: true,
      eventId: "axym1283hsnausXX",
      eventName: "Diwali Night 2024",
      eventDescription: `
          <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
            <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
              Join Us for a Magical Diwali Night 2024!
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              Celebrate the Festival of Lights with an evening full of joy, color, and festivities. 
              Experience the warmth of community, indulge in delicious food, and be part of 
              exciting activities that will make this Diwali unforgettable.
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              <strong>Activities Include:</strong>
              <ul style="margin-top: 4px;">
                <li style="margin-left: 18px;">Spectacular Cultural Performances</li>
                <li style="margin-left: 18px;">Traditional Diwali Feast</li>
                <li style="margin-left: 18px;">Lantern Lighting Ceremony</li>
                <li style="margin-left: 18px;">Fun and Engaging Games for All Ages</li>
              </ul>
            </div>
            <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
              Don't miss out on the fun! Mark your calendars and join us at Unit 5F, High Fashion Centre,
              Kwai Chung, Hong Kong, on October 30th from 6:00 PM to 10:00 PM.
            </div>
          </div>
      `,
      dateTimeStart: "2024-08-02 18:00:00",
      dateTimeEnd: "2024-08-02 22:00:00",
      dateTimeStartMap: "2024-08-02T18:00:00",
      dateTimeEndMap: "2024-08-02T22:00:00",
      numOfSessions: "1",
      location: "Unit 5F, High Fashion Centre, No. 1 Kwai Hei Street, Kwai Chung, Hong Kong",
      userType: "volunteer",
      availableTimeSlots: [
        { startTime: "2024-10-30 18:00", endTime: "2024-8-30 19:00" },
        { startTime: "2024-10-30 21:00", endTime: "2024-8-30 22:00" },
      ],
      taskTypes: [
        "Setup",
        "Food Service",
      ],
      selectedTimeSlots: [
        { startTime: "2024-8-30 19:00", endTime: "2024-8-30 20:00" },
        { startTime: "2024-8-30 20:00", endTime: "2024-8-30 21:00" },
      ], 
      selectedTasks: [
        "Registration",
        "Cleanup",
      ], 
      trainingMaterials: ["https://www.youtube.com/watch?v=I-XjdcpfXoI", "https://www.youtube.com/watch?v=dmQ2PkTw2PQ"],
      delegatedTasks: [
        {
          task: "Registration",
          taskDescription: "Please move to the registration area and get in contact with the Registration Lead. Use the QR Code generated below to allow attendees to scan the QR code to mark attendance. Please mark the task as 'Completed' after completion. All the best!",
          startTime: "2024-10-30 19:00", 
          endTime: "2024-10-30 20:00",
        },
        {
          task: "Cleanup",
          taskDescription: "Please move to the clean up area or find any person in a yellow Zubin shirt. Thank you for helping out with one of our most difficult task! Please mark the task as 'Completed' after completion.",
          startTime: "2024-10-30 20:00", 
          endTime: "2024-10-30 21:00"
        }
      ]      
    },
    {
      attendStatus: false,
      eventId: "mnXJBsdcjhsj12",
      eventName: "Eid Ul Adha",
      eventDescription: `
      <div style="padding: 30px; background-color: #f7fafc; border-radius: 14px;">
        <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
          Celebrate Eid Ul Adha with Us!
        </div>
        <div style="margin-top: 8px; color: #2d3748;">
          Join us for a joyous Eid Ul Adha celebration filled with love, sacrifice, and community spirit. 
          Experience the warmth of togetherness as we gather to commemorate this special occasion 
          with traditional festivities and delicious feasts.
        </div>
        <div style="margin-top: 8px; color: #2d3748;">
          <strong>Highlights of the Event:</strong>
          <ul style="margin-top: 4px;">
            <li style="margin-left: 18px;">Special Eid Prayers and Sermon</li>
            <li style="margin-left: 18px;">Community Feast with Traditional Dishes</li>
            <li style="margin-left: 18px;">Charity and Qurbani Distribution</li>
            <li style="margin-left: 18px;">Family-Friendly Activities and Games</li>
          </ul>
        </div>
        <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
          Come together and celebrate at Unit 5F, High Fashion Centre,
          Kwai Chung, Hong Kong, on October 22nd from 7:00 PM to 10:00 PM.
        </div>
      </div>
    `,
      dateTimeStart: "2024-08-08 19:00:00",
      dateTimeEnd: "2024-08-08 22:00:00",
      dateTimeStartMap: "2024-08-08T19:00:00",
      dateTimeEndMap: "2024-08-08T22:00:00",
      numOfSessions: "1",
      location: "Unit 5F, High Fashion Centre, No. 1 Kwai Hei Street, Kwai Chung, Hong Kong",
      userType: "volunteer",
      availableTimeSlots: [
        { startTime: "2024-10-30 18:00", endTime: "2024-10-30 19:00" },
        { startTime: "2024-10-30 19:00", endTime: "2024-10-30 20:00" },
        { startTime: "2024-10-30 20:00", endTime: "2024-10-30 21:00" },
        { startTime: "2024-10-30 21:00", endTime: "2024-10-30 22:00" },
      ],
      taskTypes: [
        "Setup",
        "Food Service",
        "Registration",
        "Cleanup",
      ],
      selectedTimeSlots: [], 
      selectedTasks: [], 
    },
    {
      attendStatus: false,
      eventId: "nny2024abc123",
      eventName: "Nepali New Year",
      eventDescription: `
          <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
            <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
              Celebrate Nepali New Year 2024 with Us!
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              Join us for a vibrant celebration of Nepali New Year filled with cultural performances, traditional food, and community festivities. 
              Experience the rich heritage and warmth of the Nepali culture in this special event.
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              <strong>Activities Include:</strong>
              <ul style="margin-top: 4px;">
                <li style="margin-left: 18px;">Cultural Dance Performances</li>
                <li style="margin-left: 18px;">Traditional Nepali Feast</li>
                <li style="margin-left: 18px;">Music and Singing Sessions</li>
                <li style="margin-left: 18px;">Interactive Cultural Displays</li>
              </ul>
            </div>
            <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
              Mark your calendars and join us at the Nepali Cultural Center,
              Kwai Chung, Hong Kong, on April 13th from 5:00 PM to 9:00 PM.
            </div>
          </div>
      `,
      dateTimeStart: "2024-08-13 17:00:00",
      dateTimeEnd: "2024-08-13 21:00:00",
      dateTimeStartMap: "2024-08-13T17:00:00",
      dateTimeEndMap: "2024-08-13T21:00:00",
      numOfSessions: "1",
      location: "Nepali Cultural Center, Kwai Chung, Hong Kong",
      userType: "volunteer",
      availableTimeSlots: [
        { startTime: "2024-08-13 17:00", endTime: "2024-08-13 18:00" },
        { startTime: "2024-08-13 18:00", endTime: "2024-08-13 19:00" },
        { startTime: "2024-08-13 19:00", endTime: "2024-08-13 20:00" },
        { startTime: "2024-08-13 20:00", endTime: "2024-08-13 21:00" },
      ],
      taskTypes: [
        "Decorations Setup",
        "Food Serving",
        "Stage Management",
        "Clean Up",
      ],
      selectedTimeSlots: [
        { startTime: "2024-08-13 17:00", endTime: "2024-08-13 18:00" },
        { startTime: "2024-08-13 18:00", endTime: "2024-08-13 19:00" },
      ],
      selectedTasks: [
        "Decorations Setup",
        "Stage Management",
      ],
      trainingMaterials: ["https://www.youtube.com/watch?v=abc123", "https://www.youtube.com/watch?v=xyz456"],
      delegatedTasks: [
        {
          task: "Decorations Setup",
          taskDescription: "Assist in setting up decorations for the event. Please ensure all decorations are in place by the event start time. Mark the task as 'Completed' after setup.",
          startTime: "2024-08-13 17:00", 
          endTime: "2024-08-13 18:00",
        },
        {
          task: "Stage Management",
          taskDescription: "Manage the stage area and coordinate with performers. Ensure smooth transitions between performances. Mark the task as 'Completed' after all performances.",
          startTime: "2024-08-13 18:00", 
          endTime: "2024-08-13 19:00"
        }
      ]
    },
    {
      attendStatus: true,
      eventId: "holi2024xyz789",
      eventName: "Holi 2024 Celebration",
      eventDescription: `
          <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
            <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
              Join Us for a Colorful Holi 2024 Celebration!
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              Dive into the festival of colors with us as we celebrate Holi 2024! Enjoy an afternoon full of color throwing, traditional music, and festive food. 
              Experience the joy and togetherness that Holi brings with family and friends.
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              <strong>Activities Include:</strong>
              <ul style="margin-top: 4px;">
                <li style="margin-left: 18px;">Color Throwing Sessions</li>
                <li style="margin-left: 18px;">Live Music and Dance</li>
                <li style="margin-left: 18px;">Traditional Indian Snacks</li>
                <li style="margin-left: 18px;">Interactive Games and Competitions</li>
              </ul>
            </div>
            <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
              Don't miss out on the fun! Join us at the Holi Grounds, Victoria Park, Hong Kong, on March 25th from 2:00 PM to 6:00 PM.
            </div>
          </div>
      `,
      dateTimeStart: "2024-08-17 14:00:00",
      dateTimeEnd: "2024-08-17 18:00:00",
      dateTimeStartMap: "2024-08-17T14:00:00",
      dateTimeEndMap: "2024-08-17T18:00:00",
      numOfSessions: "1",
      location: "Holi Grounds, Victoria Park, Hong Kong",
      userType: "volunteer",
      availableTimeSlots: [
        { startTime: "2024-08-17 14:00", endTime: "2024-08-17 15:00" },
        { startTime: "2024-08-17 15:00", endTime: "2024-08-25 16:00" },
        { startTime: "2024-08-17 16:00", endTime: "2024-08-17 17:00" },
        { startTime: "2024-08-17 17:00", endTime: "2024-08-17 18:00" },
      ],
      taskTypes: [
        "Color Distribution",
        "Food Serving",
        "Music Coordination",
        "Clean Up",
      ],
      selectedTimeSlots: [
        { startTime: "2024-08-17 15:00", endTime: "2024-08-17 16:00" },
        { startTime: "2024-08-17 16:00", endTime: "2024-08-17 17:00" },
      ],
      selectedTasks: [
        "Color Distribution",
        "Music Coordination",
      ],
      trainingMaterials: ["https://www.youtube.com/watch?v=holi123", "https://www.youtube.com/watch?v=holi456"],
      delegatedTasks: [
        {
          task: "Color Distribution",
          taskDescription: "Help distribute colors to participants. Ensure everyone receives their color packets. Mark the task as 'Completed' after distribution.",
          startTime: "2024-08-17 15:00", 
          endTime: "2024-08-17 16:00",
        },
        {
          task: "Music Coordination",
          taskDescription: "Assist in coordinating the music during the event. Make sure the playlist is running smoothly and interact with the DJ if needed. Mark the task as 'Completed' after the music session.",
          startTime: "2024-08-17 16:00", 
          endTime: "2024-08-17 17:00"
        }
      ]
    },
    {
      attendStatus: true,
      eventId: "rakshaBandhan2024xyz123",
      eventName: "Raksha Bandhan",
      eventDescription: `
          <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
            <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
              Celebrate Raksha Bandhan 2024 with Us!
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              Join us in celebrating the beautiful bond between brothers and sisters this Raksha Bandhan. Enjoy traditional ceremonies, cultural performances, and a festive feast as we honor this special day.
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              <strong>Activities Include:</strong>
              <ul style="margin-top: 4px;">
                <li style="margin-left: 18px;">Rakhi Tying Ceremony</li>
                <li style="margin-left: 18px;">Cultural Performances</li>
                <li style="margin-left: 18px;">Special Raksha Bandhan Feast</li>
                <li style="margin-left: 18px;">Interactive Family Games</li>
              </ul>
            </div>
            <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
              Come and celebrate with us at the Harmony Hall, Central Plaza, Hong Kong, on August 6th from 4:00 PM to 8:00 PM.
            </div>
          </div>
      `,
      dateTimeStart: "2024-08-06 16:00:00",
      dateTimeEnd: "2024-08-06 20:00:00",
      dateTimeStartMap: "2024-08-06T16:00:00",
      dateTimeEndMap: "2024-08-06T20:00:00",
      numOfSessions: "1",
      location: "Harmony Hall, Central Plaza, Hong Kong",
      userType: "volunteer",
      availableTimeSlots: [
        { startTime: "2024-08-06 16:00", endTime: "2024-08-06 17:00" },
        { startTime: "2024-08-06 17:00", endTime: "2024-08-06 18:00" },
        { startTime: "2024-08-06 18:00", endTime: "2024-08-06 19:00" },
        { startTime: "2024-08-06 19:00", endTime: "2024-08-06 20:00" },
      ],
      taskTypes: [
        "Ceremony Setup",
        "Food Service",
        "Guest Coordination",
        "Clean Up",
      ],
      selectedTimeSlots: [
        { startTime: "2024-08-06 17:00", endTime: "2024-08-06 18:00" },
        { startTime: "2024-08-06 18:00", endTime: "2024-08-06 19:00" },
      ],
      selectedTasks: [
        "Ceremony Setup",
        "Guest Coordination",
      ],
      trainingMaterials: ["https://www.youtube.com/watch?v=raksha123", "https://www.youtube.com/watch?v=raksha456"],
      delegatedTasks: [
        {
          task: "Ceremony Setup",
          taskDescription: "Assist in setting up the venue for the Rakhi Tying Ceremony. Ensure all materials are in place. Mark the task as 'Completed' after setup.",
          startTime: "2024-08-06 17:00", 
          endTime: "2024-08-06 18:00",
        },
        {
          task: "Guest Coordination",
          taskDescription: "Help coordinate the guests as they arrive. Guide them to their seats and ensure they are comfortable. Mark the task as 'Completed' after the guests are settled.",
          startTime: "2024-08-06 18:00", 
          endTime: "2024-08-06 19:00"
        }
      ]
    },
    {
      attendStatus: false,
      eventId: "teej2024xyz456",
      eventName: "Teej Festival 2024",
      eventDescription: `
          <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
            <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
              Celebrate Teej Festival 2024 with Us!
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              Join us in celebrating the vibrant Teej Festival, a celebration of the monsoon and the well-being of spouses. Enjoy traditional dance, music, and food as we come together to celebrate.
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              <strong>Activities Include:</strong>
              <ul style="margin-top: 4px;">
                <li style="margin-left: 18px;">Traditional Dance Performances</li>
                <li style="margin-left: 18px;">Fasting Rituals and Prayers</li>
                <li style="margin-left: 18px;">Special Teej Feast</li>
                <li style="margin-left: 18px;">Interactive Cultural Workshops</li>
              </ul>
            </div>
            <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
              Join us at the Teej Pavilion, Central Park, Hong Kong, on August 10th from 3:00 PM to 7:00 PM.
            </div>
          </div>
      `,
      dateTimeStart: "2024-08-10 15:00:00",
      dateTimeEnd: "2024-08-10 19:00:00",
      dateTimeStartMap: "2024-08-10T15:00:00",
      dateTimeEndMap: "2024-08-10T19:00:00",
      numOfSessions: "1",
      location: "Teej Pavilion, Central Park, Hong Kong",
      userType: "volunteer",
      availableTimeSlots: [
        { startTime: "2024-08-10 15:00", endTime: "2024-08-10 16:00" },
        { startTime: "2024-08-10 16:00", endTime: "2024-08-10 17:00" },
        { startTime: "2024-08-10 17:00", endTime: "2024-08-10 18:00" },
        { startTime: "2024-08-10 18:00", endTime: "2024-08-10 19:00" },
      ],
      taskTypes: [
        "Dance Coordination",
        "Food Service",
        "Prayer Setup",
        "Clean Up",
      ],
      selectedTimeSlots: [],
      selectedTasks: [],
      trainingMaterials: ["https://www.youtube.com/watch?v=teej123", "https://www.youtube.com/watch?v=teej456"],
      delegatedTasks: []
    },
    {
      attendStatus: true,
      eventId: "mentalHealth2024xyz789",
      eventName: "Mental Health Day",
      eventDescription: `
          <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
            <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
              Join Us for Mental Health Awareness Day 2024
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              Participate in a day dedicated to raising awareness about mental health. Engage in discussions, workshops, and activities that promote mental well-being and destigmatize mental health issues.
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              <strong>Activities Include:</strong>
              <ul style="margin-top: 4px;">
                <li style="margin-left: 18px;">Keynote Sessions by Mental Health Experts</li>
                <li style="margin-left: 18px;">Mindfulness and Meditation Workshops</li>
                <li style="margin-left: 18px;">Open Discussions on Mental Health</li>
                <li style="margin-left: 18px;">Support Resources and Counseling Booths</li>
              </ul>
            </div>
            <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
              Join us at the Wellness Center, Central Plaza, Hong Kong, on August 14th from 10:00 AM to 4:00 PM.
            </div>
          </div>
      `,
      dateTimeStart: "2024-08-14 10:00:00",
      dateTimeEnd: "2024-08-14 16:00:00",
      dateTimeStartMap: "2024-08-14T10:00:00",
      dateTimeEndMap: "2024-08-14T16:00:00",
      numOfSessions: "1",
      location: "Wellness Center, Central Plaza, Hong Kong",
      userType: "volunteer",
      availableTimeSlots: [
        { startTime: "2024-08-14 10:00", endTime: "2024-08-14 12:00" },
        { startTime: "2024-08-14 12:00", endTime: "2024-08-14 14:00" },
        { startTime: "2024-08-14 14:00", endTime: "2024-08-14 16:00" },
      ],
      taskTypes: [
        "Workshop Assistance",
        "Guest Coordination",
        "Resource Booth Setup",
        "Clean Up",
      ],
      selectedTimeSlots: [
        { startTime: "2024-08-14 10:00", endTime: "2024-08-14 12:00" },
        { startTime: "2024-08-14 12:00", endTime: "2024-08-14 14:00" },
      ],
      selectedTasks: [
        "Workshop Assistance",
        "Guest Coordination",
      ],
      trainingMaterials: ["https://www.youtube.com/watch?v=mentalhealth123", "https://www.youtube.com/watch?v=mentalhealth456"],
      delegatedTasks: [
        {
          task: "Workshop Assistance",
          taskDescription: "Assist in setting up and managing workshops. Ensure that participants have all the necessary materials and guide them as needed. Mark the task as 'Completed' after the session.",
          startTime: "2024-08-14 10:00", 
          endTime: "2024-08-14 12:00",
        },
        {
          task: "Guest Coordination",
          taskDescription: "Help coordinate guests as they arrive, providing them with information and guiding them to the various activities. Mark the task as 'Completed' after guests are settled.",
          startTime: "2024-08-14 12:00", 
          endTime: "2024-08-14 14:00"
        }
      ]
    },
    {
      attendStatus: true,
      eventId: "racialEquality2024xyz456",
      eventName: "Racial Equality Sem.",
      eventDescription: `
          <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
            <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
              Join Us for the Racial Equality Seminar 2024
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              Be part of a critical discussion on racial equality and justice. This seminar will feature talks from activists, workshops, and open forums to promote understanding and action towards racial equity.
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              <strong>Activities Include:</strong>
              <ul style="margin-top: 4px;">
                <li style="margin-left: 18px;">Keynote Addresses by Racial Equality Activists</li>
                <li style="margin-left: 18px;">Interactive Workshops on Racial Justice</li>
                <li style="margin-left: 18px;">Panel Discussions with Community Leaders</li>
                <li style="margin-left: 18px;">Resource Sharing and Networking</li>
              </ul>
            </div>
            <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
              Join us at the Equality Center, Central Plaza, Hong Kong, on August 4th from 9:00 AM to 3:00 PM.
            </div>
          </div>
      `,
      dateTimeStart: "2024-08-04 09:00:00",
      dateTimeEnd: "2024-08-04 15:00:00",
      dateTimeStartMap: "2024-08-04T09:00:00",
      dateTimeEndMap: "2024-08-04T15:00:00",
      numOfSessions: "1",
      location: "Equality Center, Central Plaza, Hong Kong",
      userType: "volunteer",
      availableTimeSlots: [
        { startTime: "2024-08-04 09:00", endTime: "2024-08-04 11:00" },
        { startTime: "2024-08-04 11:00", endTime: "2024-08-04 13:00" },
        { startTime: "2024-08-04 13:00", endTime: "2024-08-04 15:00" },
      ],
      taskTypes: [
        "Workshop Facilitation",
        "Guest Assistance",
        "Panel Coordination",
        "Clean Up",
      ],
      selectedTimeSlots: [
        { startTime: "2024-08-04 09:00", endTime: "2024-08-04 11:00" },
        { startTime: "2024-08-04 11:00", endTime: "2024-08-04 13:00" },
      ],
      selectedTasks: [
        "Workshop Facilitation",
        "Panel Coordination",
      ],
      trainingMaterials: ["https://www.youtube.com/watch?v=racialequality123", "https://www.youtube.com/watch?v=racialequality456"],
      delegatedTasks: [
        {
          task: "Workshop Facilitation",
          taskDescription: "Facilitate the interactive workshops, ensuring participants are engaged and the session runs smoothly. Mark the task as 'Completed' after the workshop.",
          startTime: "2024-08-04 09:00", 
          endTime: "2024-08-04 11:00",
        },
        {
          task: "Panel Coordination",
          taskDescription: "Assist in coordinating the panel discussions. Ensure that speakers are prepared and transitions between sessions are smooth. Mark the task as 'Completed' after the panel session.",
          startTime: "2024-08-04 11:00", 
          endTime: "2024-08-04 13:00"
        }
      ]
    },
    {
      attendStatus: false,
      eventId: "chaiTeaGathering2024xyz789",
      eventName: "Chai-Tea Gathering",
      eventDescription: `
          <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
            <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
              Join Us for a Relaxing Chai-Tea Gathering!
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              Take a break and enjoy a soothing cup of chai tea with friends and fellow community members. This gathering is all about relaxation, conversation, and enjoying the simple pleasures of life.
            </div>
            <div style="margin-top: 8px; color: #2d3748;">
              <strong>Activities Include:</strong>
              <ul style="margin-top: 4px;">
                <li style="margin-left: 18px;">Variety of Chai Teas to Enjoy</li>
                <li style="margin-left: 18px;">Informal Conversations and Networking</li>
                <li style="margin-left: 18px;">Light Snacks and Treats</li>
                <li style="margin-left: 18px;">Community Building Activities</li>
              </ul>
            </div>
            <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
              Join us at the Tea Garden, Central Park, Hong Kong, on August 11th from 3:00 PM to 6:00 PM.
            </div>
          </div>
      `,
      dateTimeStart: "2024-08-11 15:00:00",
      dateTimeEnd: "2024-08-11 18:00:00",
      dateTimeStartMap: "2024-08-11T15:00:00",
      dateTimeEndMap: "2024-08-11T18:00:00",
      numOfSessions: "1",
      location: "Tea Garden, Central Park, Hong Kong",
      userType: "volunteer",
      availableTimeSlots: [
        { startTime: "2024-08-11 15:00", endTime: "2024-08-11 16:00" },
        { startTime: "2024-08-11 16:00", endTime: "2024-08-11 17:00" },
        { startTime: "2024-08-11 17:00", endTime: "2024-08-11 18:00" },
      ],
      taskTypes: [
        "Tea Serving",
        "Guest Greeting",
        "Snack Distribution",
        "Clean Up",
      ],
      selectedTimeSlots: [],
      selectedTasks: [],
      trainingMaterials: ["https://www.youtube.com/watch?v=chai123", "https://www.youtube.com/watch?v=chai456"],
      delegatedTasks: []
    }
     
  ])
  // const [events, setEvents] = useState([
  //   {
  //     attendStatus: false,
  //     eventId: "axym1283hsnausXX",
  //     eventName: "Diwali Night 2024",
  //     eventDescription: `
  //         <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
  //           <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
  //             Join Us for a Magical Diwali Night 2024!
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             Celebrate the Festival of Lights with an evening full of joy, color, and festivities. 
  //             Experience the warmth of community, indulge in delicious food, and be part of 
  //             exciting activities that will make this Diwali unforgettable.
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             <strong>Activities Include:</strong>
  //             <ul style="margin-top: 4px;">
  //               <li style="margin-left: 18px;">Spectacular Cultural Performances</li>
  //               <li style="margin-left: 18px;">Traditional Diwali Feast</li>
  //               <li style="margin-left: 18px;">Lantern Lighting Ceremony</li>
  //               <li style="margin-left: 18px;">Fun and Engaging Games for All Ages</li>
  //             </ul>
  //           </div>
  //           <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
  //             Don't miss out on the fun! Mark your calendars and join us at Unit 5F, High Fashion Centre,
  //             Kwai Chung, Hong Kong, on October 30th from 6:00 PM to 10:00 PM.
  //           </div>
  //         </div>
  //     `,
  //     dateTimeStart: "2024-08-02 18:00:00",
  //     dateTimeEnd: "2024-08-02 22:00:00",
  //     dateTimeStartMap: "2024-08-02T18:00:00",
  //     dateTimeEndMap: "2024-08-02T22:00:00",
  //     numOfSessions: "1",
  //     location: "Unit 5F, High Fashion Centre, No. 1 Kwai Hei Street, Kwai Chung, Hong Kong",
  //     userType: "community",
  //     availableTimeSlots: [
  //       { startTime: "2024-10-30 18:00", endTime: "2024-8-30 19:00" },
  //       { startTime: "2024-10-30 21:00", endTime: "2024-8-30 22:00" },
  //     ],
  //     taskTypes: [
  //       "Setup",
  //       "Food Service",
  //     ],
  //     selectedTimeSlots: [
  //       { startTime: "2024-8-30 19:00", endTime: "2024-8-30 20:00" },
  //       { startTime: "2024-8-30 20:00", endTime: "2024-8-30 21:00" },
  //     ], 
  //     selectedTasks: [
  //       "Registration",
  //       "Cleanup",
  //     ], 
  //     trainingMaterials: ["https://www.youtube.com/watch?v=I-XjdcpfXoI", "https://www.youtube.com/watch?v=dmQ2PkTw2PQ"],
  //     delegatedTasks: [
  //       {
  //         task: "Registration",
  //         taskDescription: "Please move to the registration area and get in contact with the Registration Lead. Use the QR Code generated below to allow attendees to scan the QR code to mark attendance. Please mark the task as 'Completed' after completion. All the best!",
  //         startTime: "2024-10-30 19:00", 
  //         endTime: "2024-10-30 20:00",
  //       },
  //       {
  //         task: "Cleanup",
  //         taskDescription: "Please move to the clean up area or find any person in a yellow Zubin shirt. Thank you for helping out with one of our most difficult task! Please mark the task as 'Completed' after completion.",
  //         startTime: "2024-10-30 20:00", 
  //         endTime: "2024-10-30 21:00"
  //       }
  //     ]      
  //   },
  //   {
  //     attendStatus: false,
  //     eventId: "mnXJBsdcjhsj12",
  //     eventName: "Eid Ul Adha",
  //     eventDescription: `
  //     <div style="padding: 30px; background-color: #f7fafc; border-radius: 14px;">
  //       <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
  //         Celebrate Eid Ul Adha with Us!
  //       </div>
  //       <div style="margin-top: 8px; color: #2d3748;">
  //         Join us for a joyous Eid Ul Adha celebration filled with love, sacrifice, and community spirit. 
  //         Experience the warmth of togetherness as we gather to commemorate this special occasion 
  //         with traditional festivities and delicious feasts.
  //       </div>
  //       <div style="margin-top: 8px; color: #2d3748;">
  //         <strong>Highlights of the Event:</strong>
  //         <ul style="margin-top: 4px;">
  //           <li style="margin-left: 18px;">Special Eid Prayers and Sermon</li>
  //           <li style="margin-left: 18px;">Community Feast with Traditional Dishes</li>
  //           <li style="margin-left: 18px;">Charity and Qurbani Distribution</li>
  //           <li style="margin-left: 18px;">Family-Friendly Activities and Games</li>
  //         </ul>
  //       </div>
  //       <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
  //         Come together and celebrate at Unit 5F, High Fashion Centre,
  //         Kwai Chung, Hong Kong, on October 22nd from 7:00 PM to 10:00 PM.
  //       </div>
  //     </div>
  //   `,
  //     dateTimeStart: "2024-08-08 19:00:00",
  //     dateTimeEnd: "2024-08-08 22:00:00",
  //     dateTimeStartMap: "2024-08-08T19:00:00",
  //     dateTimeEndMap: "2024-08-08T22:00:00",
  //     numOfSessions: "1",
  //     location: "Unit 5F, High Fashion Centre, No. 1 Kwai Hei Street, Kwai Chung, Hong Kong",
  //     userType: "community",
  //     availableTimeSlots: [
  //       { startTime: "2024-10-30 18:00", endTime: "2024-10-30 19:00" },
  //       { startTime: "2024-10-30 19:00", endTime: "2024-10-30 20:00" },
  //       { startTime: "2024-10-30 20:00", endTime: "2024-10-30 21:00" },
  //       { startTime: "2024-10-30 21:00", endTime: "2024-10-30 22:00" },
  //     ],
  //     taskTypes: [
  //       "Setup",
  //       "Food Service",
  //       "Registration",
  //       "Cleanup",
  //     ],
  //     selectedTimeSlots: [], 
  //     selectedTasks: [], 
  //   },
  //   {
  //     attendStatus: true,
  //     eventId: "nny2024abc123",
  //     eventName: "Nepali New Year",
  //     eventDescription: `
  //         <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
  //           <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
  //             Celebrate Nepali New Year 2024 with Us!
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             Join us for a vibrant celebration of Nepali New Year filled with cultural performances, traditional food, and community festivities. 
  //             Experience the rich heritage and warmth of the Nepali culture in this special event.
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             <strong>Activities Include:</strong>
  //             <ul style="margin-top: 4px;">
  //               <li style="margin-left: 18px;">Cultural Dance Performances</li>
  //               <li style="margin-left: 18px;">Traditional Nepali Feast</li>
  //               <li style="margin-left: 18px;">Music and Singing Sessions</li>
  //               <li style="margin-left: 18px;">Interactive Cultural Displays</li>
  //             </ul>
  //           </div>
  //           <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
  //             Mark your calendars and join us at the Nepali Cultural Center,
  //             Kwai Chung, Hong Kong, on April 13th from 5:00 PM to 9:00 PM.
  //           </div>
  //         </div>
  //     `,
  //     dateTimeStart: "2024-08-13 17:00:00",
  //     dateTimeEnd: "2024-08-13 21:00:00",
  //     dateTimeStartMap: "2024-08-13T17:00:00",
  //     dateTimeEndMap: "2024-08-13T21:00:00",
  //     numOfSessions: "1",
  //     location: "Nepali Cultural Center, Kwai Chung, Hong Kong",
  //     userType: "community",
  //     availableTimeSlots: [
  //       { startTime: "2024-08-13 17:00", endTime: "2024-08-13 18:00" },
  //       { startTime: "2024-08-13 18:00", endTime: "2024-08-13 19:00" },
  //       { startTime: "2024-08-13 19:00", endTime: "2024-08-13 20:00" },
  //       { startTime: "2024-08-13 20:00", endTime: "2024-08-13 21:00" },
  //     ],
  //     taskTypes: [
  //       "Decorations Setup",
  //       "Food Serving",
  //       "Stage Management",
  //       "Clean Up",
  //     ],
  //     selectedTimeSlots: [
  //       { startTime: "2024-08-13 17:00", endTime: "2024-08-13 18:00" },
  //       { startTime: "2024-08-13 18:00", endTime: "2024-08-13 19:00" },
  //     ],
  //     selectedTasks: [
  //       "Decorations Setup",
  //       "Stage Management",
  //     ],
  //     trainingMaterials: ["https://www.youtube.com/watch?v=abc123", "https://www.youtube.com/watch?v=xyz456"],
  //     delegatedTasks: [
  //       {
  //         task: "Decorations Setup",
  //         taskDescription: "Assist in setting up decorations for the event. Please ensure all decorations are in place by the event start time. Mark the task as 'Completed' after setup.",
  //         startTime: "2024-08-13 17:00", 
  //         endTime: "2024-08-13 18:00",
  //       },
  //       {
  //         task: "Stage Management",
  //         taskDescription: "Manage the stage area and coordinate with performers. Ensure smooth transitions between performances. Mark the task as 'Completed' after all performances.",
  //         startTime: "2024-08-13 18:00", 
  //         endTime: "2024-08-13 19:00"
  //       }
  //     ]
  //   },
  //   {
  //     attendStatus: false,
  //     eventId: "holi2024xyz789",
  //     eventName: "Holi 2024 Celebration",
  //     eventDescription: `
  //         <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
  //           <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
  //             Join Us for a Colorful Holi 2024 Celebration!
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             Dive into the festival of colors with us as we celebrate Holi 2024! Enjoy an afternoon full of color throwing, traditional music, and festive food. 
  //             Experience the joy and togetherness that Holi brings with family and friends.
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             <strong>Activities Include:</strong>
  //             <ul style="margin-top: 4px;">
  //               <li style="margin-left: 18px;">Color Throwing Sessions</li>
  //               <li style="margin-left: 18px;">Live Music and Dance</li>
  //               <li style="margin-left: 18px;">Traditional Indian Snacks</li>
  //               <li style="margin-left: 18px;">Interactive Games and Competitions</li>
  //             </ul>
  //           </div>
  //           <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
  //             Don't miss out on the fun! Join us at the Holi Grounds, Victoria Park, Hong Kong, on March 25th from 2:00 PM to 6:00 PM.
  //           </div>
  //         </div>
  //     `,
  //     dateTimeStart: "2024-08-17 14:00:00",
  //     dateTimeEnd: "2024-08-17 18:00:00",
  //     dateTimeStartMap: "2024-08-17T14:00:00",
  //     dateTimeEndMap: "2024-08-17T18:00:00",
  //     numOfSessions: "1",
  //     location: "Holi Grounds, Victoria Park, Hong Kong",
  //     userType: "community",
  //     availableTimeSlots: [
  //       { startTime: "2024-08-17 14:00", endTime: "2024-08-17 15:00" },
  //       { startTime: "2024-08-17 15:00", endTime: "2024-08-25 16:00" },
  //       { startTime: "2024-08-17 16:00", endTime: "2024-08-17 17:00" },
  //       { startTime: "2024-08-17 17:00", endTime: "2024-08-17 18:00" },
  //     ],
  //     taskTypes: [
  //       "Color Distribution",
  //       "Food Serving",
  //       "Music Coordination",
  //       "Clean Up",
  //     ],
  //     selectedTimeSlots: [
  //       { startTime: "2024-08-17 15:00", endTime: "2024-08-17 16:00" },
  //       { startTime: "2024-08-17 16:00", endTime: "2024-08-17 17:00" },
  //     ],
  //     selectedTasks: [
  //       "Color Distribution",
  //       "Music Coordination",
  //     ],
  //     trainingMaterials: ["https://www.youtube.com/watch?v=holi123", "https://www.youtube.com/watch?v=holi456"],
  //     delegatedTasks: [
  //       {
  //         task: "Color Distribution",
  //         taskDescription: "Help distribute colors to participants. Ensure everyone receives their color packets. Mark the task as 'Completed' after distribution.",
  //         startTime: "2024-08-17 15:00", 
  //         endTime: "2024-08-17 16:00",
  //       },
  //       {
  //         task: "Music Coordination",
  //         taskDescription: "Assist in coordinating the music during the event. Make sure the playlist is running smoothly and interact with the DJ if needed. Mark the task as 'Completed' after the music session.",
  //         startTime: "2024-08-17 16:00", 
  //         endTime: "2024-08-17 17:00"
  //       }
  //     ]
  //   },
  //   {
  //     attendStatus: true,
  //     eventId: "rakshaBandhan2024xyz123",
  //     eventName: "Raksha Bandhan",
  //     eventDescription: `
  //         <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
  //           <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
  //             Celebrate Raksha Bandhan 2024 with Us!
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             Join us in celebrating the beautiful bond between brothers and sisters this Raksha Bandhan. Enjoy traditional ceremonies, cultural performances, and a festive feast as we honor this special day.
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             <strong>Activities Include:</strong>
  //             <ul style="margin-top: 4px;">
  //               <li style="margin-left: 18px;">Rakhi Tying Ceremony</li>
  //               <li style="margin-left: 18px;">Cultural Performances</li>
  //               <li style="margin-left: 18px;">Special Raksha Bandhan Feast</li>
  //               <li style="margin-left: 18px;">Interactive Family Games</li>
  //             </ul>
  //           </div>
  //           <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
  //             Come and celebrate with us at the Harmony Hall, Central Plaza, Hong Kong, on August 6th from 4:00 PM to 8:00 PM.
  //           </div>
  //         </div>
  //     `,
  //     dateTimeStart: "2024-08-06 16:00:00",
  //     dateTimeEnd: "2024-08-06 20:00:00",
  //     dateTimeStartMap: "2024-08-06T16:00:00",
  //     dateTimeEndMap: "2024-08-06T20:00:00",
  //     numOfSessions: "1",
  //     location: "Harmony Hall, Central Plaza, Hong Kong",
  //     userType: "community",
  //     availableTimeSlots: [
  //       { startTime: "2024-08-06 16:00", endTime: "2024-08-06 17:00" },
  //       { startTime: "2024-08-06 17:00", endTime: "2024-08-06 18:00" },
  //       { startTime: "2024-08-06 18:00", endTime: "2024-08-06 19:00" },
  //       { startTime: "2024-08-06 19:00", endTime: "2024-08-06 20:00" },
  //     ],
  //     taskTypes: [
  //       "Ceremony Setup",
  //       "Food Service",
  //       "Guest Coordination",
  //       "Clean Up",
  //     ],
  //     selectedTimeSlots: [
  //       { startTime: "2024-08-06 17:00", endTime: "2024-08-06 18:00" },
  //       { startTime: "2024-08-06 18:00", endTime: "2024-08-06 19:00" },
  //     ],
  //     selectedTasks: [
  //       "Ceremony Setup",
  //       "Guest Coordination",
  //     ],
  //     trainingMaterials: ["https://www.youtube.com/watch?v=raksha123", "https://www.youtube.com/watch?v=raksha456"],
  //     delegatedTasks: [
  //       {
  //         task: "Ceremony Setup",
  //         taskDescription: "Assist in setting up the venue for the Rakhi Tying Ceremony. Ensure all materials are in place. Mark the task as 'Completed' after setup.",
  //         startTime: "2024-08-06 17:00", 
  //         endTime: "2024-08-06 18:00",
  //       },
  //       {
  //         task: "Guest Coordination",
  //         taskDescription: "Help coordinate the guests as they arrive. Guide them to their seats and ensure they are comfortable. Mark the task as 'Completed' after the guests are settled.",
  //         startTime: "2024-08-06 18:00", 
  //         endTime: "2024-08-06 19:00"
  //       }
  //     ]
  //   },
  //   {
  //     attendStatus: true,
  //     eventId: "teej2024xyz456",
  //     eventName: "Teej Festival 2024",
  //     eventDescription: `
  //         <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
  //           <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
  //             Celebrate Teej Festival 2024 with Us!
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             Join us in celebrating the vibrant Teej Festival, a celebration of the monsoon and the well-being of spouses. Enjoy traditional dance, music, and food as we come together to celebrate.
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             <strong>Activities Include:</strong>
  //             <ul style="margin-top: 4px;">
  //               <li style="margin-left: 18px;">Traditional Dance Performances</li>
  //               <li style="margin-left: 18px;">Fasting Rituals and Prayers</li>
  //               <li style="margin-left: 18px;">Special Teej Feast</li>
  //               <li style="margin-left: 18px;">Interactive Cultural Workshops</li>
  //             </ul>
  //           </div>
  //           <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
  //             Join us at the Teej Pavilion, Central Park, Hong Kong, on August 10th from 3:00 PM to 7:00 PM.
  //           </div>
  //         </div>
  //     `,
  //     dateTimeStart: "2024-08-10 15:00:00",
  //     dateTimeEnd: "2024-08-10 19:00:00",
  //     dateTimeStartMap: "2024-08-10T15:00:00",
  //     dateTimeEndMap: "2024-08-10T19:00:00",
  //     numOfSessions: "1",
  //     location: "Teej Pavilion, Central Park, Hong Kong",
  //     userType: "community",
  //     availableTimeSlots: [
  //       { startTime: "2024-08-10 15:00", endTime: "2024-08-10 16:00" },
  //       { startTime: "2024-08-10 16:00", endTime: "2024-08-10 17:00" },
  //       { startTime: "2024-08-10 17:00", endTime: "2024-08-10 18:00" },
  //       { startTime: "2024-08-10 18:00", endTime: "2024-08-10 19:00" },
  //     ],
  //     taskTypes: [
  //       "Dance Coordination",
  //       "Food Service",
  //       "Prayer Setup",
  //       "Clean Up",
  //     ],
  //     selectedTimeSlots: [],
  //     selectedTasks: [],
  //     trainingMaterials: ["https://www.youtube.com/watch?v=teej123", "https://www.youtube.com/watch?v=teej456"],
  //     delegatedTasks: []
  //   },
  //   {
  //     attendStatus: true,
  //     eventId: "mentalHealth2024xyz789",
  //     eventName: "Mental Health Day",
  //     eventDescription: `
  //         <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
  //           <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
  //             Join Us for Mental Health Awareness Day 2024
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             Participate in a day dedicated to raising awareness about mental health. Engage in discussions, workshops, and activities that promote mental well-being and destigmatize mental health issues.
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             <strong>Activities Include:</strong>
  //             <ul style="margin-top: 4px;">
  //               <li style="margin-left: 18px;">Keynote Sessions by Mental Health Experts</li>
  //               <li style="margin-left: 18px;">Mindfulness and Meditation Workshops</li>
  //               <li style="margin-left: 18px;">Open Discussions on Mental Health</li>
  //               <li style="margin-left: 18px;">Support Resources and Counseling Booths</li>
  //             </ul>
  //           </div>
  //           <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
  //             Join us at the Wellness Center, Central Plaza, Hong Kong, on August 14th from 10:00 AM to 4:00 PM.
  //           </div>
  //         </div>
  //     `,
  //     dateTimeStart: "2024-08-14 10:00:00",
  //     dateTimeEnd: "2024-08-14 16:00:00",
  //     dateTimeStartMap: "2024-08-14T10:00:00",
  //     dateTimeEndMap: "2024-08-14T16:00:00",
  //     numOfSessions: "1",
  //     location: "Wellness Center, Central Plaza, Hong Kong",
  //     userType: "community",
  //     availableTimeSlots: [
  //       { startTime: "2024-08-14 10:00", endTime: "2024-08-14 12:00" },
  //       { startTime: "2024-08-14 12:00", endTime: "2024-08-14 14:00" },
  //       { startTime: "2024-08-14 14:00", endTime: "2024-08-14 16:00" },
  //     ],
  //     taskTypes: [
  //       "Workshop Assistance",
  //       "Guest Coordination",
  //       "Resource Booth Setup",
  //       "Clean Up",
  //     ],
  //     selectedTimeSlots: [
  //       { startTime: "2024-08-14 10:00", endTime: "2024-08-14 12:00" },
  //       { startTime: "2024-08-14 12:00", endTime: "2024-08-14 14:00" },
  //     ],
  //     selectedTasks: [
  //       "Workshop Assistance",
  //       "Guest Coordination",
  //     ],
  //     trainingMaterials: ["https://www.youtube.com/watch?v=mentalhealth123", "https://www.youtube.com/watch?v=mentalhealth456"],
  //     delegatedTasks: [
  //       {
  //         task: "Workshop Assistance",
  //         taskDescription: "Assist in setting up and managing workshops. Ensure that participants have all the necessary materials and guide them as needed. Mark the task as 'Completed' after the session.",
  //         startTime: "2024-08-14 10:00", 
  //         endTime: "2024-08-14 12:00",
  //       },
  //       {
  //         task: "Guest Coordination",
  //         taskDescription: "Help coordinate guests as they arrive, providing them with information and guiding them to the various activities. Mark the task as 'Completed' after guests are settled.",
  //         startTime: "2024-08-14 12:00", 
  //         endTime: "2024-08-14 14:00"
  //       }
  //     ]
  //   },
  //   {
  //     attendStatus: true,
  //     eventId: "racialEquality2024xyz456",
  //     eventName: "Racial Equality Sem.",
  //     eventDescription: `
  //         <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
  //           <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
  //             Join Us for the Racial Equality Seminar 2024
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             Be part of a critical discussion on racial equality and justice. This seminar will feature talks from activists, workshops, and open forums to promote understanding and action towards racial equity.
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             <strong>Activities Include:</strong>
  //             <ul style="margin-top: 4px;">
  //               <li style="margin-left: 18px;">Keynote Addresses by Racial Equality Activists</li>
  //               <li style="margin-left: 18px;">Interactive Workshops on Racial Justice</li>
  //               <li style="margin-left: 18px;">Panel Discussions with Community Leaders</li>
  //               <li style="margin-left: 18px;">Resource Sharing and Networking</li>
  //             </ul>
  //           </div>
  //           <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
  //             Join us at the Equality Center, Central Plaza, Hong Kong, on August 4th from 9:00 AM to 3:00 PM.
  //           </div>
  //         </div>
  //     `,
  //     dateTimeStart: "2024-08-04 09:00:00",
  //     dateTimeEnd: "2024-08-04 15:00:00",
  //     dateTimeStartMap: "2024-08-04T09:00:00",
  //     dateTimeEndMap: "2024-08-04T15:00:00",
  //     numOfSessions: "1",
  //     location: "Equality Center, Central Plaza, Hong Kong",
  //     userType: "community",
  //     availableTimeSlots: [
  //       { startTime: "2024-08-04 09:00", endTime: "2024-08-04 11:00" },
  //       { startTime: "2024-08-04 11:00", endTime: "2024-08-04 13:00" },
  //       { startTime: "2024-08-04 13:00", endTime: "2024-08-04 15:00" },
  //     ],
  //     taskTypes: [
  //       "Workshop Facilitation",
  //       "Guest Assistance",
  //       "Panel Coordination",
  //       "Clean Up",
  //     ],
  //     selectedTimeSlots: [
  //       { startTime: "2024-08-04 09:00", endTime: "2024-08-04 11:00" },
  //       { startTime: "2024-08-04 11:00", endTime: "2024-08-04 13:00" },
  //     ],
  //     selectedTasks: [
  //       "Workshop Facilitation",
  //       "Panel Coordination",
  //     ],
  //     trainingMaterials: ["https://www.youtube.com/watch?v=racialequality123", "https://www.youtube.com/watch?v=racialequality456"],
  //     delegatedTasks: [
  //       {
  //         task: "Workshop Facilitation",
  //         taskDescription: "Facilitate the interactive workshops, ensuring participants are engaged and the session runs smoothly. Mark the task as 'Completed' after the workshop.",
  //         startTime: "2024-08-04 09:00", 
  //         endTime: "2024-08-04 11:00",
  //       },
  //       {
  //         task: "Panel Coordination",
  //         taskDescription: "Assist in coordinating the panel discussions. Ensure that speakers are prepared and transitions between sessions are smooth. Mark the task as 'Completed' after the panel session.",
  //         startTime: "2024-08-04 11:00", 
  //         endTime: "2024-08-04 13:00"
  //       }
  //     ]
  //   },
  //   {
  //     attendStatus: false,
  //     eventId: "chaiTeaGathering2024xyz789",
  //     eventName: "Chai-Tea Gathering",
  //     eventDescription: `
  //         <div style="padding: 16px; background-color: #f7fafc; border-radius: 8px;">
  //           <div style="font-size: 20px; font-weight: bold; color: #2d3748;">
  //             Join Us for a Relaxing Chai-Tea Gathering!
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             Take a break and enjoy a soothing cup of chai tea with friends and fellow community members. This gathering is all about relaxation, conversation, and enjoying the simple pleasures of life.
  //           </div>
  //           <div style="margin-top: 8px; color: #2d3748;">
  //             <strong>Activities Include:</strong>
  //             <ul style="margin-top: 4px;">
  //               <li style="margin-left: 18px;">Variety of Chai Teas to Enjoy</li>
  //               <li style="margin-left: 18px;">Informal Conversations and Networking</li>
  //               <li style="margin-left: 18px;">Light Snacks and Treats</li>
  //               <li style="margin-left: 18px;">Community Building Activities</li>
  //             </ul>
  //           </div>
  //           <div style="margin-top: 16px; font-weight: bold; color: #2d3748;">
  //             Join us at the Tea Garden, Central Park, Hong Kong, on August 11th from 3:00 PM to 6:00 PM.
  //           </div>
  //         </div>
  //     `,
  //     dateTimeStart: "2024-08-11 15:00:00",
  //     dateTimeEnd: "2024-08-11 18:00:00",
  //     dateTimeStartMap: "2024-08-11T15:00:00",
  //     dateTimeEndMap: "2024-08-11T18:00:00",
  //     numOfSessions: "1",
  //     location: "Tea Garden, Central Park, Hong Kong",
  //     userType: "community",
  //     availableTimeSlots: [
  //       { startTime: "2024-08-11 15:00", endTime: "2024-08-11 16:00" },
  //       { startTime: "2024-08-11 16:00", endTime: "2024-08-11 17:00" },
  //       { startTime: "2024-08-11 17:00", endTime: "2024-08-11 18:00" },
  //     ],
  //     taskTypes: [
  //       "Tea Serving",
  //       "Guest Greeting",
  //       "Snack Distribution",
  //       "Clean Up",
  //     ],
  //     selectedTimeSlots: [],
  //     selectedTasks: [],
  //     trainingMaterials: ["https://www.youtube.com/watch?v=chai123", "https://www.youtube.com/watch?v=chai456"],
  //     delegatedTasks: []
  //   }
     
  // ])
  const handleUpdateAttendStatus = (eventId, newStatus) => {
    setEvents((prevEvents) =>
        prevEvents.map((evt) =>
            evt.eventId === eventId ? { ...evt, attendStatus: newStatus } : evt
        )
    );
  };  

  return (
    <Flex flexDirection='column' pt={{ base: "80px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing=''>
        <Box gridColumn="span 4" textAlign="celeftnter">
          <Text fontSize="3xl" fontWeight="bold" color="#d19e06">
            Event Management Dashboard
          </Text>
          <Text fontSize="lg" fontWeight="" color="#28271F">
            Find events near you from our exclusive calendar. Sign up to help in our events and be at the top of our leaderboards! 
          </Text>
          <Text fontSize="lg" fontWeight="" color="#28271F">
            Find your delegated tasks for existing events and mark them as complete when done to earn points!
          </Text>
          <Flex alignItems="center" justifyContent="space-between" mt={1} border="#FFD147 1px solid" borderRadius={12} pl={3} pr={5} pt={2} pb={2}>
            <Box>
              <Text fontSize="2xl" fontWeight="bold" color="#28271F">
                Month: August 2024
              </Text>
            </Box>
            <Flex alignItems="center">
              <Box display="flex" alignItems="center" mr={4}>
                <Box width="15px" height="15px" bg="green.300" mr={2} borderRadius="md"></Box>
                <Text color="#28271F">Attending</Text>
              </Box>
              <Box display="flex" alignItems="center">
                <Box width="15px" height="15px" bg="blue.300" mr={2} borderRadius="md"></Box>
                <Text color="#28271F">Open</Text>
              </Box>
            </Flex>
            <Flex>
              <Box
                as="button"
                p={2}
                borderRadius={12}
                bg="#FFD147"
                color="#28271F"
                mr={2}
                minW={40}
              >
                ← Previous
              </Box>
              <Box
                as="button"
                p={2}
                borderRadius={12}
                bg="#FFD147"
                color="#28271F"
                minW={40}
              >
                Next →
              </Box>
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="-55px"
        gap="24px"
      >
        <Box width="100%" height="600px">
        <CustomCalendar
          events={events.map(event => ({
            ...event,
            updateAttendStatus: (newStatus) => handleUpdateAttendStatus(event.eventId, newStatus),
          }))}
        />
        </Box>
      </Grid>
    </Flex>
  );
}
