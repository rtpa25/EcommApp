/** @format */

interface Props {
  id: number;
  img: string;
  title: string;
  description: string;
  bg: string;
}

const SliderElement: React.FC<Props> = ({ img, title, description, bg }) => {
  return (
    <div
      className='flex items-center h-screen w-screen'
      style={{ backgroundColor: bg }}>
      <div className='flex-1 h-full'>
        <img src={img} alt='SUMMER SALE' className='h-4/5 w-full' />
      </div>
      <div className='flex-1 p-16'>
        <h1 className='text-8xl font-semibold'>{title}</h1>
        <p className='mx-0 my-16 text-xl font-normal tracking-widest'>
          {description}
        </p>
        <button className='p-3.5 text-xl font-normal border border-solid border-black'>
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default SliderElement;
