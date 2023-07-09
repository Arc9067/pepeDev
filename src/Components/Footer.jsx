import React from "react";
import footerImg from "../assets/footerImg.png";

const Footer = () => {
  return (
    <footer className="py-8 w-full relative h-max">
      <div className="container grid grid-cols-1 justify-between items-center gap-10 lg:grid-cols-2">
        <article className="flex flex-col gap-5 order-2 md:order-1">
          <h1
            className="text-4xl md:text-6xl capitalize"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            follow us on social media
          </h1>

          <div className="flex items-center gap-5">
            <a href="https://twitter.com/PEPEDEV_ETH" className="etherscan">
              <svg
                width="40"
                height="48"
                viewBox="0 0 60 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.0588 5.6844C56.8883 6.64903 54.5506 7.29868 52.0997 7.59397C54.6047 6.09289 56.5192 3.7207 57.4297 0.890803C55.0871 2.27868 52.4934 3.2876 49.7324 3.82898C47.5275 1.47155 44.3728 0 40.8933 0C33.068 0 27.3196 7.29868 29.0864 14.8779C19.0218 14.371 10.0892 9.54783 4.11443 2.21962C0.940019 7.66287 2.47063 14.7893 7.86466 18.3968C5.88127 18.3328 4.016 17.7865 2.38204 16.881C2.24915 22.4915 6.27499 27.7429 12.1021 28.9142C10.3993 29.3768 8.52907 29.4851 6.62935 29.1209C8.16979 33.9342 12.6533 37.4334 17.9489 37.5318C12.8453 41.5281 6.43248 43.3147 0 42.5568C5.3645 45.9969 11.7281 48 18.5691 48C41.0704 48 53.7779 28.9978 53.0102 11.9545C55.3823 10.2516 57.4346 8.11566 59.0588 5.6844V5.6844Z"
                  fill="white"
                />
              </svg>
            </a>{" "}
            <a href="https://t.me/devpepeerc20" className="telegram">
              <svg
                width="38"
                height="38"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1007_10575)">
                  <path
                    d="M24 0C10.746 0 0 10.746 0 24C0 37.254 10.746 48 24 48C37.254 48 48 37.254 48 24C48 10.746 37.254 0 24 0ZM35.788 16.442L31.848 35.002C31.558 36.318 30.774 36.638 29.68 36.018L23.68 31.598L20.788 34.386C20.6463 34.5694 20.4645 34.718 20.2565 34.8203C20.0485 34.9225 19.8198 34.9758 19.588 34.976H19.578L20.004 28.868L31.124 18.824C31.604 18.398 31.016 18.156 30.378 18.582L16.64 27.234L10.72 25.386C9.44 24.98 9.404 24.106 10.99 23.478L34.122 14.562C35.198 14.17 36.134 14.818 35.786 16.444L35.788 16.442Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1007_10575">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>{" "}
            <a href="" className="">
              <svg
                width="32"
                height="48"
                viewBox="0 0 42 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1007_10577)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5064 2.73937C12.6501 4.22727 10.3133 5.48633 10.3138 5.53754C10.315 5.66971 17.169 9.1408 17.4122 9.13234C17.5229 9.12863 18.3257 8.75911 19.1961 8.31127L20.7788 7.49717L22.5075 8.38571L24.236 9.27441L27.0668 8.00241C31.3322 6.0857 31.7753 5.87566 31.7058 5.80509C31.6137 5.71147 30.0837 4.88957 25.9329 2.70431C23.9269 1.64815 21.9799 0.612621 21.6061 0.403082C21.2324 0.193543 20.8756 0.024982 20.8132 0.0282448C20.7509 0.0315076 18.3628 1.25153 15.5064 2.73937ZM2.97873 9.22663L0.0053643 10.7625V17.503C0.0053643 21.2104 0.0444075 24.2435 0.0922991 24.2435C0.140025 24.2435 1.60293 23.6094 3.34312 22.8343L6.50711 21.4251V14.3201L8.05325 15.1625C9.24467 15.811 10.4368 16.4582 11.6297 17.1041L13.6599 18.2033L14.5633 17.7948C15.1299 17.5382 15.6954 17.2791 16.2597 17.0175C16.6957 16.8144 17.7662 16.3323 18.6383 15.9459C19.5105 15.5593 20.3179 15.1706 20.4323 15.082C20.5844 14.9643 18.73 13.9396 13.5735 11.2916C9.68659 9.29559 6.38169 7.66883 6.22927 7.67662C6.07686 7.68442 4.61412 8.38184 2.97873 9.22663ZM32.2417 9.65793C30.2166 10.5721 28.5583 11.3566 28.5565 11.4014C28.5547 11.4461 29.6584 12.1023 31.0093 12.8595C32.3601 13.6169 33.4654 14.277 33.4654 14.3267C33.4654 14.3764 32.2701 14.9555 30.8093 15.6141C29.3482 16.2724 25.6554 17.9401 22.6028 19.3201L12.3745 23.9434C9.80156 25.1065 7.48236 26.1549 7.22073 26.2734C1.96538 28.6525 0.52089 29.3126 0.322521 29.4259C0.123047 29.54 0.0778652 30.2028 0.0423613 33.5294L0 37.497L2.65892 38.8518L5.31779 40.2065L9.00472 38.5426C11.0326 37.6275 12.6916 36.8308 12.6916 36.7721C12.6916 36.7136 12.3169 36.4695 11.8591 36.2293C11.4011 35.9892 10.4557 35.4576 9.75793 35.0479C9.06024 34.638 8.36454 34.262 8.2118 34.2121C8.05911 34.1624 7.93639 34.0754 7.93888 34.0187C7.94142 33.9621 9.56498 33.1909 11.5466 32.3048C15.3954 30.584 18.3409 29.2577 24.6643 26.3981C27.4919 25.1196 30.3199 23.842 33.1483 22.5651C35.634 21.4431 38.5241 20.1327 39.5707 19.6532L41.4736 18.7812L41.5159 14.7684L41.5585 10.7558L38.8617 9.37163C37.3784 8.6104 36.1105 7.98941 36.044 7.99168C35.9776 7.99378 34.2666 8.74351 32.2417 9.65793ZM40.7511 24.1344C40.3537 24.3286 39.5688 24.692 39.0068 24.942C38.4448 25.192 37.3784 25.6732 36.637 26.0115L35.289 26.6263L35.2583 30.1492C35.2413 32.0867 35.17 33.6633 35.0998 33.6531C34.9402 33.6294 32.4139 32.3337 29.8744 30.973C28.0416 29.991 27.9264 29.9519 27.4957 30.1652C27.2468 30.2886 25.7585 30.9561 24.1886 31.6487C22.6186 32.3413 21.283 32.9531 21.2202 33.0085C21.1575 33.0638 24.3172 34.7764 28.2419 36.8144L35.3774 40.5198L38.4256 38.9429C40.1019 38.0758 41.5274 37.2848 41.593 37.1853C41.7408 36.9616 41.7281 23.7508 41.5802 23.7687C41.5217 23.7757 41.1485 23.9403 40.7511 24.1344ZM23.8714 39.6406C23.3427 39.8679 22.8141 40.0956 22.2857 40.3236C20.6899 41.014 21.0026 41.0368 19.1041 40.0917C17.8396 39.4623 17.2945 39.2681 17.058 39.3624C16.8805 39.433 15.3532 40.1202 13.6637 40.8892C11.9744 41.6583 10.5335 42.2876 10.4619 42.2876C9.75306 42.2876 10.9314 42.9916 15.4785 45.2853L20.8112 47.975L23.0549 46.8673C24.289 46.2581 26.778 45.0381 28.5863 44.1562C30.3944 43.2741 31.8514 42.5296 31.8242 42.5015C31.7967 42.4735 30.2816 41.6955 28.4572 40.7727L25.1401 39.0949L23.8714 39.6406Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1007_10577">
                    <rect width="41.7408" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="" className="">
              <svg
                width="39"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1007_10617)">
                  <path
                    d="M10.0549 22.8265C10.0549 21.7187 10.965 20.8086 12.0709 20.8086H15.4712C16.5791 20.8086 17.5276 21.7187 17.5276 22.8668V35.6905C17.9231 35.5715 18.3973 35.4524 18.9522 35.3334C19.7029 35.1356 20.2578 34.4636 20.2578 33.6707V17.7596C20.2578 16.6518 21.1679 15.7014 22.3141 15.7014H25.7144C26.8223 15.7014 27.7708 16.6115 27.7708 17.7596V32.5244C27.7708 32.5244 28.6021 32.1673 29.4316 31.8121C30.0652 31.5356 30.4607 30.9424 30.4607 30.2281V12.616C30.4607 11.5081 31.3708 10.5577 32.4786 10.5577H35.8789C36.9868 10.5577 37.8968 11.4678 37.8968 12.616V27.1427C40.8229 25.0057 43.8296 22.4329 46.2028 19.3456C46.9151 18.4355 47.1128 17.247 46.7173 16.1392C42.3666 3.63228 28.6847 -3.0186 16.1874 1.33596C3.69011 5.69052 -2.95309 19.384 1.39571 31.8928C1.86995 33.3174 2.50355 34.6633 3.25427 35.9689C3.84755 36.998 4.95539 37.5913 6.14195 37.4723C6.77555 37.432 7.56659 37.3532 8.55347 37.2342C9.42323 37.1555 10.0568 36.4028 10.0568 35.5312L10.0549 22.8265Z"
                    fill="white"
                  />
                  <path
                    d="M9.97656 43.4089C20.694 51.206 35.6834 48.831 43.4729 38.1059C46.4393 33.9894 48.0598 29.0416 48.0598 23.9766C48.0598 23.4217 48.0194 22.8688 47.981 22.3139C39.2431 35.414 23.0671 41.5484 9.97656 43.4089Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1007_10617">
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      transform="translate(0.0625)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </article>
        <img
          src={footerImg}
          alt=""
          className="right-0 top-0 order-1 md:order-2"
          data-aos="fade-left"
          data-aos-duration="1200"
        />
      </div>
    </footer>
  );
};

export default Footer;
