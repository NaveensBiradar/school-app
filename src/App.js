import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StudentList from './components/StudentList';
import Headder from './components/Headder';
import Carosol from './components/Carosol';
import Form from './components/Form';
import Footer from './components/Footer';
import Sidepanel from './components/Sidepanel';
import Login from './components/Login';
import Signup from './components/Signup';
import StudentAdmit from './components/StudentAdmit';

function App() {
  return (
    <div className=''>

        <div className="">
            <Headder />
        </div>

        {/* <div className="">
          <Carosol />
        </div> */}

        <div className="" style={{margin:"25px"}}>

            <div className='row'>

            </div>
            <div className="row">
                <div className="col-6">
                    <Sidepanel />
                </div>
                {/* <div className="col-10">
                    <div className='col-12'>
                      <StudentList />
                    </div>
                    <div className='col-8'>
                      <Login />
                    </div>

                    <div className='col-8'>
                      <Signup />
                    </div>

                    <div className='col-8'>
                      <StudentAdmit />
                    </div>
                </div> */}
            </div>
        </div>

        <Footer />
    </div>

  );
}

export default App;
