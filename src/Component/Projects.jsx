import '../styles/project.css';
export default function Projects() {
  const projects = [
    ['Unsplash Clone', 'https://unsplash-clone-nu.vercel.app/', 'unsplash'],
    [
      'Space Tourism Website',
      'https://space-tourism-website-eight.vercel.app/',
      'space',
    ],
    ['E-Commerce Page', 'https://e-commerce-page-ten.vercel.app/', 'ecommerce'],
    [
      'Countries Stats',
      'https://rest-countries-api-roan.vercel.app/',
      'countries',
    ],
    ['Ordel Landing Page', 'https://ordel-project.vercel.app/', 'ordel'],
    [
      'Crowdfunding page',
      'https://crowdfunding-product-page-ruddy.vercel.app/',
      'crowdfunding',
    ],
  ];

  return (
    <div className='mt-12' id='projects'>
      <h1>My Projects</h1>
      <div className='project-container grid gap-8 grid-cols-1 p-8 md:p-0 md:grid-cols-2 lg:grid-cols-10'>
        {projects.map(([title, url, src]) => (
          <div
            className='project-card relative group shadow-md lg:shadow-lg  overflow-hidden'
            key={title}
          >
            <a href={url} target='_blank' rel='noreferrer' className=''>
              <img
                src={`./assets/${src}.png`}
                alt={url}
                className='object-cover h-full group-hover:scale-110 trans duration-500'
              />
              <div className='desc bg-[#0D0E10] bg-opacity-0 group-hover:bg-opacity-50 flex absolute top-0 h-full w-full items-center justify-center trans duration-500'>
                <p className='p-4 rounded-full bg-white dark:bg-[#0D0E10]  scale-0 transition-all ease-out duration-200 group-hover:scale-75'>
                  {title}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
