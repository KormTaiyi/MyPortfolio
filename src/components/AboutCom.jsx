import img from "../assets/2.jpg"
const AboutCom = () => {
  return (
    <main className="w-full min-h-screen  text-white flex flex-col md:flex-row items-center justify-between py-8 sm:gap-2 gap-8">
        <section className="w-full md:w-[50%] px-4 sm:px-2 sm:text-left text-center ">
          <h1 className="text-4xl font-light sm:mb-5 mb-8  underline underline-offset-8 decoration-dotted">About Me</h1>
          <p className="sm:text-lg"> I am an entry-level full-stack web developer with hands-on experience in building frontend web applications using HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, and Next.js. On the backend, I have experience working with Java, Spring Boot, PostgreSQL, and MySQL. Passionate about continuous learning and staying current with new technologies, I also bring strong problem-solving and communication skills to every project.</p>
        </section>
        <section>
            <img src={img} alt="" className="w-[270px] h-[270px] md:w-[320px] md:h-[320px] rounded-[100%]"/>
        </section>
    </main>
  )
}

export default AboutCom