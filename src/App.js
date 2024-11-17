import './App.css';
import Header from './container/header';
import Home from './container/Home';
import backgroundImage from './assets/v960-ning-29.png'
import Pagetwo from './container/pagetwo';
import Pagethree from './container/pagethree';
import page2logo from './assets/Rectangle 10.png'
import Page5 from './container/page5';
import Page6 from './container/page6';
import Page7 from './container/page7';

function App() {

  const page4rightHeading = 'Your next big thing'

  return (
    <div className="App" class='flex flex-col'>
      <div class='flex flex-col pl-12' className='headerhome'>
          <Header/>
      </div>
      <div className='apphome'>
        <Home/>
      </div>
      <div className='page2'> 
        <Pagetwo image={page2logo} rightColor={'#01B2FF'} leftColor={'#0A2289'} rightHeading={'The shoutout repository'}
            rightPara={'Share your personal URL with colleagues, friends, and workshop attendees. They can use it to give you heartfelt shoutouts by recognising your hard work, dedication, and the impact you’ve made.'}/>
      </div>
      <div className='page3'>
        <Pagethree/>
      </div>
      <div className='page4'> 
        <Pagetwo image={page2logo} leftColor={'#C94A49'} rightColor={'#FF6D6C'} 
            rightHeading={page4rightHeading} 
            rightPara={'A.I will transform elements of both technical and managerial fields, creating a highly competitive job market. Establishing a strong personal brand can distinguish you from others in this competitive landscape.'}/>
      </div>
      <div className='page3'>
        <Page5/>
      </div>
      <div className='page2'>
        <Page6/>
      </div>
      <div className='page7'>
        <Page7/>
      </div>
    </div>
  );
}

export default App;
