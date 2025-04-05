import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa"

const HeroSectionCom = () => {
  return (
    <main id="heroSection" className="grid h-[90vh] place-content-center px-2">
        <section className="text-center text-white">
          <p className="text-lg sm:text-xl border rounded-xl border-white font-bold text-gray-300 px-4 py-1 inline">Web developer</p>
          <h1 className="text-5xl sm:text-6xl font-bold my-4 bg-[linear-gradient(65deg,_rgb(0,128,128),_rgb(255,105,180))] bg-clip-text text-transparent">Hello<span className="font-light">,</span> I'm Taiyi</h1>
          <p className="text-sm sm:text-lg ">Passionate about creating web application development.</p>
          <p className="text-sm sm:text-lg">Let's build something amazing together!</p>
        </section>
        <div className="flex justify-center text-gray-300 mt-4 gap-4">
          <a target="blank" href="https://www.facebook.com/korm.taiyi.5" className="text-3xl sm:text-4xl"><FaFacebook/></a>
          <a target="blank" href="https://github.com/KormTaiyi" className="text-3xl sm:text-4xl"><FaGithub/></a>
          <a target="blank" href="https://t.me/taiyi289"  className="text-3xl sm:text-4xl"><FaTelegram/></a>
        </div>
    </main>
  )
}

export default HeroSectionCom