import PropTypes from 'prop-types';

export default function Features({feature,index}) {

    return(
        <div className="grid grid-cols-2 items-center justify-center mx-[3%] ">
            {/* <div className='flex flex-row h-[400px]'> */}
                <div className={`flex flex-col p-10 h-full justify-between  gap-5 ${index%2==1?'order-last ':''}`}>
                    <h1 className="text-4xl font-medium">{feature.title}</h1>
                    <h1 className="text-2xl text-slate-600 ">
                        {feature.content}
                    </h1>
                    <div className="flex flex-row gap-5">
                        {feature.sub.map((subFeature, index) => (
                            <button key={index} className="bg-[#a58ee6] p-[1.5%]  rounded-md  text-white">{subFeature}</button>
                        ))}
                    </div>
                </div>
                <img src={feature.img} alt={feature.title} className={`w-full h-full  object-fill px-10 py-5 rounded-md ${index % 2 === 1 ? 'pr-5' : 'pl-5'}`} />
            {/* </div> */}
        </div>
    )
}
Features.propTypes = {
    feature: PropTypes.shape({
        img: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        sub: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    index:PropTypes.number.isRequired
};
