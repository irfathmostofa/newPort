import React from "react";

export const Projects = () => {
  const projectsArray = [1, 2, 3, 4, 5];
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projectsArray.map((item) => (
          <>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <div className="grid grid-cols-2 gap-0">
                <div className="">
                  <h4 className="text-4xl font-semibold mb-5">Project name</h4>
                  <p>
                    Netflix 2.0 app that has a Log In and Log Out Authentication
                    with Google. It has a beautiful Home Screen with all the
                    movies looking just like Netflix. There is also a
                    subscription page where you can see your active monthly
                    subscription. We also use Stripe Payments for the monthly
                    Netflix Subscriptions!
                  </p>
                </div>

                <div>
                  <img
                    src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};
