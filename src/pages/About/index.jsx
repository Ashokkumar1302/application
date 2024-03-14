import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full gap-[120px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[54px]">
          <header className="flex flex-row sm:flex-col justify-between items-center w-full p-[15px] sm:gap-10">
            <Img src="images/download.jpeg" alt="image" className="h-[50px] ml-[149px] md:ml-5" />
            <div className="flex flex-row justify-between items-start w-[30%] sm:w-full mr-[166px] md:mr-5">
              <Heading as="h6" className="!text-black-900 text-center">
               <a href="/">Home</a>
              </Heading>
              <div className="flex flex-col items-center justify-start w-[12%] gap-2">
                <Heading as="h6" className="!text-red-400_01 text-center">
                  About
                </Heading>
                <div className="h-[6px] w-[6px] bg-red-400_01 rounded-[50%]" />
              </div>
              <Heading as="h6" className="!text-black-900 text-center">
               <a href="/Order"> Order </a> 
              </Heading>
              <Heading as="h6" className="!text-black-900 text-center">
              <a href="/Product"> Products </a>  
              </Heading>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start w-full gap-[98px] md:px-5 max-w-[1180px]">
            <div className="flex flex-row justify-start w-full p-[53px] md:p-5 bg-yellow-100 rounded-[90px]">
              <div className="flex flex-row md:flex-col justify-start items-start w-[88%] mt-[19px] ml-[60px] md:gap-5 md:ml-5">
                <div className="flex flex-col items-start justify-start w-[10%] md:w-full gap-[60px]">
                  <Img
                    src="images/img_ellipse_11.png"
                    alt="circleimage"
                    className="h-[89px] w-[89px] md:h-auto rounded-[50%]"
                  />
                  <div className="h-[14px] w-[14px] ml-[23px] md:ml-0 sm:ml-5 bg-pink-400 rounded-[50%]" />
                </div>
                <div className="flex flex-col items-end justify-start w-[91%] md:w-full gap-[61px]">
                  <div className="h-[14px] w-[14px] mr-[134px] md:mr-5 bg-deep_orange-A100 rounded-[50%]" />
                  <div className="flex flex-row justify-end w-full">
                    <div className="flex flex-row md:flex-col justify-end items-start w-full md:gap-5">
                      <div className="flex flex-col items-center justify-start w-[91%] md:w-full gap-[15px] z-[1]">
                        <Heading size="5xl" as="h1" className="w-[66%] !text-black-900 text-center leading-[60px]">
                          <span className="text-black-900">Get to know more </span>
                          <span className="text-red-400_01">about us</span>
                        </Heading>
                        <Text as="p" className="text-center !leading-10">
                          We are an agency engaged in the creative industry and business, we are ready to help you to
                          improve your business performance together with our great team
                        </Text>
                      </div>
                      <Img
                        src="images/img_ellipse_13.png"
                        alt="circleimage_one"
                        className="h-[89px] w-[89px] md:h-auto ml-[-11px] md:ml-0 rounded-[50%]"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_ellipse_12.png"
                    alt="circleimage_two"
                    className="h-[89px] w-[89px] md:h-auto mr-[89px] md:mr-5 rounded-[50%]"
                  />
                </div>
              </div>
            </div>
            <div className="justify-center w-full gap-[30px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
              <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                <Img
                  src="images/img_rectangle_16.png"
                  alt="image"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[44%] md:w-full gap-3">
                  <Heading size="xl" as="h2" className="!text-gray-800_01">
                    Sarah Jae
                  </Heading>
                  <Text as="p" className="!text-black-900_68">
                    Branding Specialist
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[35px]">
                <Img
                  src="images/img_rectangle_15.png"
                  alt="image"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[39%] md:w-full gap-3 py-1">
                  <Heading size="xl" as="h3" className="!text-gray-800_01">
                    John Doe
                  </Heading>
                  <Text as="p" className="!text-black-900_68 text-center">
                    Product Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                <Img
                  src="images/img_rectangle_17.png"
                  alt="image"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[33%] md:w-full gap-3">
                  <Heading size="xl" as="h4" className="!text-gray-800_01 text-center">
                    Samantha
                  </Heading>
                  <Text as="p" className="!text-black-900_68 text-center">
                    SEO Specialist
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-9">
                <Img
                  src="images/img_rectangle_18.png"
                  alt="image"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[44%] md:w-full gap-[7px]">
                  <Heading size="2xl" as="h5" className="!text-black-900">
                    Lila laconsia
                  </Heading>
                  <Text size="lg" as="p" className="!text-black-900_68 text-center">
                    UI Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-9">
                <Img
                  src="images/img_rectangle_19.png"
                  alt="image"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[39%] md:w-full gap-1">
                  <Heading size="2xl" as="h6" className="!text-black-900 text-center">
                    Ana louren
                  </Heading>
                  <Text size="lg" as="p" className="!text-black-900_68 text-center">
                    Illustrator
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                <Img
                  src="images/img_rectangle_20.png"
                  alt="image"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[37%] md:w-full gap-1">
                  <Heading size="2xl" as="h3" className="!text-black-900 text-center">
                    Rico john
                  </Heading>
                  <Text size="lg" as="p" className="!text-black-900_68 text-center">
                    UX Principles
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                <Img
                  src="images/img_rectangle_21.png"
                  alt="image"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[57%] md:w-full gap-1">
                  <Heading size="2xl" as="h3" className="!text-black-900">
                    Randy okla
                  </Heading>
                  <Text size="lg" as="p" className="!text-black-900_68 text-center">
                    Interaction Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-9">
                <Img
                  src="images/img_rectangle_22.png"
                  alt="image"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[46%] md:w-full gap-[5px]">
                  <Heading size="2xl" as="h3" className="!text-black-900">
                    Sinta Marcus
                  </Heading>
                  <Text size="lg" as="p" className="!text-black-900_68 text-center">
                    UX Writer
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-9">
                <Img
                  src="images/img_rectangle_23.png"
                  alt="image"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-center justify-start w-[40%] md:w-full gap-1">
                  <Heading size="2xl" as="h3" className="!text-black-900 text-center">
                    Sam Rivald
                  </Heading>
                  <Text size="lg" as="p" className="!text-black-900_68 text-center">
                    Front-end Dev
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[63px]">
              <Heading size="4xl" as="h1" className="!text-black-900">
                Our Moment
              </Heading>
              <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[30px] md:gap-5">
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-[30px]">
                  <Img
                    src="images/img_rectangle_29.png"
                    alt="image_one"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_30.png"
                    alt="image_two"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-[30px]">
                  <Img
                    src="images/img_rectangle_31.png"
                    alt="image_three"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_mask_group.png"
                    alt="image_four"
                    className="w-full md:h-auto sm:w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-[29px]">
                  <Img
                    src="images/img_kelly_sikkema_c.png"
                    alt="kellysikkemac"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_woman_sitting_o.png"
                    alt="womansittingo"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_mask_group_206x374.png"
                    alt="image_five"
                    className="w-full md:h-auto sm:w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full pt-[47px] px-[47px] md:pt-5 md:px-5 rounded-tr-[50px] bg-gray-800">
          <div className="flex flex-row justify-center w-full mt-[19px] mx-auto max-w-[1114px]">
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <div className="flex flex-col items-start justify-start w-[70%] md:w-full gap-1">
                <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
                  <Img src="images/download.jpeg" alt="image_six" className="h-[50px]" />
                  <div className="flex flex-row justify-between items-center w-[47%] sm:w-full mt-[25px] sm:mt-0">
                    <div className="flex flex-col items-center justify-start w-[29%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Heading size="lg" as="h5" className="ml-px md:ml-0 tracking-[4.00px]">
                          ABOUT
                        </Heading>
                        <div className="h-[2px] w-[45%] mt-2.5 bg-deep_orange-A100" />
                        <div className="flex flex-col items-start justify-start mt-[38px] gap-[29px]">
                          <Heading as="h6" className="tracking-[0.90px] !font-semibold">
                            About
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
      </div>
    </>
  );
}
