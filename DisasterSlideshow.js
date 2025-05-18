import earthquake from "../assests/earthquake.jpg";
import flood from "../assests/flood.jpg";
import fire from "../assests/fire.jpg";
import cyclone from "../assests/cyclone.jpg";
import drought from "../assests/drought.jpg"
import tsunami from "../assests/tsunami.jpg"
import pandemic from "../assests/pandemic.jpg"
import landslide from "../assests/landslide.jpg"
const disasterData = [
  { 
    id: 1, 
    name: "Disaster Relief", 
    image: earthquake, 
    tipsLink: "/safety/earthquake"
  },
  { 
    id: 2, 
    name: "Disaster Recovery", 
    image: flood, 
    tipsLink: "/safety/flood"
  },
  { 
    id: 3, 
    name: "Disaster Preparedness", 
    image: fire, 
    tipsLink: "/safety/fire"
  },
  { 
    id: 4, 
    name: "Environmental Programs", 
    image: cyclone, 
    tipsLink: "/safety/cyclone"
  },
  { 
    id: 5, 
    name: "Environmental Programs", 
    image: drought, 
    tipsLink: "/safety/drought"
  },
  { 
    id: 6, 
    name: "Environmental Programs", 
    image: tsunami, 
    tipsLink: "/safety/tsunami"
  },
  { 
    id: 7, 
    name: "Environmental Programs", 
    image: pandemic, 
    tipsLink: "/safety/pandemic"
  },
  { 
    id: 8, 
    name: "Environmental Programs", 
    image: landslide, 
    tipsLink: "/safety/landslide"
  },
];

export default function WhatWeDoSection() {
  return (
    <div className="od_fe_area py-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-2">
            <div className="witr_section_title text-center">
              <div className="witr_section_title_inner">
                <h3 className="text-3xl font-bold text-red-700 mb-5 ">Disaster Safety tips</h3>
                <div className="witr_bar_main">
                  <div className="red_bar_inner w-20 h-1 mx-auto bg-red-600 rounded-full"></div>
                </div>                       
              </div>
            </div>
          </div>

          {disasterData.map((disaster) => (
            <div key={disaster.id} className="col-lg-3 col-md-6 mb-6">
              <div 
                className="witr_counter_single all_counter_color p-4 rounded-2xl shadow-md text-center transition-transform hover:scale-105 duration-300 ease-in-out" 
                style={{ 
                  height: '370px', 
                  backgroundColor: 'rgba(85, 85, 128, 0.05)' // Light red tint
                }}
              >
                <div className="witr_counter_icon overflow-hidden rounded-xl">
                  <img 
                    src={disaster.image} 
                    alt={disaster.name} 
                    style={{
                      width: '100%', 
                      height: '200px',
                      objectFit: 'cover',
                      
                    }} 
                  />
                </div>
                <div className="witr_counter_number_inn mt-4 flex flex-col justify-between h-[130px]">
                  {/* <button className="bg-black text-white px-4 py-2 rounded-full font-semibold w-full text-sm">
                    {disaster.name}
                  </button> */}
                  <a 
                    href={disaster.tipsLink}
                    className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold text-sm w-full inline-block"
                  >
                    <button className="bg-black text-white px-4 py-2 rounded-full font-semibold w-full text-sm">
                    {disaster.name}
                  </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12 text-center mt-20">
            {/* Optional Footer or additional content */}
          </div>
        </div>
      </div>
    </div>
  );
}
