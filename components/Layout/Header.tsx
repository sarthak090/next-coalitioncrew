import Image from "next/image";
export default function Header() {
  return (
    <header className="md:px-20 px-5">
      <nav className=" flex justify-end  gap-8 pt-4 mb-3">
        <div>
          {/* <Image
            alt={"movie.title"}
            src={`/img/logo.png`}
            width={300}
            height={350}
          /> */}
        </div>
        <div className="">
          <a href="https://www.youtube.com/c/23Ambition">
            {" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0124 13H9.99238C9.93043 13 3.73256 12.9889 2.16886 12.5946C1.74634 12.4889 1.36114 12.282 1.05182 11.9946C0.742496 11.7072 0.519899 11.3494 0.406316 10.957C0.125132 9.48406 -0.0106525 7.99033 0.000651656 6.49443C-0.00660767 4.99609 0.132851 3.50023 0.417307 2.02534C0.5341 1.63231 0.757725 1.27374 1.06672 0.984067C1.37571 0.694389 1.75971 0.483318 2.18185 0.371111C3.70259 8.29497e-08 9.72959 0 9.98538 0H10.0064C10.0693 0 16.2832 0.0111331 17.8309 0.405438C18.6892 0.62161 19.3596 1.24415 19.5914 2.04111C19.8812 3.51998 20.0181 5.0202 19.9981 6.5232C20.0051 8.01973 19.8653 9.51374 19.5804 10.9867C19.4654 11.3787 19.2419 11.7359 18.9322 12.0228C18.6224 12.3097 18.2373 12.5164 17.8149 12.6224C16.2962 12.9963 10.2681 13 10.0124 13V13ZM8.01401 3.71574L8.00902 9.2824L13.2167 6.49907L8.01401 3.71574Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div className="">
          <a href="https://twitter.com/CCrewNFT">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.643 2.93708C22.808 3.30708 21.911 3.55708 20.968 3.67008C21.941 3.08787 22.669 2.17154 23.016 1.09208C22.1019 1.63507 21.1014 2.01727 20.058 2.22208C19.3564 1.47294 18.4271 0.976403 17.4143 0.809551C16.4016 0.642699 15.3621 0.814868 14.4572 1.29933C13.5524 1.78379 12.8328 2.55344 12.4102 3.48878C11.9875 4.42412 11.8855 5.47283 12.12 6.47208C10.2677 6.37907 8.45564 5.89763 6.80144 5.05898C5.14723 4.22034 3.68785 3.04324 2.51801 1.60408C2.11801 2.29408 1.88801 3.09408 1.88801 3.94608C1.88757 4.71307 2.07644 5.46832 2.43789 6.14481C2.79934 6.8213 3.32217 7.39812 3.96001 7.82408C3.22029 7.80054 2.49688 7.60066 1.85001 7.24108V7.30108C1.84994 8.37682 2.22204 9.41946 2.90319 10.2521C3.58434 11.0847 4.53258 11.656 5.58701 11.8691C4.9008 12.0548 4.18135 12.0821 3.48301 11.9491C3.78051 12.8747 4.36001 13.6841 5.14038 14.264C5.92075 14.8439 6.86293 15.1653 7.83501 15.1831C6.18485 16.4785 4.1469 17.1812 2.04901 17.1781C1.67739 17.1782 1.30609 17.1565 0.937012 17.1131C3.06649 18.4823 5.54535 19.2089 8.07701 19.2061C16.647 19.2061 21.332 12.1081 21.332 5.95208C21.332 5.75208 21.327 5.55008 21.318 5.35008C22.2293 4.69105 23.0159 3.87497 23.641 2.94008L23.643 2.93708V2.93708Z"
                fill="#F8F8F8"
              />
            </svg>
          </a>
        </div>
        <div className="">
          <a href="https://www.instagram.com/peterjvoogd/">
            <svg
              width="20"
              height="20"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00195 18.0409C6.54195 18.0409 6.25195 18.0279 5.29195 17.9859C4.54332 17.9613 3.80438 17.8091 3.10695 17.5359C2.51013 17.3036 1.96813 16.9498 1.51537 16.4969C1.06261 16.0439 0.708987 15.5018 0.476953 14.9049C0.214259 14.2049 0.072571 13.4654 0.0579531 12.7179C0.00195312 11.7599 0.00195312 11.4459 0.00195312 9.00488C0.00195312 6.53788 0.0149531 6.24988 0.0579531 5.29488C0.0728908 4.5484 0.214574 3.80989 0.476953 3.11088C0.70872 2.51322 1.06258 1.97046 1.51595 1.51727C1.96931 1.06408 2.5122 0.710423 3.10995 0.478883C3.8086 0.215085 4.5473 0.073027 5.29395 0.0588827C6.24895 0.00488271 6.56295 0.00488281 9.00195 0.00488281C11.482 0.00488281 11.767 0.0178827 12.712 0.0588827C13.46 0.0728827 14.202 0.214883 14.902 0.478883C15.4995 0.710691 16.0423 1.06444 16.4956 1.5176C16.949 1.97075 17.3029 2.51338 17.535 3.11088C17.802 3.82088 17.945 4.57088 17.956 5.32788C18.012 6.28588 18.012 6.59888 18.012 9.03888C18.012 11.4789 17.998 11.7989 17.956 12.7459C17.941 13.4941 17.799 14.2343 17.536 14.9349C17.3033 15.5322 16.949 16.0746 16.4956 16.5277C16.0422 16.9808 15.4995 17.3347 14.902 17.5669C14.202 17.8289 13.463 17.9709 12.716 17.9859C11.761 18.0409 11.448 18.0409 9.00195 18.0409V18.0409ZM8.96795 1.58788C6.52195 1.58788 6.26795 1.59988 5.31295 1.64288C4.7426 1.65034 4.17775 1.75553 3.64295 1.95388C3.25288 2.1034 2.89847 2.33299 2.60257 2.62786C2.30667 2.92274 2.07583 3.27634 1.92495 3.66588C1.72495 4.20588 1.61995 4.77688 1.61395 5.35288C1.56095 6.32188 1.56095 6.57588 1.56095 9.00488C1.56095 11.4049 1.56995 11.6959 1.61395 12.6589C1.62295 13.2289 1.72795 13.7939 1.92495 14.3289C2.23095 15.1159 2.85495 15.7379 3.64395 16.0399C4.17806 16.2395 4.7428 16.3447 5.31295 16.3509C6.28095 16.4069 6.53595 16.4069 8.96795 16.4069C11.421 16.4069 11.675 16.3949 12.622 16.3509C13.1924 16.344 13.7573 16.2388 14.292 16.0399C14.6799 15.8892 15.0323 15.6595 15.3267 15.3653C15.6211 15.071 15.8511 14.7188 16.002 14.3309C16.202 13.7909 16.307 13.2189 16.313 12.6429H16.324C16.367 11.6869 16.367 11.4319 16.367 8.98888C16.367 6.54588 16.356 6.28888 16.313 5.33388C16.3039 4.76434 16.1988 4.20041 16.002 3.66588C15.8514 3.27743 15.6216 2.92459 15.3272 2.62983C15.0328 2.33508 14.6802 2.10487 14.292 1.95388C13.757 1.75388 13.192 1.64988 12.622 1.64288C11.655 1.58788 11.402 1.58788 8.96795 1.58788V1.58788ZM9.00195 13.6239C8.08753 13.6245 7.19346 13.3539 6.43284 12.8463C5.67222 12.3387 5.07921 11.617 4.72882 10.7723C4.37842 9.92771 4.28638 8.99813 4.46434 8.10119C4.6423 7.20424 5.08227 6.38022 5.72858 5.73334C6.3749 5.08647 7.19854 4.64579 8.09533 4.46706C8.99212 4.28832 9.92178 4.37955 10.7667 4.72921C11.6116 5.07888 12.3339 5.67126 12.8421 6.43144C13.3504 7.19162 13.6218 8.08545 13.622 8.99988C13.6204 10.2251 13.1332 11.3997 12.2673 12.2664C11.4013 13.1331 10.2271 13.6212 9.00195 13.6239V13.6239ZM9.00195 5.99788C8.40861 5.99788 7.82859 6.17383 7.33524 6.50347C6.84189 6.83312 6.45738 7.30165 6.23031 7.84983C6.00325 8.39801 5.94384 9.00121 6.0596 9.58315C6.17535 10.1651 6.46108 10.6996 6.88063 11.1192C7.30019 11.5388 7.83474 11.8245 8.41668 11.9402C8.99863 12.056 9.60183 11.9966 10.15 11.7695C10.6982 11.5425 11.1667 11.1579 11.4964 10.6646C11.826 10.1712 12.002 9.59123 12.002 8.99788C12.0001 8.2028 11.6834 7.44081 11.1212 6.8786C10.559 6.3164 9.79703 5.99973 9.00195 5.99788ZM13.802 5.28488C13.6604 5.28436 13.5203 5.25595 13.3897 5.20129C13.2591 5.14663 13.1406 5.06679 13.0409 4.96632C12.8394 4.7634 12.7269 4.48879 12.728 4.20288C12.729 3.91698 12.8436 3.64321 13.0465 3.44179C13.2494 3.24038 13.524 3.12782 13.81 3.12888C14.0959 3.12994 14.3696 3.24454 14.571 3.44745C14.7725 3.65036 14.885 3.92498 14.884 4.21088C14.8829 4.49679 14.7683 4.77056 14.5654 4.97197C14.3625 5.17339 14.0879 5.28594 13.802 5.28488Z"
                fill="#F8F8F8"
              />
            </svg>
          </a>
        </div>
        <div className="">
          <a href="https://opensea.io/collection/coalitioncrew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 100 100"
            >
              <path
                fill="#2081E2"
                d="M100 50C100 77.6127 77.6127 100 50 100C22.3873 100 0 77.6127 0 50C0 22.3873 22.3873 0 50 0C77.6185 0 100 22.3873 100 50Z"
              />
              <path
                fill="#fff"
                d="M24.6679 51.6801L24.8836 51.341L37.8906 30.9932C38.0807 30.6953 38.5276 30.7261 38.6714 31.0497C40.8444 35.9196 42.7194 41.9762 41.841 45.7468C41.466 47.2982 40.4386 49.3992 39.2827 51.341C39.1338 51.6236 38.9694 51.901 38.7947 52.1681C38.7125 52.2914 38.5738 52.3633 38.4248 52.3633H25.048C24.6884 52.3633 24.4778 51.9729 24.6679 51.6801Z"
              />
              <path
                fill="#fff"
                d="M82.6444 55.461V58.6819C82.6444 58.8668 82.5314 59.0312 82.367 59.1031C81.3602 59.5346 77.9132 61.1168 76.48 63.11C72.8224 68.2008 70.0279 75.48 63.7812 75.48H37.721C28.4847 75.48 21 67.9697 21 58.7024V58.4045C21 58.1579 21.2003 57.9576 21.4469 57.9576H35.9745C36.2621 57.9576 36.4727 58.2247 36.4471 58.5072C36.3443 59.4524 36.519 60.4182 36.9659 61.2966C37.8289 63.0484 39.6166 64.1426 41.5481 64.1426H48.74V58.5278H41.6303C41.2656 58.5278 41.0499 58.1065 41.2605 57.8086C41.3375 57.6904 41.4249 57.5672 41.5173 57.4285C42.1903 56.473 43.1509 54.9884 44.1064 53.2983C44.7588 52.1579 45.3906 50.9404 45.8992 49.7178C46.002 49.4969 46.0841 49.2708 46.1663 49.0499C46.305 48.6595 46.4489 48.2948 46.5516 47.9301C46.6544 47.6218 46.7365 47.2982 46.8187 46.9951C47.0602 45.9574 47.1629 44.8581 47.1629 43.7177C47.1629 43.2708 47.1424 42.8033 47.1013 42.3564C47.0807 41.8684 47.0191 41.3803 46.9574 40.8923C46.9163 40.4608 46.8393 40.0344 46.7571 39.5875C46.6544 38.9351 46.5105 38.2879 46.3461 37.6354L46.2896 37.3889C46.1663 36.9419 46.0636 36.5156 45.9198 36.0687C45.5139 34.6662 45.0465 33.2998 44.5533 32.0207C44.3735 31.5121 44.168 31.0241 43.9625 30.5361C43.6595 29.8015 43.3512 29.1337 43.0687 28.5018C42.9249 28.2141 42.8016 27.9521 42.6783 27.685C42.5396 27.3819 42.3958 27.0788 42.2519 26.7912C42.1492 26.5703 42.031 26.3648 41.9488 26.1593L41.0704 24.536C40.9471 24.3151 41.1526 24.0531 41.394 24.1199L46.8907 25.6096H46.9061C46.9163 25.6096 46.9215 25.6148 46.9266 25.6148L47.6509 25.8151L48.4472 26.0412L48.74 26.1233V22.8562C48.74 21.2791 50.0037 20 51.5654 20C52.3462 20 53.0551 20.3185 53.5637 20.8373C54.0722 21.3562 54.3907 22.0651 54.3907 22.8562V27.7056L54.9764 27.8699C55.0226 27.8854 55.0688 27.9059 55.1099 27.9367C55.2538 28.0446 55.4592 28.2038 55.7212 28.3991C55.9267 28.5634 56.1476 28.7638 56.4147 28.9693C56.9438 29.3956 57.5757 29.9453 58.2692 30.5772C58.4541 30.7364 58.6339 30.9008 58.7983 31.0652C59.6922 31.8974 60.6939 32.8734 61.6494 33.9522C61.9165 34.2553 62.1785 34.5635 62.4456 34.8871C62.7127 35.2159 62.9953 35.5395 63.2418 35.8632C63.5655 36.2947 63.9148 36.7416 64.2179 37.2091C64.3617 37.43 64.5261 37.656 64.6648 37.8769C65.0552 38.4676 65.3994 39.079 65.7282 39.6903C65.8669 39.9728 66.0107 40.281 66.134 40.5841C66.4987 41.4009 66.7864 42.2331 66.9713 43.0653C67.0278 43.2451 67.0689 43.4403 67.0895 43.615V43.6561C67.1511 43.9026 67.1717 44.1646 67.1922 44.4317C67.2744 45.2845 67.2333 46.1372 67.0484 46.9951C66.9713 47.3599 66.8686 47.704 66.7453 48.0688C66.622 48.4181 66.4987 48.7828 66.3395 49.127C66.0313 49.841 65.6665 50.5551 65.235 51.2229C65.0963 51.4695 64.9319 51.7315 64.7675 51.9781C64.5877 52.24 64.4028 52.4866 64.2384 52.7281C64.0124 53.0363 63.771 53.3599 63.5244 53.6476C63.3035 53.9507 63.0775 54.2538 62.8309 54.5209C62.4867 54.9267 62.1579 55.312 61.8137 55.6819C61.6083 55.9233 61.3874 56.1699 61.1613 56.3908C60.9405 56.6373 60.7144 56.8582 60.5089 57.0637C60.1648 57.4079 59.8771 57.675 59.6356 57.8959L59.0706 58.4148C58.9884 58.4867 58.8805 58.5278 58.7675 58.5278H54.3907V64.1426H59.8976C61.1305 64.1426 62.3018 63.7059 63.247 62.9045C63.5706 62.622 64.9833 61.3994 66.6528 59.5552C66.7093 59.4935 66.7813 59.4473 66.8635 59.4268L82.0742 55.0295C82.3568 54.9473 82.6444 55.163 82.6444 55.461Z"
              />
            </svg>
          </a>
        </div>
      </nav>
      <div className="flex justify-end">
        <button
          id="cta2"
          className="border italic font-bold border-white mb-3 px-4 text-white"
        >
          Connect wallet
        </button>
      </div>
    </header>
  );
}
