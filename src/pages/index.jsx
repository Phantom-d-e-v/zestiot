import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-fit relative w-full flex items-center flex-col justify-end min-h-[calc(90vh-2rem)]  ">
        <div className="  h-fit ">
          <h1 className=" m-auto mb-5  mt-10 px-3 text-4xl md:text-5xl lg:text-6xl text-primary-100  font-semibold lg:max-w-4xl md:max-w-3xl text-center">
            Connecting People, Places, Assets and Operations.
          </h1>
          <p className=" mb-24 px-3  z-10 text-base md:text-lg lg:text-2xl  text-[#6F7073]   max-w-4xl text-center">
            Our solutions are designed to transform the way businesses operate
            in three key industries:{" "}
            <b>aviation, oil & gas, and manufacturing.</b>
          </p>
        </div>

        {/* import video here class absolute  */}

        <Image
          src="/temp.jpg "
          className="-z-10 absolute"
          alt="hero"
          fill
        ></Image>

        {/* <video  /> */}
      </section>

      <section className="-mt-10 lg:max-w-7xl m-auto px-2 grid-cols-2 md:max-w-2xl max-w-sm lg:grid-cols-4 grid gap-7 -bottom-4">
        <div>
          <div className="w-full rounded-md px-7 py-3 bg-primary-100 aspect-[3/2]  flex justify-center items-center  ">
            <svg
              className=" aspect-[3/2]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 143 70"
              fill="none"
            >
              <path
                d="M15.6179 60.4375C15.614 60.4398 15.6098 60.4414 15.6055 60.4441C14.0493 61.2529 13.3735 63.1216 14.054 64.7388C14.7364 66.3615 16.5523 67.1849 18.2224 66.6292L65.3088 50.963L56.5044 65.3409C55.8649 66.3854 56.0001 67.7283 56.8352 68.6244C57.6703 69.5201 59.0004 69.7497 60.0878 69.1843L69.3211 64.3864C69.5862 64.2488 69.827 64.0684 70.0337 63.852L97.3871 35.279L131.145 17.6648C143.93 10.7728 142.449 5.47486 141.69 4.0157C141.103 2.88424 139.788 1.36712 136.868 0.564889C133.906 -0.248931 129.904 -0.184011 124.637 0.763514C122.878 1.07961 121.907 1.05295 120.879 1.02474C117.266 0.925814 114.815 1.16811 102.645 7.49202L36.0812 42.0833L10.2677 28.6865C9.29433 28.1815 8.1362 28.1818 7.16279 28.6881L2.81314 30.9487C1.91778 31.4139 1.27824 32.256 1.07034 33.2433C0.862442 34.231 1.10821 35.2597 1.73964 36.0461L19.6561 58.362L15.6179 60.4375Z"
                fill="#FAFAFA"
              />
            </svg>
          </div>
          <h2 className=" w-full mt-3 mb-6  md:mt-5 md:mb-8  font-bold text-center text-[#6F7073] text-2xl md:text-3xl  ">
            Aviation
          </h2>
          <p className=" text-[#6F7073] text-justify text-sm md:text-base">
            GroundRadar enhances airline and airport operations with IoT,
            Camera-AI, and real-time predictive decision-making, ensuring a
            strong ROI.
          </p>
        </div>
        <div>
          <div className="w-full rounded-md px-7 py-3 bg-[#3A3A3A] aspect-[3/2]  flex justify-center items-center  ">
            <svg
              className=" aspect-[3/2]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M42.8389 65.9328L52.588 59.8905L49.0053 54.1123C50.8416 52.2607 52.3918 50.1078 53.5794 47.7184L60.2126 49.2704L62.8205 38.0954L56.1901 36.5434C56.1844 33.9047 55.7589 31.2997 54.9182 28.7984L60.7135 25.2048L54.666 15.461L48.8731 19.0522C47.0064 17.1964 44.8605 15.6501 42.4962 14.481L44.0506 7.84637L32.8793 5.22949L31.3316 11.8442C28.6284 11.8499 26.0163 12.2968 23.5695 13.1086L19.9868 7.33693L10.241 13.3839L13.8209 19.1527C11.9845 21.0056 10.433 23.1567 9.24536 25.5461L2.61973 23.9917L0 35.1667L6.63463 36.7239C6.63747 39.3626 7.06446 41.9676 7.90658 44.4646L2.10981 48.0573L8.15301 57.8092L13.9526 54.2156C15.817 56.0695 17.9599 57.6163 20.3223 58.7897L18.7679 65.4252L29.9402 68.0416L31.4918 61.4198C34.1935 61.4141 36.807 60.9658 39.2538 60.1535L42.8389 65.9328ZM18.4466 33.5976C19.8669 27.5417 25.1903 23.3107 31.3946 23.3107C32.4159 23.3107 33.4452 23.4282 34.4522 23.6637C37.9174 24.4731 40.8542 26.5896 42.7294 29.6074C44.606 32.6271 45.1918 36.2012 44.379 39.6664C42.9588 45.7209 37.6326 49.9524 31.4282 49.9524C30.4075 49.9524 29.3805 49.832 28.3706 49.597C24.9083 48.7918 21.9715 46.6739 20.0935 43.6542C18.2173 40.6327 17.6344 37.0599 18.4466 33.5976ZM81.6164 73.3389L84.1428 71.7731L79.6132 64.4566L77.0778 66.0256C76.3608 65.3925 75.585 64.8319 74.7448 64.3447L75.4258 61.4487L67.0472 59.482L66.3752 62.3534C65.3947 62.4126 64.4422 62.569 63.5124 62.8159L61.9603 60.3175L54.6495 64.8556L56.1792 67.3147C55.5432 68.0426 54.9973 68.8491 54.504 69.7007L51.6473 69.0373L49.6811 77.4125L52.5719 78.0878C52.6335 79.0513 52.7846 79.9929 53.0344 80.9279L50.5166 82.4913L55.0542 89.8022L57.5696 88.2392C58.298 88.8809 59.0766 89.4377 59.9112 89.9197L59.233 92.8105L67.6116 94.7719L68.2808 91.9034C69.2613 91.8413 70.2138 91.6906 71.1436 91.4437L72.6952 93.945L80.0065 89.4102L78.4768 86.945C79.1184 86.2171 79.6644 85.4105 80.1516 84.5589L83.0087 85.2252L84.9749 76.8471L82.0813 76.1718C82.0168 75.2018 81.8657 74.2601 81.6164 73.3389ZM73.4174 78.5575C72.6412 81.8629 69.2745 83.9974 65.9046 83.2126C64.2853 82.8287 62.9015 81.8402 62.0248 80.4227C61.1424 79.011 60.8732 77.3357 61.2485 75.7055C61.9153 72.8626 64.4171 70.8708 67.3211 70.8708C67.8031 70.8708 68.2789 70.9329 68.7499 71.039C72.1123 71.8404 74.2017 75.2018 73.4174 78.5575ZM94.762 45.3347L98.6887 46.2522L100 40.6682L96.0841 39.7522C96.1121 38.1636 95.8515 36.5898 95.3164 35.098L98.7399 32.9721L95.7117 28.0994L92.291 30.2216C91.1878 29.0856 89.8931 28.153 88.4591 27.4706L89.378 23.5562L83.7925 22.2453L82.8793 26.1512C82.8116 26.1512 82.7391 26.1403 82.6694 26.1403C81.1088 26.1403 79.6047 26.4067 78.2014 26.9009L76.103 23.5073L71.2266 26.5266L73.3492 29.9581C72.2293 31.0504 71.2934 32.3318 70.6072 33.7872L66.6771 32.8683L65.372 38.4537L69.2821 39.3683C69.2542 40.9578 69.5143 42.5292 70.0494 44.0239L66.6321 46.147L69.6603 51.0168L73.0748 48.898C74.1813 50.0334 75.4727 50.9679 76.9067 51.6499L75.9935 55.5662L81.5733 56.8775L82.4917 52.9669C82.5618 52.9669 82.632 52.9778 82.6992 52.9778C84.2565 52.9778 85.7583 52.7114 87.1644 52.2186L89.268 55.6164L94.1388 52.5854L92.0157 49.161C93.1374 48.0738 94.0701 46.7882 94.762 45.3347ZM75.2045 37.8106C76.0281 34.3151 79.0924 31.8769 82.6727 31.8769C83.2637 31.8769 83.8575 31.9456 84.4375 32.0802C86.4374 32.5508 88.1292 33.7663 89.2102 35.5084C90.2916 37.2495 90.6333 39.311 90.1627 41.3108C89.2102 45.3755 85.0588 48.0084 80.9306 47.0294C78.936 46.5616 77.239 45.3432 76.1575 43.6021C75.0756 41.861 74.7396 39.8038 75.2045 37.8106Z"
                fill="#FAFAFA"
              />
            </svg>
          </div>
          <h2 className=" w-full mt-3 mb-6  md:mt-5 md:mb-8  font-bold text-center text-[#6F7073] text-2xl md:text-3xl">
            Manufacturing
          </h2>
          <p className=" text-[#6F7073] text-justify text-sm md:text-base">
            CameraAI enhances operations with connected systems for safety,
            security, and automation, and offers quality control through machine
            vision.
          </p>
        </div>
        <div>
          <div className="w-full rounded-md px-7 py-3 bg-primary-100 aspect-[3/2]  flex justify-center items-center  ">
            <svg
              className=" aspect-[3/2]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 104 103"
              fill="none"
            >
              <g clip-path="url(#clip0_383_243)">
                <path
                  d="M82.7273 59.9331C81.5053 60.4267 80.708 61.6069 80.708 62.9116C80.708 62.9588 80.6733 65.1647 80.032 67.8341C79.7287 62.5811 78.2857 56.6886 74.091 52.4613C73.2633 51.6288 72.0413 51.2983 70.9147 51.6116C69.775 51.9206 68.8997 52.8133 68.618 53.9463C66.72 61.6069 63.9163 65.8471 61.4377 69.5937C58.8117 73.5678 56.333 77.3144 56.333 83.3957C56.333 94.2064 65.082 103 75.833 103C86.584 103 95.333 94.2064 95.333 83.3957C95.333 74.0484 90.64 65.0574 86.2763 60.6584C85.349 59.7271 83.945 59.4439 82.7273 59.9331Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M54.1843 64.8986C56.481 61.4223 58.652 58.1392 60.1947 51.9077C61.226 47.7491 64.4587 44.466 68.623 43.3372C69.611 43.0626 70.69 42.9167 71.7733 42.9167C72.4103 42.9167 73.043 43.0068 73.667 43.1055V15.0208H74.7503C76.5443 15.0208 78.0003 13.5788 78.0003 11.8021C78.0003 10.0253 76.5443 8.58333 74.7503 8.58333H70.417H39.0003V7.51042C39.0003 3.36896 35.5987 0 31.417 0H29.2503C25.0687 0 21.667 3.36896 21.667 7.51042V8.58333H16.2503H11.917C10.123 8.58333 8.66699 10.0253 8.66699 11.8021C8.66699 13.5788 10.123 15.0208 11.917 15.0208H13.0003V46.1354H11.917C10.123 46.1354 8.66699 47.5774 8.66699 49.3542C8.66699 51.1309 10.123 52.5729 11.917 52.5729H13.0003V83.6875H11.917C10.123 83.6875 8.66699 85.1295 8.66699 86.9062C8.66699 88.683 10.123 90.125 11.917 90.125H16.2503H48.512C47.979 87.962 47.667 85.7175 47.667 83.3957C47.667 74.7522 51.281 69.289 54.1843 64.8986ZM32.5003 8.58333H28.167V7.51042C28.167 6.91817 28.6523 6.4375 29.2503 6.4375H31.417C32.015 6.4375 32.5003 6.91817 32.5003 7.51042V8.58333Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_383_243">
                  <rect width="104" height="103" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className=" w-full mt-3 mb-6  md:mt-5 md:mb-8  font-bold text-center text-[#6F7073] text-2xl md:text-3xl">
            Oil & Gas
          </h2>
          <p className=" text-[#6F7073] text-justify  text-sm md:text-base">
            Camera AI connects with PLC and automation systems to monitor
            safety, SOP compliance, quality, and automation for enhanced
            operational safety and quality.
          </p>
        </div>
        <div>
          <div className="w-full rounded-md px-7 py-3 bg-[#3A3A3A] aspect-[3/2]  flex justify-center items-center  ">
            <svg
              className=" aspect-[3/2]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 90 91"
              fill="none"
            >
              <g clip-path="url(#clip0_383_248)">
                <path
                  d="M52.9412 16.0074H41.3418L44.1999 10.2281L61.6096 5.19879L60.1551 0.0517578L40.506 5.7282L35.4229 16.0074H0V29.3898H52.9412V16.0074Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M37.0586 72.2129H84.7057V77.5658H37.0586V72.2129Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M26.4708 66.8608C26.4708 53.656 35.1135 42.4541 46.9795 38.7334L47.2679 34.7432H5.76465L10.8182 90.949H27.8953C26.9912 89.3731 26.4708 87.5455 26.4708 85.5961V66.8608Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M31.7646 66.8607H90C90 53.5784 79.3129 42.7725 66.1764 42.7725H55.5882C42.4519 42.7725 31.7646 53.5784 31.7646 66.8607Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M31.7646 85.5954C31.7646 88.5472 34.1396 90.9484 37.0588 90.9484H84.7004C87.6195 90.9484 89.9945 88.5472 89.9945 85.5954V82.9189H31.7646V85.5954Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_383_248">
                  <rect width="90" height="91" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className=" w-full mt-3 mb-6  md:mt-5 md:mb-8  font-bold text-center text-[#6F7073] text-2xl md:text-3xl">
            Food & Beverages
          </h2>
          <p className=" text-[#6F7073] text-justify text-sm md:text-base">
            ZestIoT excels in quality inspections for the food and beverage
            industry, ensuring product quality.
          </p>
        </div>
      </section>

      <section className=" mt-40  text-[#3A3A3A] max-w-7xl m-auto flex flex-col md:flex-row gap-10 p-2 px-5 ">
        <div className=" w-full  font-semibold    lg:text-5xl md:text-4xl text-3xl">
          We harness the potential of our{" "}
          <span className=" font-extrabold">
            Digitalised IoT & CameraAI connected platform
          </span>{" "}
          to empower our customers and ensure
        </div>
        <div className=" text-[#6F7073] w-full font-medium lg:text-3xl md:text2xl text-justify text-lg">
          By leveraging IoT technology, businesses can implement predictive
          maintenance programs that can alert them to potential problems before
          they occur, thereby avoiding costly downtime and improving operational
          efficiency.
        </div>
      </section>

      <section className="w-full py-14 mt-40  bg-primary-100  ">
        <div className="flex w-full max-w-6xl m-auto justify-around items-center">
          <div className=" flex flex-col gap-2 text-white justify-center items-center">
            <span className=" font-extrabold  md:text-4xl text-3xl lg:text-6xl">
              6500+
            </span>
            <span className=" md:text-lg text-base lg:text-xl">Cameras</span>
          </div>
          <div className=" flex flex-col gap-2 text-white justify-center items-center">
            <span className=" font-extrabold  md:text-4xl text-3xl lg:text-6xl">
              2000+
            </span>
            <span className=" md:text-lg text-base lg:text-xl">
              Trees saved in a year
            </span>
          </div>
          <div className=" flex flex-col gap-2 text-white justify-center items-center">
            <span className=" font-extrabold  md:text-4xl text-3xl lg:text-6xl">
              9000+
            </span>
            <span className=" md:text-lg text-base lg:text-xl">Manpower</span>
          </div>
        </div>
      </section>

      <section className=" pt-28 w-full pb-28 bg-[#FAFAFA]">
        <div className=" px-3 max-w-7xl m-auto">
          <h2 className=" text-6xl md:text-8xl font-extrabold pb-20 text-primary-100">
            Why ZestIOT.
          </h2>
          <div className="md:flex ">
            <div className="w-1/3"></div>
            <div className="md:w-2/3 w-full">
              <p className="text-[#1B1B1B] mb-20 text-justify lg:text-4xl md:text-3xl font-bold text-2xl">
                We are committed to providing innovative, reliable, and customer
                - focused solutions that demonstrate excellence and make an
                impact for our clients. Our team of experts is dedicated to
                delivering the best possible solutions and providing ongoing
                support to help our clients succeed.
              </p>
              <div className="flex gap-10 mb-20">
                <div className="flex flex-col gap-3">
                  <div className=" w-16 h-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 90 61"
                      fill="none"
                    >
                      <path
                        d="M47.1197 19.4243C42.6988 20.0492 38.8374 24.1997 38.8001 24.237C38.7446 24.2946 38.6819 24.3447 38.6136 24.3863C32.607 28.2849 29.2213 25.319 29.0814 25.1417C25.2387 21.6814 28.7643 15.8801 28.9136 15.6376C30.4876 13.0214 32.3937 10.62 34.5843 8.49316H18.2715L11.1924 31.8478C11.2684 31.89 11.3376 31.9434 11.3976 32.0064C22.3847 44.4298 36.972 55.4543 42.7268 59.6141C43.3256 60.057 44.0704 60.2558 44.8104 60.1705C45.5503 60.0851 46.2302 59.7218 46.7125 59.1542C47.1948 58.5866 47.4435 57.8569 47.4083 57.1129C47.3731 56.3689 47.0566 55.666 46.5228 55.1465L38.6042 47.2279C38.4305 47.0532 38.333 46.8168 38.333 46.5704C38.333 46.324 38.4305 46.0876 38.6042 45.9128C38.691 45.8254 38.7941 45.756 38.9078 45.7087C39.0214 45.6613 39.1433 45.6369 39.2665 45.6369C39.3896 45.6369 39.5115 45.6613 39.6252 45.7087C39.7388 45.756 39.842 45.8254 39.9287 45.9128L44.1444 50.1286L47.8752 53.8594L49.7406 55.7714C50.4098 56.4232 51.3076 56.7869 52.2417 56.7846C53.1758 56.7823 54.0719 56.4142 54.7379 55.7592C55.4039 55.1042 55.7868 54.2144 55.8046 53.2804C55.8224 52.3465 55.4737 51.4427 54.8331 50.7628L47.5674 43.18L46.187 41.753C46.0996 41.6663 46.0302 41.5632 45.9829 41.4495C45.9355 41.3358 45.9112 41.2139 45.9112 41.0908C45.9112 40.9677 45.9355 40.8458 45.9829 40.7321C46.0302 40.6185 46.0996 40.5153 46.187 40.4286C46.2738 40.3412 46.3769 40.2718 46.4906 40.2244C46.6042 40.1771 46.7261 40.1527 46.8493 40.1527C46.9724 40.1527 47.0943 40.1771 47.208 40.2244C47.3216 40.2718 47.4248 40.3412 47.5115 40.4286L58.1162 51.4344C58.6297 51.9426 59.2797 52.2908 59.9874 52.4366C60.695 52.5825 61.4297 52.5198 62.1024 52.256C62.775 51.9923 63.3566 51.539 63.7765 50.951C64.1964 50.3631 64.4366 49.6659 64.4678 48.9441C64.4833 48.4356 64.3917 47.9295 64.1988 47.4587C64.006 46.9879 63.7163 46.5629 63.3486 46.2113L56.9876 40.0555L52.5573 35.7558C52.4587 35.6735 52.3782 35.5717 52.3207 35.4569C52.2632 35.342 52.2301 35.2165 52.2234 35.0882C52.2167 34.96 52.2366 34.8317 52.2818 34.7115C52.327 34.5912 52.3965 34.4816 52.486 34.3895C52.5756 34.2974 52.6832 34.2248 52.8021 34.1762C52.921 34.1276 53.0486 34.1041 53.177 34.1072C53.3054 34.1102 53.4318 34.1398 53.5483 34.194C53.6647 34.2481 53.7687 34.3258 53.8538 34.422L66.4451 46.6124C66.7754 46.9515 67.1708 47.2203 67.6077 47.4026C68.0446 47.5849 68.5139 47.6768 68.9872 47.6728C69.4606 47.6688 69.9283 47.5691 70.362 47.3796C70.7958 47.19 71.1867 46.9146 71.5112 46.57C71.8357 46.2253 72.0871 45.8185 72.2502 45.3741C72.4132 44.9297 72.4847 44.4569 72.4601 43.9841C72.4356 43.5114 72.3156 43.0485 72.1073 42.6234C71.8991 42.1983 71.607 41.8197 71.2485 41.5105L47.1197 19.4243Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M15.4268 3.02808C10.5848 0.851205 5.30501 -0.176654 0 0.0248057V36.605H5.69876C6.30697 36.6065 6.89909 36.4097 7.38547 36.0445C7.87184 35.6793 8.22597 35.1656 8.39424 34.5811L16.9564 6.38578C17.1521 5.73579 17.1048 5.03682 16.8234 4.41909C16.542 3.80135 16.0456 3.30698 15.4268 3.02808Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M50.1418 4.83706C48.1304 4.00909 45.8829 3.95922 43.8368 4.69715C40.2646 6.00292 35.0508 9.13677 30.4713 16.617C30.4713 16.6729 27.6079 21.2804 30.3034 23.7614C30.3967 23.8454 32.803 25.86 37.4665 22.8847C38.138 22.1852 42.3445 17.9694 47.3158 17.5124C47.4443 17.5016 47.5736 17.5176 47.6956 17.5593C47.8176 17.601 47.9296 17.6676 48.0246 17.7549L72.4705 40.1395C72.5824 40.2421 72.685 40.354 72.7876 40.4659C75.5857 40.0369 77.4511 37.4813 77.992 36.5486L69.1315 12.4012L50.1418 4.83706Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M87.673 4.47357C82.3531 4.43824 77.0765 5.43274 72.1344 7.40222C71.4698 7.68705 70.9412 8.2181 70.6595 8.88406C70.3778 9.55001 70.3649 10.2992 70.6234 10.9744L81.0043 39.2257C81.2069 39.7707 81.5707 40.2411 82.0472 40.5743C82.5237 40.9075 83.0903 41.0878 83.6718 41.0911H89.5384V4.5202C89.0721 4.49222 88.4285 4.47357 87.673 4.47357Z"
                        fill="#0021FF"
                      />
                    </svg>
                  </div>
                  <span className=" text-primary-100 font-bold lg:text-2xl md:text-xl text-lg">
                    TRUST & RELIABILITY
                  </span>
                  <p className=" text-justify text-[#1B1B1B] font-semibold lg:text-xl md:text-lg text-base">
                    You can count on us to deliver high-quality, reliable
                    solutions that meet your needs. We take pride in our work
                    and stand behind everything we do.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className=" w-16 h-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 88 89"
                      fill="none"
                    >
                      <path
                        d="M46.583 0.992188C40.895 0.992188 36.0977 5.78949 36.0977 11.4775C36.0977 17.1656 40.895 21.9629 46.583 21.9629C52.271 21.9629 56.8964 17.1656 56.8964 11.4775C56.8964 5.78949 52.271 0.992188 46.583 0.992188Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M58.029 21.9629C55.1954 25.1049 51.1369 27.1196 46.5825 27.1196C42.0281 27.1196 37.7977 25.1049 34.964 21.9629C32.4902 24.7061 30.9404 28.2998 30.9404 32.2763V34.8547C30.9404 36.2798 32.0936 37.4331 33.5188 37.4331H59.4743C60.8995 37.4331 62.0527 36.2798 62.0527 34.8547V32.2763C62.0527 28.2998 60.5029 24.7061 58.029 21.9629Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M24.9107 80.1302L11.7712 53.787C10.5025 51.2432 7.41461 50.2059 4.86771 51.4677L1.4335 53.1689C0.154802 53.803 -0.365511 55.3571 0.27272 56.6336L15.7429 87.5739C16.3791 88.8499 17.9266 89.3576 19.195 88.7321L22.585 87.0526C25.1419 85.7861 26.1841 82.6836 24.9107 80.1302Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M85.8948 43.5695C83.7804 42.0225 80.8411 42.3319 79.088 44.2399L64.9929 61.5665C64.0131 62.5978 62.1567 63.2166 61.1769 63.2166H49.1616C47.7175 63.2166 46.5832 62.0823 46.5832 60.6383C46.5832 59.1942 47.7175 58.0599 49.1616 58.0599C52.6149 58.0599 56.4381 58.0599 59.4751 58.0599C62.3112 58.0599 64.6318 55.7394 64.6318 52.9032C64.6318 50.067 62.3112 47.7464 59.4751 47.7464C47.366 47.7464 58.9164 47.7464 45.9644 47.7464C44.6794 47.7464 44.0386 46.9315 43.0251 46.0445C39.0357 42.4546 33.0642 40.725 27.0188 42.1263C23.6621 42.9043 21.3985 44.2603 19.1027 46.0786L19.0262 46.0165L15.2969 49.2986L29.953 78.6868H34.2929H59.4751C64.3224 78.6868 68.9636 76.3663 71.8514 72.4987L86.9776 50.8405C88.6793 48.5713 88.2152 45.2714 85.8948 43.5695Z"
                        fill="#0021FF"
                      />
                    </svg>
                  </div>
                  <span className=" text-primary-100 font-bold lg:text-2xl md:text-xl text-lg">
                    EFFICIENT INNOVATION
                  </span>
                  <p className=" text-justify text-[#1B1B1B] font-semibold lg:text-xl md:text-lg text-base">
                    We&rsquo;re constantly pushing the boundaries of
                    what&rsquo;s possible with IOT technology. Our solutions are
                    designed to help you stay ahead of the curve and achieve
                    your business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex  flex-row-reverse  ">
            <div className="w-1/3"></div>
            <div className="md:w-2/3 w-full">
              <div className="flex gap-10 mb-20">
                <div className="flex flex-col gap-3">
                  <div className=" w-16 h-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 82 82"
                      fill="none"
                    >
                      <path
                        d="M22.3137 18.9169L15.5195 12.1227C14.5812 11.1844 13.0608 11.1844 12.1225 12.1227C11.1841 13.0611 11.1841 14.5814 12.1225 15.5198L18.9166 22.3139C19.855 23.2523 21.3753 23.2523 22.3137 22.3139C23.252 21.3756 23.252 19.8552 22.3137 18.9169Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M12.1719 38.5977H2.40234C1.07449 38.5977 0 39.6721 0 41C0 42.3279 1.07449 43.4023 2.40234 43.4023H12.1719C13.4997 43.4023 14.5742 42.3279 14.5742 41C14.5742 39.6721 13.4997 38.5977 12.1719 38.5977Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M79.5977 38.5977H69.8281C68.5003 38.5977 67.4258 39.6721 67.4258 41C67.4258 42.3279 68.5003 43.4023 69.8281 43.4023H79.5977C80.9255 43.4023 82 42.3279 82 41C82 39.6721 80.9255 38.5977 79.5977 38.5977Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M69.8777 12.1227C68.9393 11.1844 67.4189 11.1844 66.4806 12.1227L59.6864 18.9169C58.7481 19.8552 58.7481 21.3756 59.6864 22.3139C60.6248 23.2523 62.1452 23.2523 63.0835 22.3139L69.8777 15.5198C70.816 14.5814 70.816 13.0612 69.8777 12.1227Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M41 0C39.6721 0 38.5977 1.07449 38.5977 2.40234V12.1719C38.5977 13.4997 39.6721 14.5742 41 14.5742C42.3279 14.5742 43.4023 13.4997 43.4023 12.1719V2.40234C43.4023 1.07449 42.3279 0 41 0Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M54.4534 24.0394C49.2164 19.9074 42.4416 18.4181 35.8112 20.0036C28.1237 21.7814 21.9258 27.8831 20.0518 35.5228C18.178 43.2101 20.3401 50.9937 25.8653 56.423C27.8354 58.3931 28.9885 61.4839 28.9885 64.6552V65.1837C28.9885 66.5289 30.0454 67.586 31.3909 67.586H50.6096C51.9551 67.586 53.0119 66.5289 53.0119 65.1837V64.6552C53.0119 61.532 54.2131 58.3449 56.3272 56.2788C60.3633 52.1949 62.6213 46.7657 62.6213 41.0001C62.6213 34.3696 59.6424 28.1714 54.4534 24.0394ZM41.0002 33.7931C37.3759 33.7931 34.7375 36.1972 34.0466 38.9802C33.7322 40.2459 32.4586 41.0538 31.1351 40.735C29.8495 40.416 29.0635 39.1115 29.3827 37.826C30.5729 33.0213 35.0858 28.9884 41.0002 28.9884C42.3281 28.9884 43.4026 30.0629 43.4026 31.3907C43.4026 32.7186 42.3281 33.7931 41.0002 33.7931Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M31.3906 72.3906V74.793C31.3906 78.7671 34.6235 82 38.5977 82H43.4023C47.3765 82 50.6094 78.7671 50.6094 74.793V72.3906H31.3906Z"
                        fill="#0021FF"
                      />
                    </svg>
                  </div>
                  <span className=" text-primary-100 font-bold lg:text-2xl md:text-xl text-lg">
                    TRUST & RELIABILITY
                  </span>
                  <p className=" text-justify text-[#1B1B1B] font-semibold lg:text-xl md:text-lg text-base">
                    You can count on us to deliver high-quality, reliable
                    solutions that meet your needs. We take pride in our work
                    and stand behind everything we do.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className=" w-16 h-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 86 86"
                      fill="none"
                    >
                      <path
                        d="M15.1765 53.1177C17.9706 53.1177 20.2353 50.853 20.2353 48.0589H34.5686V33.7255C31.7745 33.7255 29.5098 31.4609 29.5098 28.6667C29.5098 25.8725 31.7745 23.6079 34.5686 23.6079V15.1765C34.5686 14.2452 33.8137 13.4902 32.8824 13.4902H3.37255C1.50989 13.4902 0 15.0001 0 16.8628V48.0589H10.1176C10.1176 50.853 12.3823 53.1177 15.1765 53.1177Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M39.6274 70.8238C39.6274 68.0296 37.3628 65.765 34.5686 65.765V51.4316H22.903C21.6012 54.4062 18.6266 56.4905 15.1765 56.4905C11.7264 56.4905 8.75176 54.4062 7.44996 51.4316H0V82.6277C0 84.4911 1.50922 86.0003 3.37255 86.0003H34.5686V75.8826C37.3628 75.8826 39.6274 73.618 39.6274 70.8238Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M70.8238 51.4319H62.3924C62.3924 48.6377 60.1277 46.373 57.3336 46.373C54.5394 46.373 52.2747 48.6377 52.2747 51.4319H37.9414V63.0967C40.9168 64.4002 43.0002 67.3732 43.0002 70.824C43.0002 74.2748 40.9168 77.2479 37.9414 78.5514V86.0005H69.1375C71.0001 86.0005 72.51 84.4906 72.51 82.6279V53.1181C72.51 52.1868 71.7551 51.4319 70.8238 51.4319Z"
                        fill="#0021FF"
                      />
                      <path
                        d="M82.6279 0H53.1181C52.1868 0 51.4319 0.754945 51.4319 1.68627V10.1176C48.6377 10.1176 46.373 12.3823 46.373 15.1765C46.373 17.9706 48.6377 20.2353 51.4319 20.2353V34.5686H65.7652C65.7652 31.7745 68.0299 29.5098 70.824 29.5098C73.6182 29.5098 75.8828 31.7745 75.8828 34.5686H84.3142C85.2456 34.5686 86.0005 33.8137 86.0005 32.8824V3.37255C86.0005 1.50989 84.4906 0 82.6279 0Z"
                        fill="#0021FF"
                      />
                    </svg>
                  </div>
                  <span className=" text-primary-100 font-bold lg:text-2xl md:text-xl text-lg">
                    ADAPTABILITY
                  </span>
                  <p className=" text-justify text-[#1B1B1B] font-semibold lg:text-xl md:text-lg text-base">
                    We understand that every business has unique needs and
                    challenges. That&rsquo;s why we work closely with our
                    clients to develop solutions that are tailored to their
                    specific challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-32">
        <div className=" px-3 max-w-7xl m-auto">
          <h2 className=" text-5xl md:text-7xl font-extrabold pb-5 text-primary-100">
            Awards &<br /> Recognition.
          </h2>
          <p className=" lg:text-4xl md:text-3xl text-2xl mt-10 mb-28 ">
            Our commitment to excellence has been recognized by industry experts
            and satisﬁed customers alike. Here are just a few examples of the
            awards we’ve won:
          </p>
        </div>
      </section>
      <section>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full" src="/awards.png" alt="awards" />
      </section>
      <section className=" mt-40 mb-40">
        <div className=" px-3 max-w-7xl m-auto">
          <h2 className=" w-full text-center text-5xl md:text-7xl font-extrabold pb-5 text-primary-100">
            Proud Customers.
          </h2>
          <p className=" text-center w-full lg:text-4xl md:text-3xl text-2xl mt-10 mb-28 ">
            Don’t just take our word for it - hear from our satisfied customers
            who have experienced the trans formative power of our IoT solutions
            ﬁrsthand. Take a look at our{" "}
            <span className=" text-primary-100">case studies</span> to read
            about some of our success stories and see how our IoT solutions have
            made a real impact for our customers.
          </p>
        </div>
      </section>
      <section>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full" src="/custom.png" alt="awards" />
      </section>

      <section className=" flex p-3 py-16 items-center max-w-6xl gap-3 flex-col md:flex-row m-auto">
        <div className=" w-full  md:w-1/2">
          <h2 className=" text-5xl md:text-7xl font-extrabold pb-5 text-primary-100">
            Get In Touch.
          </h2>
          <p className="   font-medium lg:text-4xl md:text-3xl text-2xl mt-10 mb-28 ">
            Join the ranks of satisfied customers who have experienced the
            transformative power of our IOT solutions. Contact us today to learn
            more and ﬁll out our get in touch form.
          </p>
        </div>
        <div className=" w-full md:w-1/2">
          <form
            className="flex flex-col gap-3"
            action="mailto:someone@example.com"
            method="post"
            enctype="text/plain"
          >
            <input
              className=" px-4 w-full h-[50px] border outline-none border-secondary-200"
              type="text"
              placeholder="Name"
              name="name"
            />

            <input
              className=" px-4 w-full h-[50px] border outline-none border-secondary-200"
              type="text"
              placeholder="Email"
              name="mail"
            />
            <input
              className=" px-4 w-full h-[50px] border outline-none border-secondary-200"
              type="text"
              placeholder="Industry"
            />
            <textarea
              placeholder="I am interested in"
              className=" px-4 py-4 w-full h-[220px] resize-none border outline-none border-secondary-200"
              name="comment"
            ></textarea>

            <input
              className=" w-full h-[50px] bg-primary-100 hover:bg-primary-300 cursor-pointer text-white font-bold"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </section>
    </main>
  );
}
