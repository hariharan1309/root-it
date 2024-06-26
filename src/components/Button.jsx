export default function Button() {
    return(
        <button className='btn-gr text-white font-medium px-5 py-3 rounded-full'>
            <div className="flex flex-row gap-2 items-center group hover:scale-105 duration-200">
                <span>Contact Us</span>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-105"><title/>
                    <g data-name="Layer 2" id="Layer_2"><path d="M15.31,6.85a1,1,0,0,0,1,1h6.51L6.17,24.5a1,1,0,0,0,1.41,1.41L24.21,9.28v6.46a1,1,0,1,0,2,0v-9a.9.9,0,0,0-.9-.9h-9A1,1,0,0,0,15.31,6.85Z" fill="#FFFFFF"/></g>
                </svg>
            </div>
        </button>
    )
}