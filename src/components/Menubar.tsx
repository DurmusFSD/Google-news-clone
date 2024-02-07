type menuProp = {
  setMenu:any
}

const Menubar = (props:menuProp) => {
  return (
    <div className="flex items-center shadow-sm p-2 w-screen bg-white">
      <h1 onClick={() => props?.setMenu("Ana Sayfa")} className="ml-4 font-medium to-gray-500 text-base hover:text-black cursor-pointer">Ana Sayfa</h1>
      <h1 onClick={() => props?.setMenu("Sizin için")} className="ml-7 font-medium to-gray-500 text-base hover:text-black cursor-pointer">Sizin için</h1>
      <h1 onClick={() => props?.setMenu("Takip edilenler")} className="ml-7 font-medium to-gray-500 text-base hover:text-black cursor-pointer">Takip edilenler</h1>
      <h1 className="ml-7 to-gray-200">|</h1>
      <h1 onClick={() => props?.setMenu("Türkiye")} className="ml-7 font-medium to-gray-500 text-base hover:text-black cursor-pointer">Türkiye</h1>
      <h1 onClick={() => props?.setMenu("Dünya")} className="ml-7 font-medium to-gray-500 text-base hover:text-black cursor-pointer">Dünya</h1>
      <h1 onClick={() => props?.setMenu("Yerel")} className="ml-7 font-medium to-gray-500 text-base hover:text-black cursor-pointer">Yerel</h1>
      <h1 onClick={() => props?.setMenu("İş")} className="ml-7 font-medium to-gray-500 text-base hover:text-black cursor-pointer">İş</h1>
      <h1 onClick={() => props?.setMenu("Bilim ve Teknoloji")} className="ml-7 font-medium to-gray-500 text-base hover:text-black cursor-pointer">Bilim ve Teknoloji</h1>
      <h1 onClick={() => props?.setMenu("Eglence")} className="ml-7 font-medium to-gray-500 text-base hover:text-black cursor-pointer">Eglence</h1>
      <h1 onClick={() => props?.setMenu("Spor")} className="ml-7 font-medium to-gray-500 text-base hover:text-black cursor-pointer">Spor</h1>
      <h1 onClick={() => props?.setMenu("Magazin")} className="ml-7 font-medium to-gray-500 text-base hover:text-black cursor-pointer">Saglık</h1>
    </div>
  )
}

export default Menubar
