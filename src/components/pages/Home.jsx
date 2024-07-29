import React, { useRef, useState } from "react";
import memebg from "../../assets/images/meme.jpg";
import meme1bg from "../../assets/images/meme1.jpg";
import meme2bg from "../../assets/images/meme2.jpg";
import meme3bg from "../../assets/images/meme3.jpg";
import meme4bg from "../../assets/images/meme4.jpg";
import meme5bg from "../../assets/images/meme5.jpg";
import meme6bg from "../../assets/images/meme6.jpg";
import { BsDownload } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

import { useParams, useNavigate } from "react-router-dom";
function Home() {
  const ref = useRef();
  const [memesArrs, setMemesArrs] = useState([
    {
      name: "based",
      meme: memebg,
      description: "Onboard Base",
    },
    {
      name: "based",
      meme: meme1bg,
      description: "Silence Base are Building",
    },
    {
      name: "based",
      meme: meme2bg,
      description: "Sleep working",
    },
    {
      name: "based",
      meme: meme3bg,
      description: "Base is for everyone",
    },
    {
      name: "based",
      meme: meme4bg,
      description: "Base, a new orbit",
    },
    {
      name: "based",
      meme: meme5bg,
      description: "Base builders",
    },
    {
      name: "based",
      meme: meme6bg,
      description: "BM BM",
    },
  ]);
  const [selected, setSelected] = useState(null);
  const [filteredMemes, setFilteredMemes] = useState(null);

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    const val = e.target.name.value;
    if (val.trim() !== "") {
      const filteredMemes = memesArrs.filter(
        (list) => list.name.includes(val) || list.description.includes(val)
      );
      setFilteredMemes(filteredMemes);
    } else {
      setFilteredMemes(null);
    }
  };
  const searchTx = (idx) => {
    setSelected(memesArrs[idx]);
  };
  const setmemes = (idx) => {
    setSelected(memesArrs[idx]);
  };

  return (
    <section className="home">
      <form onSubmit={onSubmit}>
        <h1> &#128169; Home for memers &#128169;</h1>
        <input type="text" name="name" placeholder="Search For memes" />
      </form>
      <div className="row">
        {filteredMemes
          ? filteredMemes.map((list, idx) => (
              <div
                className="box"
                key={idx}
                onClick={() => {
                  setmemes(idx);
                }}
              >
                <img src={list.meme} alt={list.name} />
                <h2>{list.name}</h2>
                <p>{list.description}</p>
              </div>
            ))
          : memesArrs.map((list, idx) => (
              <div
                className="box"
                key={idx}
                onClick={() => {
                  setmemes(idx);
                }}
              >
                <img src={list.meme} alt={list.name} />
                <h2>{list.name}</h2>
                <p>{list.description}</p>
              </div>
            ))}
      </div>
      {selected && (
        <div className="overlay">
          <a href={selected.meme} download={selected.meme} className="download">
            <BsDownload />
          </a>
          <div
            className="cancel"
            onClick={() => {
              setSelected(null);
            }}
          >
            <FaTimes />
          </div>
          <img src={selected.meme} alt="meme1bg" />
          <h2>{selected.name}</h2>
          <p>{selected.description}</p>
        </div>
      )}
    </section>
  );
}

export default Home;
