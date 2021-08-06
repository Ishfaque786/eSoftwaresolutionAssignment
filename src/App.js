
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

import {Modal,Select,MenuItem} from '@material-ui/core';
import Popup from './Components/Popup';

function App() {
  const [open, setOpen] = React.useState(false);
  const [sort, setSort] = React.useState('Patient Name');
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const taskData = [
    {
      patientName: 'John Smith',
      patientRecordNumber: 'MRN-1234567',
      patientDOB:'11/04/1963',
      orzanizationRequested: 'UCSF General Surgery',
      requester: 'Dr.Shimura',
      itemRequested:'CD ABD & pelvis',
      status: 'submitted',
      requestedDate: '04/15/2021',
      dueData: '04/20/2021',
      note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.'

      
    },{
      patientName: 'Thomas Rob',
      patientRecordNumber: 'MRN-1234567',
      patientDOB:'11/04/1963',
      orzanizationRequested: 'UCSF General Surgery',
      requester: 'Dr.Ryuusuke Murakawa',
      itemRequested:'UQ Ultrasound',
      status: 'submitted',
      requestedDate: '04/10/2021',
      dueData: '04/20/2021',
      note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.'
      
    }
  ]
 const [popupdata, setpopupdata] = React.useState(taskData[0])
  
  return (
   
     
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section>
        <div className="heading">
          <div className='flex'>
          <h4>
              Task List
        
            </h4>
         
          </div>
          <div>
            <h4>Current Context: </h4>
            <div>
            USCF Head and Neck Surgery
            </div>

          </div>
        </div>
        <hr />
        <div className="taskContainer">
          <div className='flex'>
            <div className='flex' style={{ width: "100%" }}>
              <div className="flex">
              <div style={{marginRight:'10px'}}>Sort By</div>
              <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          onChange={handleChangeSort}
        >
          <MenuItem value={'Patient Name'}>Patient Name</MenuItem>
          <MenuItem value={'Date'}>Date</MenuItem>
          
        </Select>
              </div>
              <div className='flex' >
                <div style={{ marginRight: '20px' }}>Search</div>
                <div className="flex searchBar"><input type="text" />
                  <div className="searchIcon">
                    
                <BiSearchAlt2 />

              </div>
              </div>
              </div>
            </div>
            <div className='flex'></div>
          </div>
          <div style={{marginTop:'30px'}}>
            {taskData.map((task, key) => (
              <div className='task' onClick={() => {
                handleOpen();
                setpopupdata(taskData[key])
              }}>
                <h3>{task.patientName}</h3>
                <div className="boldFont">{task.itemRequested}</div>
                <div>{task.note}</div>
              <div className="flex">
              <div className="flex" style={{width:'100%', alignItems:'center'}}>
                  
                    <div className="flex boldFont">
                    <div className="circle"></div>
                      <div>{task.orzanizationRequested}</div>-<div>{task.requester}</div>
                </div>
              
                <div className="flex" >
                <div className="flex">
                  <div className="dateLabel">Requested Data -&nbsp;</div>
                        <div className="boldFont">{task.requestedDate}</div>
                </div>
                  <div className="flex" style={{margin:'20px'}}>
                    <div className="dateLabel">Due Data -&nbsp;</div>
                        <div className="boldFont" style={{color:'red'}}>{task.dueData}</div>
                </div>
                </div>
                </div>
              </div>
            </div>
            ))}
            
          </div>
          </div>
         
        <Modal
         
        open={open}
          onClose={handleClose}
        ><div  className={'popupContainer'}>
            <div className="popupCloseButton" onClick={() =>{
              setOpen(false);
          }}>
          <MdClose size={'25px'} />
          </div>
        <Popup popupData={popupdata} />
        </div>
      </Modal>
      </section>
      
      </div>
      
  );
}

export default App;
