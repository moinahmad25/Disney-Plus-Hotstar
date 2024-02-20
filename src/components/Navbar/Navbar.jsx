import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Navbar.css'
// assets import
import Logo from '../../assets/images/logo.svg'
import home_icon from '../../assets/images/home-icon.svg'
import search_icon from '../../assets/images/search-icon.svg'
import watchlist_icon from '../../assets/images/watchlist-icon.svg'
import original_icon from '../../assets/images/original-icon.svg'
import movie_icon from '../../assets/images/movie-icon.svg'
import series_icon from '../../assets/images/series-icon.svg'

//firebase import
import { app } from '../../firebase'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

//redux import
import { useDispatch, useSelector } from 'react-redux'
import { selectUserName, selectUserPhoto, saveUserLoginInfo, removeUserLoginInfo } from '../../features/userSlice/userSlice'


const provider = new GoogleAuthProvider();
const auth = getAuth(app)

const Navbar = () => {
  // hooks
  const navigate = useNavigate()
  const [logOut, setLogOut] = useState(false)
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user){
        setUser(user)
        setLogOut(false)
        navigate('/home')
      }
    })
  }, [userName])

  const signUpUser = () => {
    if(!userName){
      signInWithPopup(auth, provider).then((result) => {
        setUser(result.user)
      }).catch((error) => {
        alert(error.message);
      })
    }
    else if(userName){
      auth.signOut().then(() => {
        dispatch(removeUserLoginInfo())
        navigate('/')
      }).catch((error) => {
        alert(error.message)
      })
    }
  }
  
  // logging in user
  const setUser = (user) => {
    dispatch(
      saveUserLoginInfo({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    )
  }



  const showLogOutbtn = () =>{
    setLogOut(!logOut)
  }



  return (
    <div className='navbar'>
      {
        (!userName) ?
          (
            <>
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="btn">
                <button className='info_btn' onClick={signUpUser}>Login</button>
              </div>
            </>
          ) :
          (
            <>
              <div className="left">
                <div className="logo">
                  <img src={Logo} alt="" />
                </div>
                <nav className="navigation">
                  <Link to='/home'>
                    <li>
                      <img src={home_icon} alt="" />
                      <p>Home</p>
                    </li>
                  </Link>
                  <Link>
                    <li>
                      <img src={search_icon} alt="" />
                      <p>Search</p>
                    </li>
                  </Link>
                  <Link>
                    <li>
                      <img src={watchlist_icon} alt="" />
                      <p>Watchlist</p>
                    </li>
                  </Link>
                  <Link>
                    <li>
                      <img src={original_icon} alt="" />
                      <p>originals</p>
                    </li>
                  </Link>
                  <Link>
                    <li>
                      <img src={movie_icon} alt="" />
                      <p>movie</p>
                    </li>
                  </Link>
                  <Link>
                    <li>
                      <img src={series_icon} alt="" />
                      <p>series</p>
                    </li>
                  </Link>
                </nav>
              </div>
              <div className="profile" onClick={showLogOutbtn}>
                <img src={userPhoto} alt="profile_img" />
              </div>
              {
                logOut ? (
                <>
                  <button onClick={signUpUser} className="signOut_btn">
                    Sign out
                  </button>
                </>
                ) : null
              }
            </>
          )
      }
    </div>
  )
}

export default Navbar
