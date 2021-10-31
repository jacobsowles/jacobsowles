import { Fragment } from 'react';
import useFetch from "react-fetch-hook";

type TimeRecord = {
  duration: number;
  id: string;
  timestamp: string;
}

const SeatTime = () => {

  const { data, error, isLoading } = useFetch<TimeRecord[]>("https://us-central1-seat-time-330421.cloudfunctions.net/app/time-records");

  return isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : <Fragment>{data}</Fragment>;
};

export { SeatTime };
