import React from "react";
import { Img, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full mt-[19px] mx-auto md:px-5 max-w-[1114px]">
        <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
          <div className="flex flex-col items-start justify-start w-[70%] md:w-full gap-1">
            <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
              <Img src="images/img_group_642_red_400.svg" alt="image_six" className="h-[50px]" />
              <div className="flex flex-row justify-between items-center w-[47%] sm:w-full mt-[25px] sm:mt-0">
                <div className="flex flex-col items-center justify-start w-[29%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Heading size="lg" as="h5" className="ml-px md:ml-0 tracking-[4.00px]">
                      ABOUT
                    </Heading>
                    <div className="h-[2px] w-[45%] mt-2.5 bg-deep_orange-A100" />
                    <div className="flex flex-col items-start justify-start mt-[38px] gap-[29px]">
                      <Heading as="h6" className="tracking-[0.90px] !font-semibold">
                         
                      </Heading>
                      <Heading as="h6" className="ml-px md:ml-0 tracking-[0.90px] !font-semibold">
                        What we do
                      </Heading>
                      <Heading as="h6" className="ml-px md:ml-0 tracking-[0.90px] !font-semibold">
                        Works
                      </Heading>
                      <Heading as="h6" className="ml-px md:ml-0 tracking-[0.90px] !font-semibold">
                        Testimonial
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[38%] gap-[37px]">
                  <div className="flex flex-col items-start justify-start w-full gap-2.5">
                    <Heading size="lg" as="h5" className="tracking-[4.00px]">
                      FOLLOW US
                    </Heading>
                    <div className="h-[2px] w-[34%] bg-deep_orange-A100" />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[30px]">
                    <Heading as="h6" className="tracking-[0.90px] !font-semibold">
                      Dribbble
                    </Heading>
                    <Heading as="h6" className="tracking-[0.90px] !font-semibold">
                      Instagram
                    </Heading>
                    <Heading as="h6" className="tracking-[0.90px] !font-semibold">
                      Behance
                    </Heading>
                    <Heading as="h6" className="tracking-[0.90px] !font-semibold">
                      Pinterest
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <Heading size="xs" as="p">
              All Rights Reserved
            </Heading>
          </div>
          <Img src="images/img_group_710.svg" alt="image_seven" className="h-[311px] mt-[120px] md:mt-0" />
        </div>
      </div>
    </footer>
  );
}
