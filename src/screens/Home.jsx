//DATA
import Comdian from '../components/home/Comdian';
import Contact from '../components/home/Contact';
import Hero from '../components/home/Hero';
import Heroine from '../components/home/Heroine';
import Testimonials from '../components/home/Testimonials';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0)
  },[])


  return (

    <main >
      <Helmet>
        <title>JeeTrends-Home</title>
      </Helmet>
      <Hero />
      <Heroine />
      <Comdian />
      <Testimonials />
      <Contact />
     <Footer/>
     <Copyright/>
    </main>

  )
}

export default Home