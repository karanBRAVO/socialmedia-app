import Button from "../components/Button";
import { useState, useEffect } from "react";

const Video = ({ width, height }) => {
  const [streamstatus, setStreamStatus] = useState(false);

  useEffect(() => {
    if (streamstatus) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          let video = document.getElementById("video");
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            video.play();
          };
        })
        .catch((err) => {
          setStreamStatus(false);
          console.log(err);
        });
    }
  }, [streamstatus]);

  const showPic = () => {
    if (streamstatus) {
      let video = document.getElementById("video");
      let canvas = document.getElementById("canvas");
      let context = canvas.getContext("2d");
      let pic = document.getElementById("pic");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const data = canvas.toDataURL("image/png");
      pic.src = data;

      let showPicCont = document.getElementById("showPicCont");
      showPicCont.classList.remove("hidden");
      showPicCont.classList.add("flex");
    }
  };

  const downloadPic = () => {
    if (streamstatus) {
      const data = document.getElementById("pic").src;
      let downloadableElement = document.createElement("a");
      downloadableElement.href = data;
      let date = new Date();
      downloadableElement.download = `${date.getTime()}`;
      document.body.appendChild(downloadableElement);
      downloadableElement.click();
      document.body.removeChild(downloadableElement);
    }
  };

  return (
    <>
      <div
        className={`flex items-center justify-center flex-col border-[1px] border-slate-600`}
        style={{
          width: width,
          height: height,
        }}
      >
        {!streamstatus ? (
          <>
            <h1 className="font-serif font-black text-5xl text-center p-2 m-1">
              Click the start camera button
            </h1>
            <h3 className="font-sans font-extrabold text-3xl p-2 m-1">
              In case camera do not start:
            </h3>
            <ul className="font-sans font-bold text-2xl m-1 p-1 list-disc">
              <li className="hover:list-decimal">Change the setting</li>
              <li className="hover:list-decimal">Browser do not support</li>
              <li className="hover:list-decimal">try reloading</li>
            </ul>
          </>
        ) : (
          <>
            <video
              id={"video"}
              className="object-cover bg-white"
              style={{
                height: height,
                width: width,
              }}
            ></video>
            <canvas id="canvas" className="hidden"></canvas>
          </>
        )}
      </div>

      <div
        className="flex items-center justify-center bg-[#8080804f] absolute z-0 bottom-0 border-2 border-slate-600"
        style={{
          width: width,
          height: "20vh",
        }}
      >
        <Button imgSrc={""} text={"Snap"} handleClick={showPic} />
        <Button
          imgSrc={""}
          text={streamstatus ? "Stop Camera" : "Start Camera"}
          handleClick={() => {
            setStreamStatus(!streamstatus);
          }}
        />
      </div>

      <div
        id="showPicCont"
        className="hidden items-center justify-center flex-col bg-[#dadce0] fixed top-0 z-10"
        style={{
          width: width,
          height: height,
        }}
      >
        <div className="flex items-center justify-center flex-col p-3 bg-white rounded-xl m-3 border-black border-2">
          <img
            id="pic"
            alt="Your Pic"
            className="m-4 w-[500px] h-[500px]"
          ></img>
          <div className="flex flex-row items-center justify-center">
            <Button imgSrc={""} text={"Download"} handleClick={downloadPic} />
            <Button
              imgSrc={""}
              text={"Cancel"}
              handleClick={() => {
                document.getElementById("showPicCont").classList.add("hidden");
                document.getElementById("showPicCont").classList.remove("flex");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
