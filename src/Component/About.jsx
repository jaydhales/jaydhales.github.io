export default function About() {
  return (
    <main className='grid place-items-center my-1 h-[700px]' id="home">
      <img src="./assets/avatar.svg" alt="" />
      <h1 className="m-0">Hi, I'm James</h1>
      <p className='text-2xl sm:text-4xl md:text-5xl font-semibold'>
        Frontend Web Developer
      </p>
      <p>
        I build Responsive Web Pages with <b>React JS</b> and{' '}
        <b>Tailwind CSS</b>
      </p>

      <a
        href='#contact'
        className=' uppercase bg-[#0D0E10] text-white dark:bg-white dark:text-[#0D0E10] py-4 px-8 rounded-full hover:scale-105 trans duration-200 mx-4'
      >
        Connect with me
      </a>
    </main>
  );
}
