export default function Skills() {
  return (
    <div className='mt-10 p-4' id='skills'>
      <h1>My Skills</h1>
      <div className='grid grid-cols-3 text-center place-items-center gap-6 sm:w-[450px] md:w-1/2 m-auto'>
        {[
          ['HTML5', 'html'],
          ['CSS3', 'css'],
          ['Javascript', 'js'],
          ['React', 'react'],
          ['Tailwind CSS', 'tailwind-css'],
        ].map(([name, src]) => (
          <div
            className='skills-card shadow dark:shadow-gray-800 p-1'
            key={name}
          >
            <img
              src={`./assets/languages/${src}.svg`}
              alt={name}
              className='p-4 w-40 h-36'
            />
            <p className='font-bold'>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
