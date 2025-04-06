import CardCom from "./CardCom"
import img from "../assets/css.png"

const ProjectCom = () => {
  return (
    <main className="w-full flex bg-green-200 justify-evenly gap-2 flex-wrap py-8 px-4">
        <CardCom title="banana" languages="HTML, CSS ,Tailwind, JavaScript, ReactJS, NextJs" image={img}/>
        <CardCom title="banana" languages="HTML, CSS ,Tailwind, JavaScript, ReactJS, NextJs" image={img}/>
        <CardCom title="banana" languages="HTML, CSS ,Tailwind, JavaScript, ReactJS, NextJs" image={img}/>
    </main>
  )
}

export default ProjectCom