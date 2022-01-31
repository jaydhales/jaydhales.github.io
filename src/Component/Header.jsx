export default function Header(props) {
  return (
    <header className='flex justify-between p-4 shadow'>
      <p className='font-bold'>James Osunkiyesi</p>
      <nav className='hidden flex flex-col gap-4 py-12 w-1/2 bg-white dark:bg-[#0D0E10] fixed right-0 top-0 h-screen md:bg-transparent md:dark:bg-transparent md:h-auto md:relative md:block md:w-auto md:p-0'>
        {[
          ['About', '#home'],
          ['Skills', '#skills'],
          ['Project', '#projects'],
          ['Contact', '#contact'],
        ].map(([title, url]) => (
          <a
            href={url}
            key={title}
            className='p-4 hover:text-[#41f2ff] trans duration-200'
          >
            {title}
          </a>
        ))}
      </nav>
      <button className='md:hidden z-10' onClick={props.handleNav}>
        X
      </button>
    </header>
  );
}
