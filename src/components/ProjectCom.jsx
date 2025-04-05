import CardCom from "./CardCom"
import img from "../assets/css.png"

const ProjectCom = () => {
  return (
    <main className="w-full flex justify-evenly gap-8 flex-wrap py-8">
        <CardCom title="banana" languages="HTML, CSS ,Tailwind, JavaScript, ReactJS, NextJs" image={img}/>
    </main>
  )
}

export default ProjectCom