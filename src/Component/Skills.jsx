export default function Skills() {
  return (
    <div className='mt-10 p-4' id='skills'>
      <h1>My Skills</h1>
      <div className='grid grid-cols-3 text-center place-items-center gap-6 sm:w-[600px] md:w-3/4 lg:w-1/2 m-auto'>
        {[
          ['HTML5', 'html'],
          ['CSS3', 'css'],
          ['Javascript', 'js'],
          ['React', 'react'],
          ['Tailwind CSS', 'tailwind-css'],
        ].map(([name, src]) => (
          <div
            className='skills-card p-1 w-full h-full'
            key={name}
          >
            <img
              src={`./assets/languages/${src}.svg`}
              alt={name}
              className='p-4 h-full'
            />
            <p className='font-bold p-0'>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
