import React, { useState } from "react";
import Footer from "../components/Footer";
import MainHeader from "../components/Header";
import {motion} from 'framer-motion';
import '/src/styles/Live.css'; 

function Live() {
  const [currPage, setCurrPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const videos = [
    { src: "https://www.youtube.com/embed/rONI7KgM_IU", date: "December 22, 2024" },
    { src: "https://www.youtube.com/embed/mHXRUvxNKFw", date: "December 22, 2024" },
    { src: "https://www.youtube.com/embed/FbL65RNnPbk", date: "December 22, 2024" },
    { src: "https://www.youtube.com/embed/rONI7KgM_IU", date: "December 21, 2024" },
    { src: "https://www.youtube.com/embed/mHXRUvxNKFw", date: "December 21, 2024" },
    { src: "https://www.youtube.com/embed/FbL65RNnPbk", date: "December 21, 2024" },
    { src: "https://www.youtube.com/embed/rONI7KgM_IU", date: "December 20, 2024" }
  ];
  
  const lastIdx = currPage * postsPerPage;
  const firstIdx = lastIdx - postsPerPage;
  const currPosts = videos.slice(firstIdx, lastIdx);


  return (
    <div className="Live-Page">

      {/* Most recent vid */}
      <motion.div 
      variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true, amount: 0.7}}
      
      className="LiveVid"
      >
        <h1>SUNDAY SERVICE</h1>
        <h5>December 22, 2024</h5>
        <iframe
          width="800"
          height="480"
          src="https://www.youtube.com/embed/Zu7jurElcIM"
          style={{ border: "none", borderRadius: "15px"  }}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="DMI Live Video"
        ></iframe>
      </motion.div>


      {/* Older vids */}
      <motion.div 
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}

      className="PreviousVid"
      >
      <h1>PREVIOUS LIVES</h1>
        <div className="scroll-container">
          {
          currPosts.map((video, index) => (
            <div key={index} className="video-item">
              <iframe
                width="400"
                height="250"
                src={video.src}
                style={{ border: "none", borderRadius: "15px"  }}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`DMI Live Video - ${index}`}
              ></iframe>
              <h5>{video.date}</h5>
            </div>
          ))
          }
        </div>
      </motion.div>
      
      {/* For pagination */}
      <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true, amount: 0.7}}
      >
        <Pagination 
          totalPosts={videos.length} 
          postsPerPage={postsPerPage}
          currPage={currPage}
          setCurrPage={setCurrPage}
        ></Pagination>
      </motion.div>

    </div>
  );
}
// For Pagination (to be used if data is already dynamic)
const Pagination = ({totalPosts, postsPerPage, currPage, setCurrPage}) => {
  let pages = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return(
    <div>
      {
          <div className="pagination-buttons">
          <button 
            onClick={() => setCurrPage((prev) => Math.max(prev - 1, 1))}
            disabled={currPage === 1}
          >
            Previous
          </button>
          {
            pages.map((page, index) => {
              return <button
              key={index}
              onClick={() => setCurrPage(page)}
              >
              {page}
              </button>
            })
          }
          <button 
            onClick={() => setCurrPage((prev) => Math.min(prev + 1, Math.ceil(totalPosts / postsPerPage)))}
            disabled={currPage === Math.ceil(totalPosts / postsPerPage)}
          >
            Next
          </button>
        </div>
      }
    </div>
  )
}

const fadeIn = (direction, delay) => {
  return ({
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  })
}

export default Live;
