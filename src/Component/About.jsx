export default function About({ toContact }) {
  return (
    <main
      className=' mt-12 grid md:place-items-center my-1 gap-4 h-auto'
      id='home'
    >
      <div className='w-[250px] h-[250px] rounded-full bg-[#41f2ff] bg-opacity-20 relative m-auto'>
        <img
          src='./assets/Avatar/Avatar4.webp'
          alt=''
          className='absolute top-6'
        />
      </div>

      <h1 className='mx-4 my-0 p-0'>Hi, I'm James</h1>
      <p className='text-2xl sm:text-4xl md:text-5xl font-semibold text-center'>
        Frontend Web Developer
      </p>
      <p className='sm:text-center'>
        Building Responsive Web Pages with <b>React JS</b> and{' '}
        <b>Tailwind CSS</b>
      </p>
      <p className='w-full m-auto sm:text-center sm:w-[600px]'>
        I build Websites and Web Apps for the purpose of building an online
        space and boosting the growth and performance of my clients.
      </p>

      <a
        href='!#'
        className=' uppercase bg-[#0D0E10] text-white dark:bg-white dark:text-[#0D0E10] py-4 px-8 rounded-full hover:scale-105 trans duration-200 mx-auto w-max'
        onClick={toContact}
      >
        Connect with me
      </a>

      <a
        href='https://drive.google.com/file/d/1CkcTKd_q3bV_aNceaGSEFwzR3ZeVq2us/view?usp=sharing'
        className='hover:underline text-2xl text-center'
      >
        My CV
      </a>
    </main>
  );
}
