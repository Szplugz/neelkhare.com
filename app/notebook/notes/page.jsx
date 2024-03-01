import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MobileHeader from "@/app/_components/MobileHeader";

const page = () => {
  // pls change this omg
  return (
    <>
      <div className="index-page flex md:flex-row w-full flex-col justify-center selection:bg-mangoHighlight">
        <MobileHeader></MobileHeader>
        <div className="index-content float flex-col sm:w-[50%] w-[80%] font-inter">
          <div className="index-contents mb-5 overflow-x-hidden">
            <div className="index-item mb-10 flex sm:flex-row flex-col sm:align-top sm:justify-between justify-start">
              <div className="index-item-contents sm:text-base text-sm text-lightMud flex flex-col sm:w-[65%]">
                <table className="index-item-list w-[100%]">
                  <tr className="index-entry">
                    <td className="hash text-lightMud w-20">ea5044fc</td>
                    <td className="text-mud ">
                      <a
                        href="/notes/caffeine"
                        className="transition hover:underline decoration-dotted hover:ease-in-out duration-700 decoration-lightMud"
                      >
                        on caffeine
                      </a>{" "}
                      {`->`}
                    </td>
                  </tr>
                  <tr className="w-[100%]">
                    <td className="hash text-lightMud w-[20%]">edd014ff</td>
                    <td className="text-mud w-[450px]">
                      <a
                        href="/notes/hub-ferriss"
                        className="transition hover:underline decoration-dotted hover:ease-in-out duration-700 decoration-lightMud"
                      >
                        huberman on ferriss
                      </a>{" "}
                      {`->`}
                    </td>
                  </tr>
                  <tr className="w-[100%]">
                    <td className="hash text-lightMud w-[20%]">36c1863</td>
                    <td className="text-mud w-[450px] flex justify-start">
                      <a
                        href="https://steel-plain-b28.notion.site/Proposing-a-Design-Technology-Symposium-at-the-University-of-Illinois-1983d619135a45c0bae4651aee51e135"
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:underline decoration-dotted hover:ease-in-out duration-700 decoration-lightMud mr-1"
                      >
                        proposing a design symposium
                      </a>
                      <ArrowOutwardIcon sx={{ fontSize: 15 }} />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          {/* <Navmobile /> */}
        </div>
      </div>
    </>
  );
};

export default page;
