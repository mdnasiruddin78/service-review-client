

const Slider = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover lg:h-[500px] h-[300px]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;