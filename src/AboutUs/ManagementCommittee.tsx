import ImagePlaceholder from '../assets/ImagePlaceholder.png';
import ImagePlaceholder2 from '../assets/ImagePlaceholder2.png';

const ManagementCommittee = () => {
    return(
        <div className="mb-10">
            {/* Header */}
            <div style={{ 
            display: 'flex',
            backgroundImage: `url(${ImagePlaceholder})`,
            backgroundRepeat: 'no-repeat',
            width:'100%',
            height:'750px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>
                <h1 className='text-5xl font-bold'>Management Committee</h1>
            </div>

            {/* Banner */}
            <div className="bg-primary-300 flex items-center justify-center" style={{height:150}}>
                <h1 className="text-3xl text-white font-bold text-center">
                    Senior Leadership Team
                </h1>
            </div>

            {/* Senior Leadership Team Profiles */}
            <div className='grid grid-cols-1 md:grid-cols-3' style={{height:700}}>
                <div className='flex flex-1 items-center justify-center'>
                    <h1 style={{ 
                    display: 'flex',
                    backgroundImage: `url(${ImagePlaceholder})`,
                    backgroundRepeat: 'no-repeat',
                    width:'100%',
                    height:'100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    className="text-3xl text-black font-bold text-center">
                    Yash Mehta
                    President
                    </h1>
                </div>
                <div className='flex flex-1 items-center justify-center'>
                    <h1 style={{ 
                    display: 'flex',
                    backgroundImage: `url(${ImagePlaceholder})`,
                    backgroundRepeat: 'no-repeat',
                    width:'100%',
                    height:'100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    className="text-3xl text-black font-bold text-center">
                    Z Sheen
                    Vice President
                    </h1>
                </div>
                <div className='flex flex-1 items-center justify-center'>
                    <div style={{ 
                    display: 'flex',
                    backgroundImage: `url(${ImagePlaceholder})`,
                    backgroundRepeat: 'no-repeat',
                    width:'100%',
                    height:'100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    className="text-3xl text-black font-bold text-center">
                    Anirudh B
                    Treasurer
                    </div>
                </div>
            </div>

            <div className="m-20"></div>

            {/* Banner */}
            <div className="bg-primary-300 flex items-center justify-center" style={{height:150}}>
            <h1 className="text-3xl text-white font-bold text-center">
                Operation Team
            </h1>
            </div>

            {/* Operation Team Profiles */}
            <div className='grid grid-cols-1 md:grid-cols-3' style={{height:700}}>
                <div className='flex flex-1 items-center justify-center'>
                    <h1 style={{ 
                    display: 'flex',
                    backgroundImage: `url(${ImagePlaceholder})`,
                    backgroundRepeat: 'no-repeat',
                    width:'100%',
                    height:'100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    className="text-3xl text-black font-bold text-center">
                    Ryan
                    Director of Publicity and Marketing
                    </h1>
                </div>
                <div className='flex flex-1 items-center justify-center'>
                    <h1 style={{ 
                    display: 'flex',
                    backgroundImage: `url(${ImagePlaceholder})`,
                    backgroundRepeat: 'no-repeat',
                    width:'100%',
                    height:'100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    className="text-3xl text-black font-bold text-center">
                    Stephanie
                    Director of Business Development
                    </h1>
                </div>
                <div className='flex flex-1 items-center justify-center'>
                    <h1 style={{ 
                    display: 'flex',
                    backgroundImage: `url(${ImagePlaceholder})`,
                    backgroundRepeat: 'no-repeat',
                    width:'100%',
                    height:'100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    className="text-3xl text-black font-bold text-center">
                    Lucius
                    Secretary
                    </h1>
                </div>
            </div>

            <div className="m-20"></div>

        </div>


    )
}



export default ManagementCommittee;