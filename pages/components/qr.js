import Image from "next/image";
import React from "react";
function Qr() {
  return (
    <div className="bg-white rounded-3xl w-[320px] h-[497px] mt-[85px] mx-auto flex">
      <div className="flex flex-col mx-4 mt-4">
        <Image
          className="rounded-xl mt-4"
          src="/images/image-qr-code.png"
          height={288}
          width={288}
          objectFit="fill"
          loading="eager"
        ></Image>
        <div className="h-[129px] w-[288px] text-center mt-6">
          <h1 className="text-darknavy text-[22px] font-Outfit font-bold leading-[27px] w-[288px] h-[56px]">
            Improve your front-end skills by building projects
          </h1>
          <h2 className="h-[57px] w-[256px] mx-4 mt-4 text-[15px] font-Outfit leading-[19px] font-light text-grey">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Qr;
