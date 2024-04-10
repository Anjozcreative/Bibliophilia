function books({ src, title }) {
  return (
    <div className="p-2 grid">
        <img 
        src={src}/>
        <p className=" font-body font-semibold md:text-[24px] text-[12px] leading-8">{title}</p>
    </div>
  )
}

export default books