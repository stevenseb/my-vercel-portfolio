import { SocialMediaItem, socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const [tooltipMessage, setTooltipMessage] = useState("");

  const handleSocialClick = (info: SocialMediaItem) => {
    if (info.action === "copy") {
      navigator.clipboard.writeText("your.email@example.com").then(() => {
        setTooltipMessage("Email copied");
        setTimeout(() => setTooltipMessage(""), 2000);
      });
    } else {
      window.open(info.link, "_blank", "noopener noreferrer");
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Eric_Stevens_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pb-10 pt-36 mb-[-60]">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-1 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Design with Next.js
          </p>

          <TextGenerateEffect
            words="What Can We Build Together NEXT?"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Eric, a Web Developer Using the Latest Technologies.
          </p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="profile.png"
              alt="Eric"
              className="rounded-full w-20 h-20 mb-3"
            />
          </div>
          <div className="flex items-center md:gap-3 gap-6 relative">
            {socialMedia.map((info: SocialMediaItem) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 relative group"
                onClick={() => handleSocialClick(info)}
              >
                {info.img ? (
                  <img src={info.img} alt="icons" width={20} height={20} />
                ) : (
                  <FontAwesomeIcon icon={info.icon} className="text-white" />
                )}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {info.tooltip}
                </span>
              </div>
            ))}
            {tooltipMessage && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 mt-2">
                {tooltipMessage}
              </div>
            )}
          </div>
          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <MagicButton
            title="Download My CV"
            icon={<FaLocationArrow />}
            position="right"
            onClick={handleDownloadCV}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
