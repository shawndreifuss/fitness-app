import React, { useState} from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import WorkoutCard from "./Cards/WorkoutCard";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function MyWorkouts({user}) {
    console.log(user)
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>Example Day 1 Legs:</AccordionHeader>
        <AccordionBody>
            <div className="grid gap-2  lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        Example Day 2 Chest:
        </AccordionHeader>
        <AccordionBody>
            <div className="grid gap-2  lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Example 3 Back:
        </AccordionHeader>
        <AccordionBody>
            <div className="grid gap-2  lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        Example 4 Shoulders:
        </AccordionHeader>
        <AccordionBody>
            <div className="grid gap-2  lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        Example 5 Cardio:
        </AccordionHeader>
        <AccordionBody>
            <div className="grid gap-2  lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        Example 6 Abs:
        </AccordionHeader>
        <AccordionBody>
            <div className="grid gap-2  lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        Example 7 Arms:
        </AccordionHeader>
        <AccordionBody>
            <div className="grid gap-2  lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          <WorkoutCard/>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default MyWorkouts;