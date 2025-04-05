const CardCom = ({title,image,languages}) => {
  return (
    <section className="w-[220px] sm:w-[260px] min-h-[280px] rounded-xl overflow-hidden shadow-lg shadow-gray-400">
        <img src={image} alt="" className="w-full h-[180px] sm:h-[220px] object-cover"/>
        <div className="px-2 py-2">
            <article className="text-xl sm:text-2xl"><a href="" className="text-white">{title}</a></article>
            <p className="bg-[linear-gradient(65deg,_rgb(0,128,128),_rgb(255,255,255))] bg-clip-text text-transparent">{languages}</p>
        </div>
    </section>
  )
} 

export default CardCom