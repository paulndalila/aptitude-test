import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topics from "../components/Topics";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user access from local storage and set isLoggedIn to false
    localStorage.removeItem("isLoggedIn");
    navigate('/login');
    window.location.reload();
  };

  useEffect(()=>{
    const loggedIn = localStorage.getItem("isLoggedIn");
    if(loggedIn !== "true"){
      window.location.reload();
      navigate('/login');
    }
  }, [])

  return (
    <div>
      <div className="profile_banner">
        <p>Student Profile</p>
      </div>
      <div className="user_profile">
        <div>
          <p>Name:</p>
          <p>Hope Kerubo</p>
        </div>
        <div>
          <p>Email:</p>
          <p>kerubohopes@gmail.com</p>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="topics">
        <h4>All Topics</h4>
        <Topics/>
      </div>
    </div>
  )
}

export default Profile