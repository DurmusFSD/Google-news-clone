import { signInWithPopup } from "firebase/auth"
import google from "../assets/google.png"
import search from "../assets/search.png"
import { auth, googleProvider } from "../firebase/setup"
import account from "../assets/user.png"
import { useState } from "react"
import Profile from "./Profile"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type searchProp = {
  setSearch:any
}

const Navbar = (props:searchProp) => {

  const navigate = useNavigate()

  const [profile, setProfile] = useState(false)

    const googleSignin = async () => {
        try{
            await signInWithPopup(auth,googleProvider)
            auth?.currentUser?.email && toast.success("Başarılı bir şekilde oturum açıldı")
            setTimeout(()=>{
              auth?.currentUser?.email && navigate("/")
            },2000)
            
        }catch(err){
            console.error(err)
            const error:any = err
            toast.error(error)
        }
    }

  return (
    <>
    <ToastContainer autoClose={3000}/>

    <div className="flex items-center w-screen bg-white">
      <div className="flex items-center ml-5">
          <img src={google} className="w-20 h-20"/>
          <h1 className="text-gray-500 text-2x1 font-medium ml-3">Haberler</h1>
      </div>
      <div className="ml-32 bg-zinc-100 flex items-center p-3 w-6/12 rounded-lg">
        <img src={search} className="w-5 h-5" />
        <input onChange={(e)=> props?.setSearch(e.target.value)} placeholder="Konu, konum ve kaynak ara"
        className="ml-4 bg-zinc-100 w-6/12 outline-none" />
      </div>
      {auth?.currentUser ?  <img src={auth?.currentUser?.photoURL ? auth?.currentUser?.photoURL: account} onClick={()=> setProfile(true)} className="rounded-full w-9 h-9 ml-60 cursor-pointer"/>: <button onClick={googleSignin} className="bg-blue-600 text-white p-2 w-28 rounded-md ml-44">Giriş Yap</button>}
    {profile && <Profile setProfile = {setProfile}/>}
    </div>
    </>
   
  )
}

export default Navbar
