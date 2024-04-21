import { useParams, useNavigate } from "react-router-dom"
import Practice from './Practice'
import Take from './Take'
import Solved from './Solved'
import Bookmarked from './Bookmark'
import { useEffect } from "react";

const Quizes = () => {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(()=>{
    const loggedIn = localStorage.getItem("isLoggedIn");
    if(loggedIn !== "true"){
      window.location.reload();
      navigate('/login');
    }
  }, []);

  const topic = params.quizId;
  const topic_quiz_type = params.type;

  var quiz_type = '';

  switch (topic_quiz_type) {
    case 'pq':
      quiz_type = 'Practice Questions'      
      break;

    case 'tq':
      quiz_type = 'Take Quiz'      
      break;

    case 'sq':
      quiz_type = 'Solved Questions'      
      break;

    case 'b':
      quiz_type = 'Bookmarked Questions'      
      break;
  
    default:
      break;
  }

  function renderComponent(){
    if(topic_quiz_type === 'pq'){

      return <Practice props={topic}/>
    }else if(topic_quiz_type === 'tq'){

      return <Take props={topic}/>
    }else if(topic_quiz_type === 'sq'){

      return <Solved props={topic}/>
    }else{

      return <Bookmarked props={topic}/>
    }
  }

  useEffect(()=>{

    renderComponent();

  }, [quiz_type])

  return (
    <div className="pt-2">
      <h5>{quiz_type}</h5>
      <div>
        {renderComponent()}
      </div> 
    </div>
  )
}

export default Quizes