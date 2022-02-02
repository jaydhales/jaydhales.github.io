export default function Header(props) {
  return (
    <header className='flex justify-between p-4 shadow z-10'>
      <p className='font-bold flex items-center'>
        <span>
          <img
            src='./assets/Avatar/Avatar2.webp'
            alt=''
            className='w-8 p-1 mr-2 bg-[#41f2ff] bg-opacity-25 rounded-full'
          />
        </span>
        James Osunkiyesi
      </p>
      <nav className='hidden flex flex-col gap-4 py-12 w-1/2 bg-white dark:bg-[#0D0E10] fixed right-0 top-0 h-screen md:bg-transparent md:dark:bg-transparent md:h-auto md:relative md:block md:my-auto md:w-auto md:p-0 z-10'>
        {[
          ['About', '#home'],
          ['Skills', '#skills'],
          ['Project', '#projects'],
          ['Contact', '#contact'],
        ].map(([title, url]) => (
          <a
            href={url}
            key={title}
            className='p-4 md:py-0 hover:text-[#41f2ff] trans duration-200'
          >
            {title}
          </a>
        ))}
      </nav>
      <button className='md:hidden z-20 mx-4' onClick={props.handleNav}>
        <div className={!props.navMode ? 'block' : 'hidden'}>
          <i className='fas fa-bars fa-2x'></i>
        </div>

        <div className={props.navMode ? 'block' : 'hidden'}>
          <i className='fas fa-times fa-2x'></i>
        </div>
      </button>
    </header>
  );
}
