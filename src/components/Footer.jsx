import Logo from '../assets/logo.png';
import Map from '../assets/map-base 1.png';

export default function Footer(){
    return(
        <footer className="flex flex-col pt-10 text-white gap-10">
            <div className="flex flex-row justify-between items-center">
                <img src={Logo} alt="Logo" className='h-20' />
                <div className='flex flex-col gap-2'>
                    <h1 style={{letterSpacing:"0.2rem",color:"#fcfcfe"}}>COMPANY</h1>
                    <div className='flex flex-row justify-between gap-4 flex-grow text-[#c5c5c8] '>
                        <div className="border-r pr-4 border-gray-700">About</div>
                        <div className="border-r pr-4 border-gray-700">Our services</div>
                        <div className="border-r pr-4 border-gray-700">Career</div>
                        <div className="border-r pr-4 border-gray-700">Contact us</div>
                        <div>Our work</div>
                    </div>
                </div>
            </div>
            <div className='bg-zinc-900 p-[3%] rounded-xl flex  gap-[10%] justify-between items-center'>
                <div className='flex flex-col gap-5 text-xl'>
                   <span> <span className='text-3xl font-bold text-[#fcfcfe]'>Hello,</span> We Are Rootit!</span> 
                   <div className='text-gray-100'>
                        Our goal is to translate the positive effects from revolutionzing how companies engage with clients & their team.
                   </div>
                </div>
                <div className=' border rounded-md p-1 w-[80%] flex justify-between'>
                    <input type="email" name="" id="" className='outline-none bg-transparent p-2' placeholder='Enter your Email' />
                    <button className='bg-[#0081fe] px-5'>
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="#ffffff"/>
                    </svg>
                    </button>
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-8'>
                    <h1 style={{letterSpacing:"0.2rem"}}>COMPANY</h1>
                    <div className='flex flex-col gap-4'>
                    <span className='text-[#c5c5c8]'>
                        Email - <a href='mailto:support@rootit.com' className='border-b text-[#fcfcfe] '>support@rootit.com</a>
                    </span>
                    <span className='text-[#c5c5c8]'>
                        Call - <a href='tel:18002024849' className='border-b text-[#fcfcfe] '>1800-202-4849</a>
                    </span>
                    <span className='text-[#c5c5c8]'>
                        Mon - <span className='text-[#fcfcfe]'>Fri, 9am to 6pm.</span>
                    </span>

                    </div>
                </div>
                {/* <div className='relative w-[50%] '>
                    <img src={Map} alt="Map" className='z-0 -inset-y-[10%] bg-clip-content ' />
                </div> */}
                <div className="relative w-[50%] -translate-x-[100px]">
                    <img src={Map}  className="w-full h-auto " alt="Your Image"  />

                    {/* Circular Mask */}
                    <div className="absolute inset-0 flex justify-between items-center overflow-hidden">
                        <div className="h-full w-[40%]  bg-black opacity-100 justify-start"></div>
                        <div className="h-full w-[50%] rounded-full">
                            <div className="h-full w-full bg-black opacity-100 component relative">
                                <div className='absolute bottom-[80px] right-[70px]'>
                                    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='h-16 rotate' >
                                        {/* <!-- Center Circle --> */}
                                        <circle cx="100" cy="100" r="15" className='fill-purple-500 opacity-90' />
                                        {/* <!-- Outer Circular Lines --> */}
                                        <circle cx="100" cy="100" r="40" fill="none" className='stroke-purple-500 opacity-75' strokeWidth="4" />
                                        <circle cx="100" cy="100" r="60" fill="none" className='stroke-purple-500 opacity-60' strokeWidth="4" />
                                        <circle cx="100" cy="100" r="80" fill="none" className='stroke-purple-500 opacity-45' strokeWidth="4" />
                                        <circle cx="100" cy="100" r="100" fill="none" className='stroke-purple-500 opacity-30' strokeWidth="4" />
                                    </svg>
                                </div>
                            </div>
                            {/* 
                            
                            <svg data-name="Camada 1" id="Camada_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#0f4c05;}.cls-1,.cls-2{stroke:#43cc2f;stroke-linecap:round;stroke-linejoin:round;strokeWidth:5px;}.cls-2{fill:none;}</style></defs><title/><circle class="cls-1" cx="256" cy="256" r="29.1"/><circle class="cls-1" cx="221.81" cy="197.61" r="17.5"/><circle class="cls-1" cx="354.94" cy="215.1" r="17.5"/><circle class="cls-1" cx="152.82" cy="360.34" r="17.5"/><circle class="cls-1" cx="337.45" cy="88.5" r="17.5"/><path class="cls-2" d="M199.89,217.46A68.07,68.07,0,1,0,256,187.92c-2.08,0-4.13.11-6.15.29"/><path class="cls-2" d="M340,189.6A107.05,107.05,0,1,0,363.05,256a108.15,108.15,0,0,0-.7-12.26"/><path class="cls-2" d="M176.27,378.35a146,146,0,1,0-41.72-41.25"/><path class="cls-2" d="M309.49,78.86A185,185,0,0,0,256,71C153.83,71,71,153.83,71,256s82.83,185,185,185,185-82.83,185-185a184.77,184.77,0,0,0-78.73-151.44"/></svg>
                            */}
                        </div>
                        <div className=' h-full w-[10%]  bg-black opacity-100 '>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h1 style={{letterSpacing:"0.2rem"}}>HEADQUARTES</h1>
                    <span className='text-[#c5c5c8] leading-7'>H-20, Green Park Avenue,<br/> Omalur Main Road, Salem.,<br/><span className='font-semibold text-[#fcfcfe]'>Salem, TamilNadu IN.</span></span>
                    <span className='text-blue-500 flex flex-row items-center gap-5'>
                        <span>Get directions </span>
                        <svg className='h-6 w-6 fill-current' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"/></g>
                        </svg>
                    </span>
                </div>
            </div>
            <div className='flex flex-row justify-between border-t border-zinc-400 text-[#c5c5c8] py-5 text-sm'>
                <span>
                    @rootit solutions. 2024. All Rights Reserved.
                </span>
                <span className='flex flex-row gap-5'>
                    <svg className='h-5 w-5 fill-[#c5c5c8]' enableBackground="new 0 0 56.693 56.693" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"/></svg>
                    <svg className='h-5 w-5 fill-[#c5c5c8]'  enableBackground="new 0 0 56.693 56.693" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z"/></svg>
                    <svg className='h-5 w-5 fill-[#c5c5c8]'  height="100%" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}} version="1.1" viewBox="0 0 600 600" width="100%" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g transform="matrix(1.01619,0,0,1.01619,44,43.8384)">
                        <path d="M251.921,0.159C183.503,0.159 174.924,0.449 148.054,1.675C121.24,2.899 102.927,7.157 86.902,13.385C70.336,19.823 56.287,28.437 42.282,42.442C28.277,56.447 19.663,70.496 13.225,87.062C6.997,103.086 2.739,121.399 1.515,148.213C0.289,175.083 0,183.662 0,252.08C0,320.497 0.289,329.076 1.515,355.946C2.739,382.76 6.997,401.073 13.225,417.097C19.663,433.663 28.277,447.712 42.282,461.718C56.287,475.723 70.336,484.337 86.902,490.775C102.927,497.002 121.24,501.261 148.054,502.484C174.924,503.71 183.503,504 251.921,504C320.338,504 328.917,503.71 355.787,502.484C382.601,501.261 400.914,497.002 416.938,490.775C433.504,484.337 447.553,475.723 461.559,461.718C475.564,447.712 484.178,433.663 490.616,417.097C496.843,401.073 501.102,382.76 502.325,355.946C503.551,329.076 503.841,320.497 503.841,252.08C503.841,183.662 503.551,175.083 502.325,148.213C501.102,121.399 496.843,103.086 490.616,87.062C484.178,70.496 475.564,56.447 461.559,42.442C447.553,28.437 433.504,19.823 416.938,13.385C400.914,7.157 382.601,2.899 355.787,1.675C328.917,0.449 320.338,0.159 251.921,0.159ZM251.921,45.551C319.186,45.551 327.154,45.807 353.718,47.019C378.28,48.14 391.619,52.244 400.496,55.693C412.255,60.263 420.647,65.723 429.462,74.538C438.278,83.353 443.737,91.746 448.307,103.504C451.757,112.381 455.861,125.72 456.981,150.282C458.193,176.846 458.45,184.814 458.45,252.08C458.45,319.345 458.193,327.313 456.981,353.877C455.861,378.439 451.757,391.778 448.307,400.655C443.737,412.414 438.278,420.806 429.462,429.621C420.647,438.437 412.255,443.896 400.496,448.466C391.619,451.916 378.28,456.02 353.718,457.14C327.158,458.352 319.191,458.609 251.921,458.609C184.65,458.609 176.684,458.352 150.123,457.14C125.561,456.02 112.222,451.916 103.345,448.466C91.586,443.896 83.194,438.437 74.378,429.621C65.563,420.806 60.103,412.414 55.534,400.655C52.084,391.778 47.98,378.439 46.859,353.877C45.647,327.313 45.391,319.345 45.391,252.08C45.391,184.814 45.647,176.846 46.859,150.282C47.98,125.72 52.084,112.381 55.534,103.504C60.103,91.746 65.563,83.353 74.378,74.538C83.194,65.723 91.586,60.263 103.345,55.693C112.222,52.244 125.561,48.14 150.123,47.019C176.687,45.807 184.655,45.551 251.921,45.551Z" style={{fillRule:'nonzero'}}/>
                        <path d="M251.921,336.053C205.543,336.053 167.947,298.457 167.947,252.08C167.947,205.702 205.543,168.106 251.921,168.106C298.298,168.106 335.894,205.702 335.894,252.08C335.894,298.457 298.298,336.053 251.921,336.053ZM251.921,122.715C180.474,122.715 122.556,180.633 122.556,252.08C122.556,323.526 180.474,381.444 251.921,381.444C323.367,381.444 381.285,323.526 381.285,252.08C381.285,180.633 323.367,122.715 251.921,122.715Z" style={{fill:'#c5c5c8',fillRule:'nonzero'}}/>
                        <path d="M416.627,117.604C416.627,134.3 403.092,147.834 386.396,147.834C369.701,147.834 356.166,134.3 356.166,117.604C356.166,100.908 369.701,87.374 386.396,87.374C403.092,87.374 416.627,100.908 416.627,117.604Z" style={{fill:'#c5c5c8',fillRule:'nonzero'}}/>
                        </g>
                    </svg>
                    <svg
                        baseProfile="tiny"
                        height="24px"
                        id="Layer_1"
                        version="1.2"
                        viewBox="0 0 24 24"
                        className='h-5 w-5 fill-[#c5c5c8]' 
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                        <g>
                            <path d="M8,19H5V9h3V19z M19,19h-3v-5.342c0-1.392-0.496-2.085-1.479-2.085c-0.779,0-1.273,0.388-1.521,1.165C13,14,13,19,13,19h-3   c0,0,0.04-9,0-10h2.368l0.183,2h0.062c0.615-1,1.598-1.678,2.946-1.678c1.025,0,1.854,0.285,2.487,1.001   C18.683,11.04,19,12.002,19,13.353V19z" />
                        </g>
                        <g>
                            <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" />
                        </g>
                    </svg>
                </span>
                <span className='flex flex-row gap-[25px]'>
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>
                    <span>Cookies</span>
                </span>

            </div>
        </footer>
    )
}