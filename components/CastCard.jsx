import React from "react";

const CastCard = ({ cast }) => {
  const getImage = (image) => {
    return "https://www.themoviedb.org/t/p/w138_and_h175_face" + image;
  };

  const PersonMovie = () => {
    const url = `/person/${cast.original_name}/${cast.id}`;
    window.location.href = url;
  };

  return (
    <div
      className="w-[138px] h-[280px] shadow-black-md rounded-b-md cursor-pointer"
      onClick={PersonMovie}
    >
      {cast && cast.profile_path ? (
        <img
          src={getImage(cast.profile_path)}
          alt=""
          className="rounded-t-lg"
        />
      ) : (
        <img
          src="http://localhost:3000/src/assets/NoProfile.png"
          alt="No Image Available"
          className="rounded-t-lg"
        />
      )}
      <div className="px-2 py-1">
        <strong className="text-[16px]">{cast.original_name}</strong>
        <h1 className="text-[14px] opacity-40">{cast.character}</h1>
      </div>
    </div>
  );
};

export default CastCard;
