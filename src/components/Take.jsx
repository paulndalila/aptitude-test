import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import questionsData from '../json-server/questions.json'

const Take = (topic) => {


  const navigate = useNavigate();
  const quiz_topic = topic.props;

  const [ userAnswers, setUserAnswers ] = useState([]);
  const [ error, setError ] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [ numberQuiz, setNumberQuiz ] = useState(0);

  const [ secondsSet, setSeconds ] = useState(0);

  const [ isTimerSet, setIsTimerSet ] = useState(false);
  const [timer, setTimer] = useState(null);
  const [timerSeconds, setTimerSeconds] = useState(null);
  const [ timeRemaining, setTimeRemaining ] = useState(0);
  const [ hasCompleted, setHasCompleted ] = useState(false);
  const [ calculatedScore, setCalculatedScore ] = useState(null);

  useEffect(()=>{
    //check user auth status
    const loggedIn = localStorage.getItem("isLoggedIn");
    if(loggedIn !== "true"){
      window.location.reload();
      navigate('/login');
    }

    //display answers submitted
    //console.log(userAnswers)

    if(hasCompleted){
      calculateScore();
    }

  }, [ quiz_topic, hasCompleted])

  
  useEffect(() => {
    if(quiz_topic === 'DHCP'){
      setQuestions(questionsData.DHCP);
    }else if(quiz_topic === 'FTP'){
      setQuestions(questionsData.FTP);
    }
  }, []);

  const handleTimerSet = (e) => {
    e.preventDefault();
    const seconds = parseInt(e.target[0].value);
    setSeconds(seconds);
    const numQuestions = parseInt(e.target[1].value);
    //setNumberQuiz(numQuestions);

    // Set timer and fetch questions
    setTimerSeconds(seconds);
    setQuestions(questionsData[quiz_topic].slice(0, numQuestions));
    setNumberQuiz((questionsData[quiz_topic].slice(0, numQuestions)).length);
    setIsTimerSet(true);

    // Start the timer
    setTimer(setTimeout(handleTimerExpiry, seconds * 1000));

     // Update time remaining every second
     const intervalId = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    // Clear the interval when component unmounts or timer expires
    return () => clearInterval(intervalId);
  }

  const calculateScore = ()=>{
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
      const users_choice = userAnswer.choice;
      const users_choice_index = returnIndexForChoiceSelected(users_choice);
      const quiz_choices = questions[index].choices;
      const quiz_answer = questions[index].answer;

      if ( quiz_answer.startsWith("a)")) {
        if (users_choice === 'a') {
          score++;
        }
      } else if(quiz_answer.startsWith("b)")){
        if (users_choice === 'b') {
          score++;
        }
      } else if(quiz_answer.startsWith("c)")){
        if (users_choice === 'c') {
          score++;
        }
      } else if(quiz_answer.startsWith("d)")){
        if (users_choice === 'd') {
          score++;
        }
      } else if((quiz_answer === "all of the above") || (quiz_answer === "All of the above") || (quiz_answer === "all the above") || (quiz_answer === "All the above")){
        if(quiz_choices){
          const indexOfAnswer = quiz_choices.indexOf(quiz_answer);
          if (users_choice_index === indexOfAnswer) {
            score++;
          }
        }        
      }else{
        if(quiz_choices){
          const indexOfAnswer = quiz_choices.indexOf(quiz_answer);
          if (users_choice_index === indexOfAnswer) {
            score++;
          }
        }
      }
    });
  
    // Display the score
    setCalculatedScore(score);
  }
  
  const processUserAnswer = (e)=>{
    const id = e.target.id;
    const choice = e.target.value;

    if((id !== '' && choice!='') && (choice === 'a' || choice === 'b' ||choice === 'c' ||choice === 'd')){

      // Check if the user has already answered this question
      const existingAnswerIndex = userAnswers.findIndex(answer => answer.id === id);
      
      if (existingAnswerIndex !== -1) {
        // If the user has already answered this question, update the choice
        setUserAnswers(prevAnswers => [
          ...prevAnswers.slice(0, existingAnswerIndex), // Get answers before the updated one
          { ...prevAnswers[existingAnswerIndex], choice }, // Update the choice
          ...prevAnswers.slice(existingAnswerIndex + 1), // Get answers after the updated one
        ]);
      } else {
        // If the user hasn't answered this question yet, add a new answer
        setUserAnswers(prevAnswers => [
          ...prevAnswers,
          { 'id': id, 'choice': choice }
        ]);
      }

      setError(null);

    }else if((id !== '' && choice!='') && (choice !== 'a' || choice !== 'b' ||choice !== 'c' ||choice !== 'd')){

      setError('Wrong input choice at question '+(parseInt(id)+1));
    }
  }

  //return choice index from based on the character
  const returnIndexForChoiceSelected = (choiceSelected)=>{
    switch(choiceSelected){
      case 'a':
        return 0;

      case 'b':
        return 1;

      case 'c':
        return 2;
      
      case 'd':
        return 3;
      
      default:
        return null;
    }
  }

  const handleTimerExpiry = () => {
    // Timer expired, submit the form
    setHasCompleted(true);
    setIsTimerSet(false);    
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setHasCompleted(true);
    setIsTimerSet(false);
  }  

  const handleReset = () => {
    setUserAnswers([]);
    setError(null);
  }

  const handleDiscard = ()=>{
    navigate('/profile')
  }

  return (
    <>
      {error? <p className="text-danger">{error}</p>: ''}    
      
      { isTimerSet? <>
        <p className="text-danger">Time remaining: { (-(timeRemaining))>=0 ? (secondsSet + timeRemaining)+" seconds" : '0'}</p>
        <form onSubmit={ handleSubmit } className="questions">
          
          {questions.map((question, index) => (
              <div key={index} className="question">
                <p>{(index+1)+'. '+question.question}</p>
                {question.choices ? (
                  <ol type="a">
                    {question.choices.map((choice, i) => (
                      <li key={i}>{choice}</li>
                    ))}
                  </ol>
                ) : null}
                <div className="user_choice_field">
                  Choice: <input type="text" id={index.toString()} onChange={processUserAnswer} placeholder="i.e C" required />
                </div>
              </div>
            )) 
          }

          <div className="questions_buttons">
            <button className="btn btn-primary" type="submit">Submit</button>
            <button className="btn btn-secondary" onClick={handleReset} type="reset">Clear Fields</button>
            <button onClick={ handleDiscard } className="btn btn-danger">Discard</button>
          </div>
        </form>
        </>
        :
        <>
          { hasCompleted? 
            <div>
              <h1 className="">Assessment Submitted!</h1>
              <p className="display-4 text-secondary">Results: <span className="text-primary">{ calculatedScore }/{numberQuiz}</span></p>
              <p className="display-5 text-secondary">Score: <span className="text-danger">{ ((calculatedScore/numberQuiz) * 100).toFixed(0) }%</span></p>
            </div>
            : 
            <form onSubmit={ handleTimerSet } className="take_options">
              <div>
                <p>Set Timer(seconds): </p>
                <input type="number" placeholder="e.g 60" required/>
              </div>

              <div>
                <p>Set Number of questions: </p>
                <input type="number" placeholder="e.g 10" required/>
              </div>

              <div>
                <button className="btn btn-primary">Go</button>
              </div>
            </form>
          }
        </>
        
      }
    </>
  )
}

export default Take