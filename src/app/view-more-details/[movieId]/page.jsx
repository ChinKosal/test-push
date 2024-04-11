import { getMovieByIdServie } from "@/service/product.service";
import React from "react";
import { FaStar } from "react-icons/fa6";

const movieDetailsPage = async ({ params }) => {
  // console.log("Params : ", params.movieId);
  const data = await getMovieByIdServie(params.movieId);
  // console.log("Data by ID : ", data);

  // Custom function to format the date and time
  const formatDateTime = (dateTimeString) => {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const dateTime = new Date(dateTimeString);
    // console.log("Date time : ", dateTime);
    const formattedDateTime = dateTime.toLocaleString("en-US", options);
    // console.log("Format data time : ", formatDateTime);
    return formattedDateTime.replace("at", ",");
  };

  const renderStars = () => {
    const rating = data.payload.rating;
    const fullStars = Math.floor(rating);
    console.log(fullStars);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} color="gold" />);
      } else {
        stars.push(<FaStar key={i} color="white" />);
      }
    }

    return stars;
  };
  return (
    <>
      <div className="bg-transparent dark:bg-gray-800 py-8">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4 -mx-4">
            <div className="col-span-8 md:flex-1 px-4">
              <div className="h-[750px] rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={`${
                    data.payload.image
                      ? data.payload.image
                      : `https://i.pinimg.com/564x/1e/6a/02/1e6a022bd5e190fe5bf1e87904411a7e.jpg`
                  }`}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="col-span-4 md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-white dark:text-white mb-2">
                {data.payload.director}
              </h2>
              <p className="text-white dark:text-gray-300 text-sm mb-1 line-clamp-1">
                {data.payload.runtime} <span>minuts</span>
              </p>
              <div className="mb-1">
                <div>
                  <span className="text-white dark:text-gray-300">
                    {data.payload.genre}
                  </span>
                  <div className="flex items-center gap-1 mt-2 text-xl">
                    {renderStars()}
                  </div>
                </div>
              </div>
              <div className="mt-10  text-xl text-white dark:text-gray-30">
                <span className="font-bold">{data.payload.movie_title}</span>
                <span className="font-bold">
                  ( {data.payload.released_year} )
                </span>
                <p className="text-white dark:text-gray-300 text-base mt-2">
                  {data.payload.description}
                </p>
              </div>
              <div>
                <p className="text-base mt-10 text-white">
                  {formatDateTime(data.payload.posted_at)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default movieDetailsPage;
