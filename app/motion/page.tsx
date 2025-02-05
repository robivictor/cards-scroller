import React from "react";
import Hero from "@/components/Hero";
// import ImageOne from "@/public/image_one.avif";
// import ImageTwo from "@/public/image_two.avif";
// import ImageThree from "@/public/image_three.avif";
// import { AppWindowIcon, ChartNoAxesCombinedIcon, HomeIcon } from "lucide-react";

export default function Home() {
//   const cards = [
//     {
//       icon: HomeIcon,
//       description:
//         "Create your own website to build a relationship with viewers and sell content.",
//       image: ImageOne,
//     },
//     {
//       icon: AppWindowIcon,
//       description:
//         "Sell on-demand content globally and accept payment in over 100 currencies.",
//       image: ImageTwo,
//     },
//     {
//       icon: ChartNoAxesCombinedIcon,
//       description:
//         "Offer incentives like free trials, exclusive content, and promotions to grow your following.",
//       image: ImageThree,
//     },
//   ];

  return (
    <main className="relative">
      <Hero />
      <div>
        <div>
          <ul
            className="flex flex-col gap-4"
            style={{
              height: `calc(50vh + 1424px - 302px)`,
              marginBottom: `calc(-50vh + 302px)`,
            }}
          >
            <li style={{ zIndex: `3`, height: `464px`, marginTop: `-0px` }}>
              <div
                className="flex flex-1 items-top px-4 md:px-14 md:h-[29rem] md:sticky"
                style={{ top: `calc(50vh - 302px + 0px)`, marginTop: `0px` }}
              >
                <div className="no-underline w-full h-full font-sans overflow-hidden text-card-content group rounded-standard lg:flex-row-reverse bg-card-background-light">
                  <div className="pt-global-nav -mt-global-nav"></div>
                  <div className="flex justify-end lg:justify-end flex-1">
                    <div className="asset-image-container relative asset-block w-full justify-end rounded-standard overflow-hidden flex aspect-[var(--aspect-ratio)] lg:justify-end flex-1 transition-all duration-500 brightness-100 ease-in-out group-hover:brightness-75">
                      <img
                        src="https://i.vimeocdn.com/custom_asset/d3f1c74cd6c5cad8d89eebe38155c83d?q=80"
                        aria-hidden="true"
                        className="progressive-image object-center object-cover h-full w-full absolute rounded-standard"
                      />
                    </div>
                  </div>
                  <div className="p-8 pb-16 flex flex-col lg:pl-14 lg:pr-10 xl:pr-[104px] lg:py-14 lg:w-1/2 lg:max-w-[36.8rem] lg:pt-14 justify-between">
                    <svg
                      width="36px"
                      height="49px"
                      viewBox="0 0 36 49"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path d="M16.683 0.494847C17.437 -0.164949 18.563 -0.164949 19.317 0.494847L35.317 14.4948C35.751 14.8746 36 15.4233 36 16V36C36 38.2091 34.2091 40 32 40H24C22.8954 40 22 39.1046 22 38V28H14V38C14 39.1046 13.1046 40 12 40H4C1.79086 40 0 38.2091 0 36V16C0 15.4233 0.248961 14.8746 0.682991 14.4948L16.683 0.494847Z"></path>
                      </g>
                    </svg>
                    <p className="text-card-sub-content text-body-1">
                      Create your own website to build a relationship with
                      viewers and sell content.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            {/* <li className="feature-card-container" style="z-index:2;height:928px;margin-top:-464px">
        <div className="flex flex-1 items-top px-4 md:px-14 md:h-[29rem] md:sticky" style="top:calc(50vh - 302px + 86px);margin-top:70px">
          <div style="--aspect-ratio:4/3" className="no-underline w-full h-full font-sans overflow-hidden text-card-content group rounded-standard lg:flex-row-reverse bg-card-background-light">
            <div className="pt-global-nav -mt-global-nav"></div>
            <div className="flex justify-end lg:justify-end flex-1">
              <div className="asset-image-container relative asset-block w-full justify-end rounded-standard overflow-hidden flex aspect-[var(--aspect-ratio)] lg:justify-end flex-1 transition-all duration-500 brightness-100 ease-in-out group-hover:brightness-75">
                <img src="https://i.vimeocdn.com/custom_asset/11e31eea5c20fe3dea4db10843435539?q=80" aria-hidden="true" className="progressive-image object-center object-cover h-full w-full absolute rounded-standard">
              </div>
            </div>
            <div className="p-8 pb-16 flex flex-col lg:pl-14 lg:pr-10 xl:pr-[104px] lg:py-14 lg:w-1/2 lg:max-w-[36.8rem] lg:pt-14 justify-between">
              <svg width="40px" height="32px" viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4H36V28H4V4ZM0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V28C40 30.2091 38.2091 32 36 32H4C1.79086 32 0 30.2091 0 28V4ZM21 8C20.4477 8 20 8.44771 20 9V19C20 19.5523 20.4477 20 21 20H31C31.5523 20 32 19.5523 32 19V9C32 8.44772 31.5523 8 31 8H21Z"></path>
                </g>
              </svg>
              <p className="text-card-sub-content text-body-1">Sell on-demand content globally and accept payment in over 100 currencies.</p>
            </div>
          </div>
        </div>
      </li> */}
          </ul>
        </div>
      </div>

      {/* <div className="flex flex-col gap-4 relative" style={{ height: `calc(50vh + 1424px - 302px)`, marginBottom: `calc(-50vh + 302px)` }}>
        {cards.map((card, i) => (
          <CardTypeTwo key={`p_${i}`} i={i} {...card} />
        ))}
      </div> */}
    </main>
  );
}
