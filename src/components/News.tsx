type newsProp = {
    news:any
    search:any
}

const News = (props:newsProp) => {
  return (
    <div className="w-screen bg-gray-100">
       <div className="bg-white w-10/12 ml-32 mt-5 rounded-lg p-5 grid grid-cols-3">
        {props?.news?.filter((data:any) => data?.title?.includes(props.search)).map((data:any)=>{
            return <a href={data.url}> <div className="flex items-center  p-2 ml-5">
            <div>
              <h1 className="font-extrabold">{data.source.name}</h1>
              <h1>{data?.title}</h1>
            </div>
            <img src={data?.urlToImage} className="w-16 h-16 rounded-xl" />
          </div>
          </a>
        })}
        
       
      </div>
    </div>
  )
}

export default News
