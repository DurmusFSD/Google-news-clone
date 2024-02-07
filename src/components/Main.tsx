import { useEffect, useState } from "react"
import Menubar from "./Menubar"
import Navbar from "./Navbar"
import Home from "./Home"
import moment from "moment"
import News from "./News"


const Main = () => {

    const [news, setNews] = useState<any>([])  
    const [search, setSearch] = useState("")
    const [menu, setMenu] = useState("")

    const getNews = async () => {
        try{
            await fetch(`https://newsapi.org/v2/everything?q=${menu ? menu : "politics"}&sortBy=popularity&apiKey=0d9b5565795b4f2c99559e2b2248da3d`).then(res => res.json())
        .then(json => setNews(json.articles))
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        getNews()
    },[menu])

    const date:any = new Date()

  return (
    <div className="bg-gray-100">
      <Navbar setSearch={setSearch}/>
      <Menubar setMenu={setMenu}/>
      <div className="bg-gray-100 pt-5 w-screen">
        <h1 className="ml-28 text-3xl">Özetler</h1>
        <h1 className="ml-28 text-gray-500 text-sm mt-2">{moment(date).format("DD-MM-YYYY")}</h1>
      <Home news={news}/>
      </div>
      <News news={news} search={search}/>
    </div>
  )
}

export default Main
