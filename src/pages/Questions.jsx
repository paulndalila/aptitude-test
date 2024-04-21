import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom"
import { useEffect, useState } from "react";
import notes from '../json-server/notes.json'
import back from '../assets/back.png'

const Questions = () => {
  const navigate = useNavigate();
  const [ isQuizesToggled, setIsQuizesToggled ] = useState(false);
  const [ topic_notes, setTopicNotes ] = useState(null);
  const [ isNotesSet, setIsNotesSet ] = useState(false);
  const params = useParams();

  const topic_title = params.quizId;

  useEffect(()=>{
    const loggedIn = localStorage.getItem("isLoggedIn");
    if(loggedIn !== "true"){
      window.location.reload();
      navigate('/login');
    }

    if((notes[topic_title]) !== undefined){
      setTopicNotes((notes[topic_title])[0]);
    }

    if(topic_notes !== null){
      setIsNotesSet(true);
    }

  }, [topic_notes]);

  const handleNavLinkClick = () => {
    setIsQuizesToggled(true);
  };

  return (
    <>
      <div className="profile_banner">
        <p>{ topic_title }</p>
      </div>      

      <div className="questions_panel">
        <div className="side_bar">
          <NavLink to="/profile"><img src={ back } alt="back"/></NavLink>
          <NavLink onClick={ handleNavLinkClick } to={'/quiz/'+topic_title+'/pq'}>Practice Quiz</NavLink>
          <NavLink onClick={ handleNavLinkClick } to={'/quiz/'+topic_title+'/tq'}>Take Quiz</NavLink>
          <NavLink onClick={ handleNavLinkClick } to={'/quiz/'+topic_title+'/sq'}>Solved Quiz</NavLink>
          <NavLink onClick={ handleNavLinkClick } to={'/quiz/'+topic_title+'/b'}>Bookmarked</NavLink>     
        </div>
        <div className="topic_details">
          { isQuizesToggled? 
            <Outlet/>
            :
            <>  
              { isNotesSet?
                <div className="pt-2 pe-2 notes_section">
                  <h2>{ topic_notes.title }</h2>
                  <p>{topic_notes.description}</p>

                  <h2>Function</h2>
                  <p>{topic_notes.function}</p>

                  <h2>Process</h2>
                  <ul>
                    {topic_notes.process.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>

                  <h2>Benefits</h2>
                  <ul>
                    {topic_notes.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>

                  <h2>Limitations</h2>
                  <ul>
                    {topic_notes.limitations.map((limitation, index) => (
                      <li key={index}>{limitation}</li>
                    ))}
                  </ul>

                  <h2>Security Considerations</h2>
                  <ul>
                    {topic_notes.security.map((consideration, index) => (
                      <li key={index}>{consideration}</li>
                    ))}
                  </ul>

                  <h2>Additional Considerations</h2>
                  <ul>
                    {topic_notes.additionalConsiderations.map((consideration, index) => (
                      <li key={index}>{consideration}</li>
                    ))}
                  </ul>
                </div> : <p className="text-secondary fs-4 pt-2">No notes found on this topic</p>
              }                  
            </>
          }
        </div>        
      </div>
    </>
  )
}

export default Questions