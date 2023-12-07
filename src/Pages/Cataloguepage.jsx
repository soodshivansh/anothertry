import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import animate from '../Assets/forcatalogue.json';
import Lottie,{LottieRefCurrentProps} from "lottie-react";

import pdf1 from '../Assets/catalogues/chemiteck product catalogue.pdf'
import pdf2 from '../Assets/catalogues/Ball Valves - Floaters & Trunion Mounted.pdf'
import pdf3 from '../Assets/catalogues/Product catalogue - Engineers Combine.pdf'
import pdf4 from '../Assets/catalogues/PHBB Double & Tripple Offset Butterfly Valves.pdf'
import pdf5 from '../Assets/catalogues/PHBB Metal Seated Ball Valves.pdf'
import pdf6 from '../Assets/catalogues/PHBB Multiport Ball Valves.pdf'
import pdf7 from '../Assets/catalogues/PHBB Penumatic Actuator.pdf'
import pdf8 from '../Assets/catalogues/PHBB PNEUMATIC ACTUATOR S SERIES (SCOTCH & YOKE) (1).pdf'
import pdf9 from '../Assets/catalogues/PHBB Segmented Ball Valves.pdf'
import pdf10 from '../Assets/catalogues/PHBB Soft Seated Butterfly Valves.pdf'
import pdf11 from '../Assets/catalogues/PHBB Tank Bottom Ball Valves.pdf'
import pdf12 from '../Assets/catalogues/PHBB V-Notch Ball Valves.pdf'


const catalogues = [
    {
      id: 1,
      title: 'Ball Valves-Floaters & Trunion Mounted',
      pdf: pdf2,
    },
    {
      id: 2,
      title: 'Engineers Combine',
      pdf: pdf3,

    },
    {
      id: 3,
      title: 'PHBB Double & Tripple Offset Valves',
      pdf: pdf4,

    },
    {
      id: 4,
      title: 'PHBB Metal Seated Ball Valves',
      pdf: pdf5,

    },
    {
      id: 5,
      title: 'PHBB Multiport Ball Valves',
      pdf: pdf6,

    },
    {
      id: 6,
      title: 'PHBB Penumatic Actuator',
      pdf: pdf7,

    },
    {
      id: 7,
      title: 'PHBB PNEUMATIC ACTUATOR S SERIES',
      pdf: pdf8,

    },
    {
      id: 8,
      title: 'PHBB Segmented Ball Valves',
      pdf: pdf9,

    },
    {
      id: 9,
      title: 'PHBB Soft Seated Butterfly Valves',
      pdf: pdf10,

    },
    {
      id: 10,
      title: 'PHBB Tank Bottom Ball Valves',
      pdf: pdf11,

    },
    {
      id: 11,
      title: 'PHBB V-Notch Ball Valves',
      pdf: pdf12,

    },
    
  ];

export default function Cataloguepage() {

const animateref = useRef();

  return (
    <div>
      <Navbar />
      <div className="mb-36 flex lg:flex-row flex-col justify-between sm:gap-0 gap-10 lg:pl-32 lg:pr-32 pt-20 md:pr-14 xs:pl-10 pl-5">
        <div className="text-white flex justify-center text-left flex-col lg:w-[50%] w-full gap-8">
          <h1 className="font-Arvo lg:text-2xl md:text-xl text-[#415cab]">Catalogue</h1>
          <p className="font-cabin lg:text-4xl text-2xl"> Download now to discover a world of quality products and solutions at your fingertips</p>
          {/* <button className="font-cabin button3">Read More</button> */}
          <a href="#catalogues"><button class="relative group cursor-pointer text-sky-50 overflow-hidden h-16 w-64 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
            <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
            <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
            <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
            <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
            <p class="z-10">See More</p>
          </button></a>
        </div>
        <div className="">
          <Lottie onComplete={() => {animateref.current?.goToAndPlay(300,true)}} loop={false} lottieRef={animateref} className="w-[80%] md:w-4/5 lg:w-full mx-auto sm:pl-10 pr-10" animationData={animate} />
        </div>
      </div>

    <div id="catalogues" className="p-10 flex flex-col gap-10">
        <h1 className="text-white font-Arvo lg:text-4xl text-2xl"><span className="text-[#415cab]">ALBI</span> Product Catalogue :</h1>
        <div class="cataloguecard max-w-[675px]">
            <a class="card1" href={pdf1} target="_blank">
                <p className="">Chemiteck Product Range</p>
                <p class="small"></p>
                <div class="go-corner" href="#">
                <div class="go-arrow">
                    {/* <span className="text-3xl">→</span> */}
                </div>
                </div>
            </a>
        </div>
    </div>


        <div className="p-10 mb-20 grid grid-cols-1 xmd:grid-cols-3 sm:grid-cols-2">
            {catalogues.map((catalogue) => (
                <div class="cataloguecard">
                    <a href={catalogue.pdf} target="_blank" class="card1 md:h-[130px] xs:h-[100px] h-[90px]">
                        <p className="pr-5">{catalogue.title}</p>
                        <div class="go-corner" href="#">
                        <div class="go-arrow">
                            {/* <span className="text-3xl">→</span> */}
                        </div>
                        </div>
                    </a>
                </div>
            ))}
        
        </div>
        <Footer />
    </div>
  );
}
