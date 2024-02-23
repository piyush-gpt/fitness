import React, { useState } from "react";
import { Pagination } from "@mui/material";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const VideosPerPage = 3;

  const indexOfLastVideo = currentPage * VideosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - VideosPerPage;
  const currentvideo = exerciseVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );
  function paginate(e, value) {
    setCurrentPage(value);
  }

  return (
    <div className="mt-[100px] p-[20px]">
      <p className="mb-[33px] font-bold text-3xl text-yellow-100">
        Watch <span className=" capitalize text-red-500">{name}</span> exercise
        Videos
      </p>
      <div className="flex flex-wrap items-center justify-center gap-24">
        {currentvideo?.slice(0, 3).map((item, index) => (
          <a
            className="w-[360px]"
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
          >
            <img
              className=" rounded-md"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <div>
              <p className="mt-4 font-medium text-yellow-100">{item.video.title}</p>
              <p className="mt-1 text-sm text-yellow-100">{item.video.channelName}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
      {exerciseVideos.length>3 && (
        <Pagination
          
          shape="rounded"
          count={Math.ceil(exerciseVideos.length / VideosPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
          className=" bg-yellow-100"
        />
      )}
      </div>
    </div>
  );
};

export default ExerciseVideos;
