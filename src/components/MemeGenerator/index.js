import React, { useState, useEffect } from "react";

function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(res => {
        const { memes } = res.data;
        setAllMemes(memes);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const randomMemeUrl = allMemes[randomNum].url;
    setRandomImg(randomMemeUrl);
  };
  return (
    <main className="main">
      <form className="meme-form" onSubmit={handleSubmit}>
        <input
          className="text-input"
          type="text"
          name="topText"
          placeholder="Top Text Here"
          value={topText}
          onChange={e => setTopText(e.target.value)}
        />

        <input
          className="text-input"
          type="text"
          name="bottomText"
          placeholder="Bottom Text Here"
          value={bottomText}
          onChange={e => setBottomText(e.target.value)}
        />
        <button className="button">Generate</button>
      </form>

      <section className="meme-section">
        <img className="meme-img" src={randomImg} alt="" />
        <h2 className="top-text" style={{ backgroundColor: topText ? 'black' : 'none'}}>{topText}</h2>
        <h2 className="bottom-text" style={{ backgroundColor: topText ? 'black' : 'none'}}>{bottomText}</h2>
      </section>
    </main>
  );
}

export default MemeGenerator;
