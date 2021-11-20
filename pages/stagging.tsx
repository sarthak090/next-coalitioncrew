import { NextSeo } from "next-seo";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { GetStaticProps } from "next";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
type Props = {
  data: {
    title: { rendered: string };
    content: { rendered: string };
    acf: {
      profile_image_url: string;
      first_section: string;
      second_section: string;
      third_section: string;
      fourth_section: string;
      value_first: {
        image_: { sizes: { large: string }; url: string };
        info: string;
      };
      value_second: {
        image_: { sizes: { large: string }; url: string };
        info: string;
      };
      value_third: {
        image_: string;
        info: string;
      };
      value_fourth: {
        image_: { sizes: { large: string }; url: string };
        info: string;
      };
      value_fifth: {
        image_: { sizes: { large: string }; url: string };
        info: string;
      };
    };
  };
};
export default function Home({ data }: Props) {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const firstImg = useAnimation();
  const secondImg = useAnimation();
  const thirdImg = useAnimation();
  const fourthImg = useAnimation();
  const slideLeft = useAnimation();

  const [shouldShowActions, setShouldShowActions] = useState(true);
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        y: 0,
        opacity: 1,
        zIndex: 1,
        transition: { duration: 1 },
      });
      firstImg.start({
        x: 0,
        y: 0,
        opacity: 1,
        zIndex: 1,
        transition: { duration: 1 },
      });
      secondImg.start({
        x: 0,
        y: 0,
        opacity: 1,
        zIndex: 1,
        transition: { duration: 1 },
      });
      thirdImg.start({
        x: 0,
        y: 0,
        opacity: 1,
        zIndex: 1,
        transition: { duration: 1 },
      });
      fourthImg.start({
        x: 0,
        y: 0,
        opacity: 1,
        zIndex: 1,
        transition: { duration: 1 },
      });
      slideLeft.start({
        x: 0,
        y: 0,
        opacity: 1,
        zIndex: 1,
        transition: { duration: 1 },
      });
    }
    if (!inView) {
      animation.start({
        x: 0,
        y: 258,
        opacity: 0,
        zIndex: -1,

        transition: { duration: 0.9 },
      });
      firstImg.start({
        x: 0,
        y: 252,
        opacity: 0,
        zIndex: -1,
        transition: { duration: 2 },
      });
      secondImg.start({
        x: 0,
        y: 0,
        opacity: 1,
        zIndex: 1,
        transition: { duration: 1 },
      });
      thirdImg.start({
        x: 0,
        y: 0,
        opacity: 1,
        zIndex: 1,
        transition: { duration: 1 },
      });
      fourthImg.start({
        x: 0,
        y: 0,
        opacity: 1,
        zIndex: 1,
        transition: { duration: 1 },
      });

      slideLeft.start({
        x: 156,
        y: 0,
        opacity: 1,
        zIndex: 1,
        transition: { duration: 1 },
      });
    }
  }, [inView]);
  return (
    <>
      <NextSeo
        title={"Home - Coalitioncrew"}
        description="Youtube Twitter Instagram Welcome to the Coalition Mint here This is the NFT for Game Changers. The Coalition Crew is an exclusive collection of 7100 unique Cheetah NFTs living on the Ethereum blockchain. It’s estimated that as of 2021, there are only 7100 cheetahs left in the wild. Cheetahs are currently listed as vulnerable and &hellip; Home Read More &raquo;"
        openGraph={{
          description:
            "Youtube Twitter Instagram Welcome to the Coalition Mint here This is the NFT for Game Changers. The Coalition Crew is an exclusive collection of 7100 unique Cheetah NFTs living on the Ethereum blockchain. It’s estimated that as of 2021, there are only 7100 cheetahs left in the wild. Cheetahs are currently listed as vulnerable and &hellip; Home Read More &raquo;",
          title: "Home - Coalitioncrew",
          type: "website",
          locale: "en_US",
          url: "https://coalitioncrew.com/",
          images: [
            {
              url: "http://coalitioncrew.com/wp-content/uploads/2021/10/TCC_1-Transparent-1024x982.png",
              width: 1200,
              height: 630,
              alt: "coalition crew logo",
            },
          ],
        }}
      />

      <div className="bg-black">
        <div
          id="banner"
          className=" bg-crew w-full  h-screen bg-cover flex flex-col justify-between"
        >
          <Header />

          <div className="flex flex-col justify-center items-center">
            <button
              id="cta2"
              className="border uppercase italic font-bold border-iconColor mb-3 px-4 text-iconColor"
            >
              Mint Here
            </button>
          </div>
        </div>

        <div className="bg-black text-white ">
          <div className="post-content container mx-auto text-lg  p-10 text-center md:text-left ">
            {/* <div
              dangerouslySetInnerHTML={{ __html: data.content.rendered }}
            ></div> */}
            <div className="first-section">
              <h1 className="text-yellowHeading text-left our-mission font-bold text-3xl border-b-2 pb-3 border-yellow-200 md:w-1/4">
                Our Mission
              </h1>
              <section className="grid md:grid-cols-2 items-center">
                <div className="flex items-center justify-center">
                  {" "}
                  <div className="h-72 animate-pulse duration-300 w-72 md:w-96 md:h-96 bg-yellow-200 rounded-full absolute z-0 md:left-40"></div>
                  <Image
                    alt={"logo"}
                    src={`/img/cheetah.png`}
                    width={300}
                    height={350}
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${data.acf.first_section} ${data.acf.second_section}`,
                  }}
                ></div>
              </section>

              <div className="flex justify-center">
                <div className="w-36 h-2 flex  bg-yellow-200 my-9"></div>
              </div>

              <div
                ref={ref}
                className="gallery justify-items-center grid grid-cols-2 gap-4 md:grid-cols-4 "
              >
                <motion.div
                  animate={animation}
                  className="w-48 h-60 bg-white"
                ></motion.div>
                <motion.div
                  animate={firstImg}
                  className="w-48 h-60 bg-white"
                ></motion.div>
                <motion.div
                  animate={animation}
                  className="w-48 h-60 bg-white"
                ></motion.div>
                <motion.div
                  animate={animation}
                  className="w-48 h-60 bg-white"
                ></motion.div>
                {/* <div className="w-48 h-60 bg-white"></div>
                <div className="w-48 h-60 bg-white"></div>
                <div className="w-48 h-60 bg-white"></div> */}
              </div>

              <section
                className=" "
                dangerouslySetInnerHTML={{ __html: data.acf.third_section }}
              ></section>

              <section className="value-section my-16">
                <div
                  className="grid md:grid-cols-2 items-center relative"
                  ref={ref}
                >
                  <motion.div
                    exit={{ opacity: 0 }}
                    animate={{
                      opacity: shouldShowActions ? 1 : 0,
                      translateX: 0,
                    }}
                    initial={{ opacity: 0, translateX: -100 }}
                    transition={{ duration: 0.5 }}
                    className="order-1 featured-img"
                  >
                    <Image
                      alt={data.acf.value_first.info}
                      src={"/img/millionaires speakers.png"}
                      width={600}
                      height={400}
                    />
                  </motion.div>
                  <span className="md:text-2xl order-2">
                    {data.acf.value_first.info}
                    {/* Monthly Millionaire <br /> Guest Speakers */}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 items-center relative">
                  <motion.div
                    exit={{ opacity: 0 }}
                    animate={{
                      opacity: shouldShowActions ? 1 : 0,
                      translateX: 0,
                    }}
                    initial={{ opacity: 0, translateX: -100 }}
                    transition={{ duration: 0.5 }}
                    className="md:order-2 flex justify-center items-center  featured-img-2"
                  >
                    <Image
                      alt={data.acf.value_second.info}
                      src={"/img/World Interconnected.svg"}
                      width={600}
                      height={400}
                    />
                  </motion.div>
                  <span className="md:text-2xl order-1 text-center ">
                    {data.acf.value_second.info}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 items-center relative">
                  <motion.div
                    exit={{ opacity: 0 }}
                    animate={{
                      opacity: shouldShowActions ? 1 : 0,
                      translateX: 0,
                    }}
                    initial={{ opacity: 0, translateX: -100 }}
                    transition={{ duration: 0.5 }}
                    className="order-1 flex justify-center items-center featured-img"
                  >
                    <Image
                      alt={"business training"}
                      src={"/img/business training.svg"}
                      width={400}
                      height={400}
                    />
                  </motion.div>
                  <span className="md:text-2xl order-2 text-center">
                    {data.acf.value_third.info}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 items-center relative">
                  <motion.div
                    exit={{ opacity: 0 }}
                    animate={{
                      opacity: shouldShowActions ? 1 : 0,
                      translateX: 0,
                    }}
                    initial={{ opacity: 0, translateX: -100 }}
                    transition={{ duration: 0.5 }}
                    className="md:order-2   flex justify-center items-center featured-img-2"
                  >
                    <Image
                      alt={"business paractice"}
                      src={"/img/business paractice.svg"}
                      width={400}
                      height={400}
                    />
                  </motion.div>
                  <span className="md:text-2xl order-1 text-center">
                    {data.acf.value_fourth.info}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 items-center relative">
                  <motion.div
                    exit={{ opacity: 0 }}
                    animate={{
                      opacity: shouldShowActions ? 1 : 0,
                      translateX: 0,
                    }}
                    initial={{ opacity: 0, translateX: -100 }}
                    transition={{ duration: 0.5 }}
                    className="order-1 flex justify-center items-center featured-img"
                  >
                    <Image
                      alt={"enterpreneurs"}
                      src={"/img/enterpreneurs.svg"}
                      width={400}
                      height={400}
                    />
                  </motion.div>
                  <span className="md:text-2xl order-2 ">
                    Access to Other Game Changers <br /> and Entrepreneurs
                    {/* {data.acf.value_fifth.info} */}
                  </span>
                </div>
              </section>

              <section
                className="fourth"
                dangerouslySetInnerHTML={{ __html: data.acf.fourth_section }}
              ></section>
            </div>

            <div className="  h-0.5 w-full bg-white my-8"></div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BLOG_URL}/wp/v2/pages/4877`
  ).then();
  const home = await data.json();

  return {
    props: {
      data: home,
    },
  };
};
