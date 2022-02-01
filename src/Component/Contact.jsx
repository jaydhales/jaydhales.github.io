export default function Contact({ inputRef }) {
  return (
    <>
      <div
        className='mt-12 grid grid-cols-1 lg:grid-cols-2 w-full place-items-center'
        id='contact'
      >
        <div className='relative h-[300px] sm:h-[500px] w-full'>
          <div className='absolute w-[250px] h-[250px] z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 sm:-translate-x-[120%]'>
            <img src='./assets/Avatar/Avatar3.webp' alt='' className='' />
          </div>
          <div className='circle bg-[#f0f0f0] dark:bg-[#0D0E10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
          <div className='circle bg-[#41f2ff] bg-opacity-20 white top-1/2 -translate-y-[60%] left-1/2 -translate-x-[40%]'></div>

          <h1 className='absolute top-full text-left sm:top-[50%] -translate-y-[100%] left-1/2 -translate-x-1/2 w-60'>
            Got a project? <u className=''>Let's Talk!</u>
          </h1>
        </div>

        <div className='contact-form'>
          <div className='flex flex-col items-center w-full p-8 shadow'>
            <h1 className='text-3xl font-extrabold mb-8'>Contact Us</h1>

            <form
              action='https://getform.io/f/1f6a7226-8b31-464a-957d-4d4d9fc3e517'
              method='POST'
              encType='multipart/form-data'
              target='_blank'
              onSubmit={(e) => console.log(e.target)}
            >
              <div className='flex m-4 flex-wrap gap-4 justify-center'>
                <div className='shadow w-full sm:w-auto dark:bg-[#0d0e10]'>
                  <input
                    ref={inputRef}
                    type='text'
                    className='p-2 w-full bg-[#f0f0f0] dark:text-[#0d0e10]'
                    name='name'
                    id='name'
                    placeholder='Your Name (required)'
                    required={true}
                  />
                </div>

                <div className='shadow w-full sm:w-auto dark:bg-[#0d0e10]'>
                  <input
                    type='email'
                    className='p-2 w-full bg-[#f0f0f0] dark:text-[#0d0e10]'
                    name='email'
                    id='email'
                    placeholder='Your E-mail (required)'
                    required={true}
                  />
                </div>
              </div>

              <div className='shadow dark:bg-[#0d0e10] m-4'>
                <textarea
                  name='message'
                  className='w-full p-2 bg-[#f0f0f0] dark:text-[#0d0e10] h-24 info'
                  id='message'
                  placeholder='Your Message'
                  rows='8'
                  required=''
                ></textarea>
              </div>

              <div className='w-max flex m-auto bg-[#0D0E10] rounded-full text-white dark:bg-white dark:text-[#0D0E10]'>
                <input
                  type='submit'
                  className=' submit-btn w-24 p-2 mx-auto'
                  value='Send'
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='socials flex w-max my-8 mx-auto gap-4 sm:gap-8 lg:gap-12 justify-between'>
        {[
          ['github-square', 'https://github.com/jaydhales'],
          ['google-plus-square', 'mailto:jaydhales@gmail.com'],
          ['linkedin-square', 'https://linkedin.com/in/jaydhales'],
          ['twitter-square', 'https://twitter.com/jaydhales1'],
          ['whatsapp', 'https://wa.me/message/FVOGJM63L5GCG1'],
        ].map(([name, url]) => (
          <a href={url} key={name}>
            <i
              className={`fa fa-${name} text-4xl sm:text-5xl lg:text-7xl shadow-lg hover:shadow-xl trans duration-100 rounded p-1`}
            ></i>
          </a>
        ))}
      </div>
    </>
  );
}
