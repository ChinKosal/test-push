export const getAllMovieService = async (genre) => {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api${
      genre ? `?genre=${genre}` : "/"
    }`
  );
  const data = await res.json();
  // console.log("Data all in Movie : ", data);
  return data;
};

export const getMovieByIdServie = async (id) => {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/${id}`
  );
  const data = await res.json();
  // console.log("Data all in Movie by id: ", data);
  return data;
};
