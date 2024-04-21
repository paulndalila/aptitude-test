import banner from '../assets/banner.png'
import contactBack from '../assets/contact_back.png'

const Home = () => {
  return (
    <div className='home'>
      <div className="banner">
        <div>
          <h1>Welcome to Quizspot, your ultimate companion for revision.</h1>
          <p> Offering a comprehensive suite of resources meticulously crafted to enhance your understanding and proficiency in network engineering concepts.</p>
        </div>
        <div className='banner-img'>
          <img src={ banner } alt='banner'/>
        </div>
      </div>

      <div className='section' id='about'>
        <h3>About Us</h3>
        <hr/>
        <div className='details'>
          <p>Welcome to our self-revision aptitude test application tailored for network engineering students. At Quizspot, we recognize the importance of self-assessment in mastering the complexities of network engineering. Our application is designed to provide students with a convenient and effective way to review and reinforce their understanding of key concepts.</p>
          <p>Driven by a passion for education and technology, our team has developed a comprehensive question bank covering various topics relevant to network engineering. Whether you are preparing for exams or simply aiming to deepen your knowledge, our platform offers a wide range of questions to suit your needs.</p>
          <p>With user-friendly features and detailed explanations, we strive to make your self-revision experience both engaging and informative. Our commitment to quality ensures that you have access to accurate and up-to-date content that aligns with industry standards.</p>
          <p>Join countless network engineering students who have benefited from our application to enhance their skills and confidence. Take charge of your learning journey today with Quizspot.</p>
        </div>
      </div>

      <div className='section' id='services'>
        <h3>Our Services</h3>
        <hr/>
        <div className='details'>
          <p>Comprehensive Question Bank: Access a vast collection of questions covering various topics such as network protocols, routing algorithms, subnetting, and more.</p>
          <p>Customized Practice Tests: Tailor your practice sessions to focus on specific areas of interest or areas where you need improvement.</p>
          <p>Progress Tracking: Monitor your progress over time with insightful analytics and performance metrics, allowing you to identify strengths and areas for further development.</p>
          <p>Mobile Accessibility: Study anytime, anywhere with our mobile-friendly application, ensuring flexibility and convenience in your learning journey.</p>
          <p>With user-friendly features and detailed explanations, we strive to make your self-revision experience both engaging and informative. Our commitment to quality ensures that you have access to accurate and up-to-date content that aligns with industry standards.</p>
          <p>Join countless network engineering students who have benefited from our application to enhance their skills and confidence. Take charge of your learning journey today with Quizspot.</p>
        </div>
      </div>

      <div className='section' id='contact'>
        <h3>Contact Us</h3>
        <hr/>
        <form className='details'>
          <div className='contact_background'>
            <img src={ contactBack } alt='contact'/>
          </div>
          <div className='contact_form'>
            <div>
              <input type='text' placeholder='First Name *' required/>
              <input type='text' placeholder='Last Name *' required/>
            </div>
            <input type='email' placeholder='Email Address *' required/>
            <input type='text' placeholder='Subject *' required/>
            <textarea placeholder='Type your message here...' rows='8' required/>
            <div className='send_btn'>
              <button>Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home