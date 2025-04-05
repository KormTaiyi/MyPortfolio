import img from "../assets/2.jpg"
const AboutCom = () => {
  return (
    <main className="w-full min-h-screen px-0 sm:px-8 text-white flex flex-col md:flex-row items-center justify-between py-8 sm:gap-2 gap-8">
        <section className="w-full md:w-[50%] px-8 sm:px-2 sm:text-left text-center ">
          <h1 className="text-4xl font-light sm:mb-5 mb-8  underline underline-offset-8 decoration-dotted">About Me</h1>
          <p className="sm:text-lg"> I am an entry-level full stack web developer hand on experience in building frontend web application using HTML, CSS, Tailwind, JavaScript, TypeScript, ReactJS, NextJs. I also experienced in backend development using Java, SpringBoot, Postgresql, MySQL. Passionate about learning and staying updated with new technologies, I also have strong problem-solving and communication skill.</p>
        </section>
        <section >
            <img src={img} alt="" className="w-[270px] h-[270px] md:w-[320px] md:h-[320px] rounded-[100%]"/>
        </section>
    </main>
  )
}

export default AboutCom