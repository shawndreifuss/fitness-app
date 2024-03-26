import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";

const Nutrition = () => {
  return (
    <section className="-mt-20 bg-white mx-auto pt-20 w-[96%] px-4 pb-20 lg-pb-40 pt-4">
      <div className="container mx-auto">
        <div className="lg:mt-32 flex flex-row-reverse flex-wrap items-center">
          <div className="mx-auto sm:mt-0 mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
            <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
              <CardHeader floated={false} className="relative h-64 overflow-hidden">
                <img
                  alt="Card Image"
                  src="/imgs/gym.webp"
                  className=" w-full "
                />
              </CardHeader>
            </Card>
          </div>
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div> */}
            <Typography
              variant="h3"
              className="mb-3 font-bold"
              color="blue-gray"
            >
              Nutrition
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-500">
              where to write out steps guide to Nutrition
              <br />
              <br />
              to do to do to do to do to do to do to do to do to do to do to do
              to do to do to do to do to do to do to do to do to do to do to do
              to do to do to do to do to do to do to do to do to do to do to do
              to do to do to do to do to do to do to do to do to do to do to do
              to do to do to do to do to do to do to do to do
            </Typography>
            <Link to='/nutrition'>
            <Button variant="filled" className="bg-[purple] px-10">
              Shop
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
