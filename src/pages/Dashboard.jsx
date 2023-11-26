import { useState } from 'react';
import { PrimeIcons } from 'primereact/api';
import { Menu } from 'primereact/menu';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Dashboard.css';
import { Button } from 'primereact/button';
import logo from './img/logo.png';
import icon from './img/icon.png';
import { Chip } from 'primereact/chip';
import { Calendar } from 'primereact/calendar';
import { Tree } from 'primereact/tree';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';        
        
        
        

function Dashboard() {
  const [count, setCount] = useState(0);
  const [isCreateEventClicked, setCreateEventClicked] = useState(false);
  const [isDashboardClicked, setDashboardClicked] = useState(false);
  const [isCalendarClicked, setCalendarClicked] = useState(false);
  const [isGenerateReportsClicked, setGenerateReportsClicked] = useState(false);
  const [isAboutClicked, setAboutClicked] = useState(false);
  const [date, setDate] = useState(new Date());
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [isInplaceOpen, setIsInplaceOpen] = useState(false);   {/* Inplace */}
  
    {/* Inplace */}
  const products = [
    { code: '001', name: 'Product 1', category: 'Category 1', quantity: 10 },
    { code: '002', name: 'Product 2', category: 'Category 2', quantity: 15 },
  ];
  
  const onOpen = () => {
    setIsInplaceOpen(true);
  };
     {/* Inplace until here */}


     const items1 = [
      {
        label: '',
        items: [
          {
            label: 'Create Event',
            icon: 'pi pi-fw pi-plus',
            command: () => {
              setCreateEventClicked(true);
              setDashboardClicked(false);
              setCalendarClicked(false);
              setGenerateReportsClicked(false);
              setAboutClicked(false)
            },
          },
        ],
      },
    ];
  
    const items2 = [
      {
        label: '',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-th-large',
            command: () => {
              setDashboardClicked(true);
              setCreateEventClicked(false);
              setCalendarClicked(false);
              setGenerateReportsClicked(false);
              setAboutClicked(false)
            },
          },
          {
            separator: true,
          },
          {
            label: 'Calendar',
            icon: 'pi pi-calendar',
            command: () => {
              setCalendarClicked(true);
              setCreateEventClicked(false);
              setDashboardClicked(false);
              setGenerateReportsClicked(false);
              setAboutClicked(false)
            },
          },
          {
            separator: true,
          },
          {
            label: 'Generate Reports',
            icon: 'pi pi-external-link',
            command: () => {
              setGenerateReportsClicked(true);
              setCreateEventClicked(false);
              setDashboardClicked(false);
              setCalendarClicked(false);
              setAboutClicked(false)
            },
          },
          {separator: true,},{separator: true,},{separator: true,},{separator: true,},{separator: true,},
          {separator: true,},{separator: true,},{separator: true,},{separator: true,},{separator: true,},

          {
            label: 'About',
            icon: 'pi pi-question',
            command: () => {
              setAboutClicked(true)
              setCreateEventClicked(false);
              setDashboardClicked(false);
              setCalendarClicked(false);
              setGenerateReportsClicked(false);
              
            },

          }


        ],
      },
    ];

    {/* Calendar portion, katong naay expand */}
  const expandAll = () => {
    setExpandedKeys(nodes.map(node => node.key));
  };

  const collapseAll = () => {
    setExpandedKeys([]);
  };

  const nodes = [
    {
      key: '1',
      label: 'November',
      children: [
        { key: '1.1', label: 'Intramural ' },
        
      ],
    },
    {
      key: '2',
      label: 'December',
      children: [
        { key: '2.1', label: 'Node 2.1' },
        { key: '2.2', label: 'Node 2.2' },
      ],
    },
  ];

  const getDayOfWeek = (dayIndex) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayIndex];
  };

 



  return (
    <>
      <img className='logo' src={logo} alt="" />
     
      <div className='addnew'>
        <Menu className='insidethe-addnew' model={items1} />
      </div>
      <div className='dash'>
        <Menu className='insidethe-addnew' model={items2} />
      </div>

      
      
      {isCreateEventClicked && (
        <>
      {/* Your time component goes here */}
      <div className='Profile1'>
      <Chip label="M.I.S Personel" image="path" />
      </div>
      </>
      )}





      {isDashboardClicked && (
        <>
      <div className='Profile1'>
      <Chip label="M.I.S Personel" image="path" />
      </div>
      {/* Your content for the Dashboard button goes here */}

      <div className='Header'>
      <h1>Dashboard</h1>
      <p>Thursday, 02 November 2023</p>
      </div>

      <div className='event'> 
      <p>Events</p>
      </div>

      <div className='intrams'> 
        <p>Intramural</p>
      </div>

      <div className='ccs'> 
        <p>College Days</p>
      </div>

      <div className='cnight'> 
        <p>CSS Nights</p>
      </div>



          <div className="card flex justify-content-center">
            <Button id='Button1' label="Open" severity="danger" />
          </div>
          <div className="card2 flex justify-content-center">
            <Button id='Button1' label="Open" severity="danger" />
          </div>
          <div className="card3 flex justify-content-center">
            <Button id='Button1' label="Open" severity="danger" />
          </div>
          <div className="card4 flex justify-content-center">
            <Button className="Button4" label="Start Event" severity="danger" />
          </div>
          <div className="card5 flex justify-content-center">
            <Button className="Button5" label="Start Event" severity="danger" />
          </div>
          <div className="card6 flex justify-content-center">
            <Button className="Button6" label="Start Event" severity="danger" />
          </div>
          <div className='Profile1'>
            <Chip label="M.I.S Personel" image="path" />
          </div>


          <div className="dashboard-content flex justify-content-center">
          </div>
        </>
      )}






      {isCalendarClicked && (
        <>
      <div className='Profile1'>
      <Chip label="M.I.S Personel" image="path" />
      </div>
      {/* Your content for the Calendar button goes here */}

      <div className='calendarhead'>
      <h1>Schedule</h1>
      <p style={{ color: date.getDay() === 4 ? '#D2334C' : 'black' }}>
        {getDayOfWeek(date.getDay())}, {date.toDateString()}
      </p>
      </div>
      
      <div className="Calendar-container">
      <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
      </div>

      <div className='events'>
       <h3>Schedule, Event</h3>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
      <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} />
      <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
      </div>

     <Tree value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="w-full md:w-30rem" />

     <div className="calendar-content flex justify-content-center">
      </div>
        </>
      )}





      {isGenerateReportsClicked && (
        <>
      <div className='Profile1'>
      <Chip label="M.I.S Personel" image="path" />
      </div>
     {/* Your content for the Generate Reports button goes here */}
 
     <div className="pink-box">
     <div className='generate'>
     <h2>Generate Reports</h2></div>
     
     <div className="inner-box">
      <p className='text'>Recent Activities</p>
    

      <div className='insidewt'>
       <p className='textintrams'>Intramural</p> 
       <img className='icon' src={icon} alt="" />
       <h1 className='num1'>5,900</h1>
       
       <Inplace onOpen={onOpen}>
        <InplaceDisplay>View Data</InplaceDisplay>
        <InplaceContent>
          <DataTable value={products}>
            <Column field="code" header="Code" />
            <Column field="name" header="Name" />
            <Column field="category" header="Category" />
            <Column field="quantity" header="Quantity" />
          </DataTable>
        </InplaceContent>
      </Inplace>



      </div>

      <div className='insidewt2'> 
      <p className='CNght'>CCS Nights</p> 
       <img className='iconn' src={icon} alt="" />
       <h1 className='num2'>500</h1>
      
      <Inplace onOpen={onOpen}>
        <InplaceDisplay>View Data</InplaceDisplay>
        <InplaceContent>
          <DataTable value={products}>
            <Column field="code" header="Code" />
            <Column field="name" header="Name" />
            <Column field="category" header="Category" />
            <Column field="quantity" header="Quantity" />
          </DataTable>
        </InplaceContent>
      </Inplace>
      
      
      </div>
      <div className='insidewt3'> 
      <p className='CDays'>College Days</p> 
       <img className='iconnn' src={icon} alt="" />
       <h1 className='num3'>3000</h1>
      
      <Inplace onOpen={onOpen}>
        <InplaceDisplay>View Data</InplaceDisplay>
        <InplaceContent>
          <DataTable value={products}>
            <Column field="code" header="Code" />
            <Column field="name" header="Name" />
            <Column field="category" header="Category" />
            <Column field="quantity" header="Quantity" />
          </DataTable>
        </InplaceContent>
      </Inplace>
      
      </div>
      <div className='insidewt4'> 
      <p className='Break'>Tune Up: Breaking Unhealthy Behaviors</p> 
       <img className='iconnnn' src={icon} alt="" />
       <h1 className='num4'>3000</h1>
      
      <Inplace onOpen={onOpen}>
        <InplaceDisplay>View Data</InplaceDisplay>
        <InplaceContent>
          <DataTable value={products}>
            <Column field="code" header="Code" />
            <Column field="name" header="Name" />
            <Column field="category" header="Category" />
            <Column field="quantity" header="Quantity" />
          </DataTable>
        </InplaceContent>
      </Inplace>
      
      
      
      </div>

       <p className='down'>LastMonth</p>

     


     </div>
    </div>
    
    <div className="reports-content flex justify-content-center">
          
          </div>
        </>
      )}



    
    {isAboutClicked && (
        <>
      <div className='Profile1'>
      <Chip label="M.I.S Personel" image="path" />
      </div>
      {/* Your content for the About button goes here */}
       
      <h1 className='About'>ABOUT US.</h1>
      <p className='per'>The University Student Attendance Monitoring System (USAMS) has brought about a positive transformation in the academic journey of our Computer Science students. 
        The system's intuitive interface has made it easier for both faculty and students in the department to navigate, enhancing their overall experience.
       The system's user-friendly interface and seamless integration into our existing infrastructure have made it a valuable asset for both faculty and administrative staff. The real-time attendance tracking feature ensures that we can promptly address any concerns related to student attendance and engagement. This has not only streamlined administrative processes but has also enhanced the overall learning experience for our students.</p>
      

     <div className="calendar-content flex justify-content-center">
      </div>
        </>
      )}

    </>
  );
}



export default Dashboard;
