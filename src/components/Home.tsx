type newsProp = {
  news: any;
};

const Home = (props: newsProp) => {
  console.log(props);
  return (
    <div className="flex  bg-gray-100 pl-28 mt-5 w-screen">
      <div className="grid grid-cols-2 p-5 rounded-md bg-white w-8/12">
        <a href={props.news[7]?.url}>
          <div className="w-72">
            <h1 className="text-blue-600 text-xl">En çok okunan haberler</h1>
            <hr className="mt-3" />
            <hr className="mt-5" />
            <img
              src={props?.news[7]?.urlToImage}
              className="w-72 h-44 rounded-xl"
            />
            <h1 className="font-bold text-sm">
              {props?.news[7]?.source?.name.toUpperCase()}
            </h1>
            <h1 className="text-xl w-72 hover:underline">
              {props?.news[7]?.title}
            </h1>
          </div>
        </a>
        <div className="w-60">
          <h1 className="font-semibold text-xs mt-3">
           
            {props?.news[0]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[0]?.url}>
            <h1 className="text-sm hover:underline">{props?.news[0]?.title}</h1>
          </a>
          <h1 className="font-semibold text-xs mt-3">
            {" "}
            {props?.news[2]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[2]?.url}>
            <h1 className="text-sm hover:underline">{props?.news[2]?.title}</h1>
          </a>
          <h1 className="font-semibold text-xs mt-3">
            {" "}
            {props?.news[3]?.source?.name.toUpperCase()}
          </h1>
          <a href={props?.news[2]?.url}>
            <h1 className="text-sm hover:underline">{props?.news[3]?.title}</h1>
          </a>
        </div>
      </div>

      <div className="bg-white w-4/12 rounded-lg ml-3 p-5">
        <h1 className="text-cyan-800 text-2xl">Sizin için seçilenler</h1>
        <hr className="mt-3"/>
       <a href={props?.news[4]?.url}> <div className="flex items-center mt-3">
          <div>
            <h1 className="font-extrabold">{props?.news[4]?.source.name}</h1>
            <h1>{props?.news[4]?.title}</h1>
          </div>
          <img src={props?.news[4]?.urlToImage} className="w-16 h-16 rounded-xl" />
        </div></a>
        <hr className="mt-3"/>
        <a href={props?.news[5]?.url}><div className="flex items-center mt-3">
          <div>
            <h1 className="font-extrabold">{props?.news[5]?.source.name}</h1>
            <h1>{props?.news[5]?.title}</h1>
          </div>
          <img src={props?.news[5]?.urlToImage} className="w-16 h-16 rounded-xl" />
        </div></a>
        <hr className="mt-3"/>
        <a href={props?.news[6]?.url}><div className="flex items-center mt-3">
          <div>
            <h1 className="font-extrabold">{props?.news[6]?.source.name}</h1>
            <h1>{props?.news[6]?.title}</h1>
          </div>
          <img src={props?.news[6]?.urlToImage} className="w-16 h-16 rounded-xl" />
        </div></a>
      </div>
    </div>
  );
};

export default Home;
