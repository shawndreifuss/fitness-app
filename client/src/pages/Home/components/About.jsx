import React from 'react'
import {
  Card,
  Typography
} from "@material-tailwind/react";
import {
  BriefcaseIcon,
  ChartBarIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";

const contactData = [
  {
    title: "Excelent Services",
    icon: BriefcaseIcon,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Grow Your Market",
    icon: ChartBarIcon,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Launch Time",
    icon: PlayIcon,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const About = () => {

  return (
    <>

    <div className=" bg-white p-10 mx-auto pt-20 w-[96%] rounded-xl ">
          <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="lead" className="font-semibold">To do Section About Us</Typography>
      <Typography variant="h2" color="blue-gray" className="my-3">
        To do Heading
      </Typography>
      <Typography variant="lead" className="text-blue-gray-500">
        To do Description To do Description To do Description To do Description To do Description To do Description To do Description To do Description
        To do Description To do Description
      </Typography>
    </div>
    <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
          </>
  )
}

export default About