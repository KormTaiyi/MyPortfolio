const CardCom = ({title,image,languages}) => {
  return (
    <section className="flex items-center px-2 w-[400px] h-[110px] bg-white rounded-lg overflow-hidden">
      <img src={image} alt="" className="h-[85%] sm:h-full object-contain"/>
      <div className="w-fit py-2">
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm"> {languages}</p>
      </div>
    </section>
  )
} 

export default CardCom