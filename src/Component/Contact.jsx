export default function Contact() {
  return (
    <div
      className='mt-12 grid grid-cols-1 lg:grid-cols-2 w-full place-items-center'
      id='contact'
    >
      <div className='relative h-[500px]'>
        <div className='circle bg-[#f0f0f0] dark:bg-[#0D0E10] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
        <div className='circle bg-[#41f2ff] bg-opacity-20 white top-1/2 -translate-y-[60%] left-1/2 -translate-x-[40%]'></div>
        <h1 className='absolute text-left top-[50%] -translate-y-[100%] left-1/2 -translate-x-1/2 w-60'>
          Got a project? <u className=''>Let's Talk!</u>
        </h1>
      </div>
      <div className='contact-form'>
        <div className='flex flex-col items-center w-full p-8 shadow'>
          <h1 className='text-3xl font-extrabold mb-8'>Contact Us</h1>

          <form
            action='https://getform.io/f/1f6a7226-8b31-464a-957d-4d4d9fc3e517'
            method='POST'
            enctype='multipart/form-data'
            target='_blank'
            onsubmit={(e) => console.log(e.target)}
          >
            <div className='flex m-4 flex-wrap gap-4 justify-center'>
              <div className='shadow dark:bg-[#0d0e10]'>
                <input
                  type='text'
                  className='p-2 bg-[#f0f0f0]'
                  name='name'
                  id='name'
                  placeholder='Your Name (required)'
                  required=''
                />
              </div>

              <div className='shadow dark:bg-[#0d0e10]'>
                <input
                  type='email'
                  className='p-2 bg-[#f0f0f0]'
                  name='email'
                  id='email'
                  placeholder='Your E-mail (required)'
                  required=''
                />
              </div>
            </div>

            <div className='shadow dark:bg-[#0d0e10] m-4'>
              <textarea
                name='message'
                className='w-full p-2 bg-[#f0f0f0] h-24 info'
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
  );
}
