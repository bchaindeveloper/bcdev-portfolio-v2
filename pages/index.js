import { Footer, Navbar } from '../components';
import { About, Experience, Hero } from '../sections';
import Accomplishments from '../sections/Accomplishments';
import Mission from '../sections/Mission';
import Developer from '../sections/Developer';
import Technologies from '../sections/Technologies';
import Examples from '../sections/Examples';


const Home = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <button className='text-white '>Connect Wallet</button>
    <Hero />
    <div className='relative'>
      <About />
    </div>
    <div className='relative'>
      <Technologies />
      <div className='gradient-04 z-0'/>
      <Examples />
    </div>
    <div className='gradient-03 z-0'/>
      <Experience />
    <div className='relative'>
      <Accomplishments />
      <div className='gradient-04 z-0'/>
      <Mission />
      <br />
      <Developer />
    </div>
    <Footer />
  </div>
);

export default Home;