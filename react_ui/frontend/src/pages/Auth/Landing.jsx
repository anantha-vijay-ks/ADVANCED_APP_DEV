import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import '../../assets/css/colors.css'
import '../../assets/css/Landing.css'

import landingImg1 from '../../assets/images/logo1.jpg'
import landingImg2 from '../../assets/images/landing-image-2.png'

import offer from '../../assets/images/logo2.jpg'
import customercare from '../../assets/images/login/cc.jpg'

const Landing = () => {

  return (
    <div>
      <Navbar />
      <section>
        <div className="section-1 margin">
          <h1>Stay Connected 24/7 with Our Mobile Recharge Platform</h1>
          <h3></h3>

          <img src={landingImg1} alt="landingImg1" className='imgbox' />
        </div>
      </section>

      

      <section className='margin'>
        <div className="section-3">
          <div className="section-3-left-side">
            <h1>UNLIMITED 5G NETWORK FOR EVERY USER</h1>
            <h4></h4>
          </div>
          <div className="section-3-right-side">
            <img src={offer} alt="offer" />
          </div>
        </div>
      </section>

      <section className='margin' id='faq'>
        <div className="section-4">
          <h1>How to recharge with Hashtag?</h1>
            <p>
              <ul>
        
                <h2>* First Login or Signup using your mobile number</h2>
                <h2>* Open the Plans Page</h2>
                <h2>* Choose the plan you want</h2>
                <h2>* Then you will be redirected to the payment portal</h2>
                <h2>* We support all major payment methods when you buy airtime online, including credit cards, debit cards, Google Pay, Apple Pay.</h2>
                <h2>* Our Network Providers are Airtel,Jio,BSNL,Vi</h2>
              </ul>
            </p>
          
            
          
        </div>
      </section>

      <section className='margin'>
        <div className="section-5">
          <div className="section-5-left-side">
            <img src={customercare} alt="customercare" />
          </div>
          <div className="section-5-right-side">
            <h1>FOR CUSTOMER CARE :-</h1>
            
            <p> <i className='material-icons'>done_outline</i> hashtag@gmail.com</p>
            <p> <i className='material-icons'>done_outline</i> 9636353539</p>
            <p> <i className='material-icons'>done_outline</i> 24/7 SUPPORT</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Landing