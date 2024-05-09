import Button from "./Button";
import heroBgImage from '../assets/hero_bg.png'; // Import the image

export default function Contact() {
    return (
        <section className="relative m-[5%] "
            // style={{
            //     backgroundImage: `url(${heroBgImage})`, // Use the imported image
            //     backgroundSize: "cover", // Set background size to cover
            //     backgroundPosition: "center", // Center the background image
            // }}
        >   
            <img src={heroBgImage} alt="Sample" className="object-cover absolute h-full w-full top-0 left-0 z-0 rounded-xl"/>
            <div className=" p-[5%] bg-black/85 relative flex flex-row justify-between items-center rounded-xl ">
                <div className="space-y-4">
                    <h1 className="text-[#fcfcfe] text-5xl font-bold">{`Let's Discuss`}</h1>
                    <p className="text-[#c5c5c8] text-xl">{"We'd love to hear from you !"}</p>
                </div>
                <Button />
            </div>
        </section>
    );
}
