import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import questionsData from '../json-server/questions.json'

const Solved = (topic) => {

  const navigate = useNavigate();
  const quiz_topic = topic.props;
  const [ questions, setQuestions ] = useState([]);

  useEffect(()=>{
    //check user auth status
    const loggedIn = localStorage.getItem("isLoggedIn");
    if(loggedIn !== "true"){
      window.location.reload();
      navigate('/login');
    }
  }, [ quiz_topic])

  useEffect(() => {
    if(quiz_topic === 'DHCP'){
      setQuestions(questionsData.DHCP);
    }else if(quiz_topic === 'FTP'){
      setQuestions(questionsData.FTP);
    }
  }, []);

  const handleDiscard = ()=>{
    navigate('/profile')
  }

  return (
    <>
      <form className="questions">
          { 
            questions.map((question, index) => (
              <div key={index} className="question">
                <p>{(index+1)+'. '+question.question}</p>
                {question.choices ? (
                  <ol type="a">
                    {question.choices.map((choice, i) => (
                      <li key={i}>{choice}</li>
                    ))}
                  </ol>
                ) : null}
                <div className="answer_field">
                  <p>Answer:</p> <p id={index.toString()} className="answer_text">{ question.answer }</p>
                </div>
              </div>
            )) 
          }

          <div className="questions_buttons">
            <button onClick={ handleDiscard } className="btn btn-danger">Discard</button>
          </div>
        </form>
    </>
  )
}

export default Solved