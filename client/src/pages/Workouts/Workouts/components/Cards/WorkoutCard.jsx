import React from 'react';
import { Card, CardHeader, CardBody, Typography, Avatar, Button } from '@material-tailwind/react';
import formatMonthAndYear from '../../../../../utils/DateFormat';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ id, name, category, difficulty, date, notes }) => {
  // Assuming `coach` should be a prop used for the avatar, pass it to this component
  return (
    <Card shadow={true} key={id}>
      <CardHeader>
        <img
          src="https://media.self.com/photos/6398b36c72eb56f726777d06/4:3/w_2560%2Cc_limit/weekly-workout-schedule.jpeg" // Placeholder image
          alt="Workout"
          className="h-full w-full scale-110 object-cover"
        />
      </CardHeader>
      <CardBody className="p-6">
        <div className="flex justify-between">
          <Typography variant="small" color="blue" className="mb-2 !font-medium">
            {category || 'N/A'}
          </Typography>
          <Typography variant="small" color="blue" className="mb-2 !font-medium">
            {difficulty || 'N/A'}
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2 normal-case transition-colors hover:text-gray-900">
          {name || 'Unnamed Workout'}
        </Typography>
        <Typography variant="h2" className="mb-6 font-normal !text-gray-500">
          {notes || 'No description provided.'}
        </Typography>
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-4">
            <Avatar size="sm" variant="circular" src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="Coach Avatar" />
            <div>
              <Typography variant="small" color="blue-gray" className="mb-0.5 !font-medium">
                {/* Assuming `coach` should be dynamic */}
                Coach Name
              </Typography>
              <Typography variant="small" color="gray" className="text-xs !text-gray-500 font-normal">
                {formatMonthAndYear(date)}
              </Typography>
            </div>
          </div>
          <Link to={`/workouts/${id}`}>
            <Button>View</Button>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default WorkoutCard;
