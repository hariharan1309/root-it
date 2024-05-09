import Navbar from "./components/Navbar"
import Image from './assets/hero_bg.png'
import Features from "./components/Features"
import Feature1 from './assets/Feature_1.png'
import Feature2 from './assets/Feature_2.png'
import Feature3 from './assets/Feature_3.png'
import Feature4 from './assets/Feature_4.png'
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const FeatureList=[
  {
    img:Feature1,
    content:"Step into a new era of security with Root it advanced gate security control project. Our team has developed a state-of-the-art solution to enhance access control, ensuring the safety and security of your premises. This project combines cutting-edge technology with design to create a robust gate security system.",
    title:"Gate security control",
    sub:["License Plate Recognition","Fully customization feature"]
  },
  {
    img:Feature2,
    content:"It's our innovative canteen project! Our team embarked on a mission to revolutionize the dining experience, creating a dynamic and vibrant space for our clients and their employees / students. The primary goal of this project is to enhance the overall dining experience through thoughtful design, efficient operations, and a commitment to quality." ,
    title:"Gate security control",
    sub:["User frendly UI", "Sustainability Initiatives","User freedom"]
  },
  {
    img:Feature3,
    content:"Discover the next level of hostel management with Root it's innovative solution. Our hostel management project aims to streamline and enhance the entire hostel experience, providing administrators, residents, and staff with powerful tools for efficient operations and improved living conditions.",
    title:"Hostel management",
    sub:["Fully responsive","Fully responsive","Roll based controll"]
  },
  {
    img:Feature4,
    content:"Embark on a journey of efficiency and sustainability with Rootit Cotton Mill Management project. Our innovative solution is designed to revolutionize the cotton manufacturing process, with a primary focus on minimizing wastage, optimizing machine performance, and promoting sustainable practices.",
    title:"Quality control",
    sub:["Waste Monitoring System","Roll based controll"]
  }
]

function App() {
  // // const purple="#8d53c7";
  // // const purple="#0f0f11"//button
  // // const green="#75af8c";
  // const gray="#808082"
  // // const blue="#4987c0";
  // const fePurple="#dad1f4";
  // const buttoPurple="#a58ee6"
  // const arrow="#0081fe";
  // const footer="#151517";
  // const footHead="#fcfcfe";
  // const fotcontent="#c5c5c8"
  // // const headText="#6a6a6c";
  // const purpleText="#b373dd"

  return (
    <main className="relative flex flex-col font-figtree">

      <div className=" relative w-full">
      <div className="absolute top-0 z-10 w-full h-full bg-black/85 space-y-[5%] ">
        <Navbar />
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-row gap-[10%] w-full justify-center items-center">
              <div className="flex flex-col gap-1">
                <span className="bg-[#3c8cd6] py-1 rounded-full px-2.5 text-white translate-y-[50%]">
                    Dashboard 
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" version="1.1" className="h-5 w-5 rotate-[135deg] translate-x-[95px] translate-y-1">
                  <path d="" stroke="none" fill="#4987c0" fillRule="evenodd"/>
                  <path d="M 18.597 6.750 C 18.287 8.262, 16.229 20.075, 14.024 33 C 11.818 45.925, 9.827 57.288, 9.600 58.250 C 9.373 59.212, 9.483 59.999, 9.844 59.997 C 10.205 59.996, 14.623 56.171, 19.662 51.497 C 24.701 46.824, 29.306 43, 29.895 43 C 30.485 43, 35.985 44.364, 42.118 46.032 C 48.251 47.700, 53.475 48.858, 53.726 48.607 C 54.168 48.165, 20.327 4, 19.546 4 C 19.333 4, 18.906 5.237, 18.597 6.750" stroke="none" fill="#0EA5E9" fillRule="evenodd"/>
                </svg>
              </div>
              <span className="text-6xl font-bold">
                  <h1 className="text-white">Our <span className="text-[#b373dd]"> Work</span></h1>
              </span>
              <div className="flex flex-col gap-1 -translate-y-[50%] float-left justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" version="1.1" className="absolute h-5 w-5 rotate-[245deg] translate-y-[23px] -translate-x-4">
                  <path d="" stroke="none" fill="#75af8c" fillRule="evenodd"/>
                  <path d="M 18.597 6.750 C 18.287 8.262, 16.229 20.075, 14.024 33 C 11.818 45.925, 9.827 57.288, 9.600 58.250 C 9.373 59.212, 9.483 59.999, 9.844 59.997 C 10.205 59.996, 14.623 56.171, 19.662 51.497 C 24.701 46.824, 29.306 43, 29.895 43 C 30.485 43, 35.985 44.364, 42.118 46.032 C 48.251 47.700, 53.475 48.858, 53.726 48.607 C 54.168 48.165, 20.327 4, 19.546 4 C 19.333 4, 18.906 5.237, 18.597 6.750" stroke="none" fill="#22C55E" fillRule="evenodd"/>
                </svg>
                <span className="bg-green-400 py-1 rounded-full px-2.5 text-white">
                    Software 
                </span>
              </div>
            </div>
            <div className="text-gray-100 text-2xl text-center px-[25%] ">
                <span className="w-1/">See how we help our clients become the future best version of themselves each and every day</span>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="ring-1 ring-white w-4 px-5 py-7 rounded-full text-center relative">
                <span className="bg-purple-500 rounded-full absolute top-[50%] px-1 py-1.5 left-[40%]"></span>
              </div>
            </div>
          </div>
        </div>
        <img src={Image} alt="hero" className="w-full h-[500px] object-cover" />
      </div>
      <div className="flex flex-col bg-[#dad1f4] m-5 gap-20 rounded-xl py-[5%]">
        {FeatureList.map((feature,index)=>(
          <Features feature={feature} index={index} key={index}/>
        ))}
      </div>
      <div className="relative ">
        <Contact />
      </div>
      <section className="w-full bg-black px-[5%] ">
          <Footer/> 
      </section>
    </main>
  )
}

export default App
