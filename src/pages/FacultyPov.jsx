

import { Menu } from 'primereact/menu';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Dashboard.css';
import { Button } from 'primereact/button';
import logo from './img/logo.png';
import icon from './img/icon.png';

import banner from './img/banner.png';
import gab from './img/gab.png';
import micah from './img/micah.png';
import fred from './img/fred.png';
import tan from './img/tan.png';
import userr from './img/userr.png';
import girl from './img/girl.png';
import { Calendar } from 'primereact/calendar';
import { Tree } from 'primereact/tree';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column'; 
import { TieredMenu } from 'primereact/tieredmenu';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import {useNavigate} from 'react-router-dom';

       

function FacultyPov() {
  const navigate = useNavigate();

  
  const handleOpenButtonClick = () => {
    window.open('https://docs.google.com/document/d/1uaq07O--Vau9sfUzNA9N0mmJAGX28RJZh3Son-YVtwQ/edit?usp=sharing', '_blank');
  };
  const handleStartEventClick = () => {
  
    navigate('/Tapid');
  };


  useEffect(() => {
    setGenerateReportsClicked(false);
    setCreateEventClicked(false);
    setDashboardClicked(true);
    setCalendarClicked(false);
    setAboutClicked(false);
}, []);
  const [count, setCount] = useState(0);
  const [isCreateEventClicked, setCreateEventClicked] = useState(false);
  const [isDashboardClicked, setDashboardClicked] = useState(false);
  const [isCalendarClicked, setCalendarClicked] = useState(false);
  const [isGenerateReportsClicked, setGenerateReportsClicked] = useState(false);
  const [isAboutClicked, setAboutClicked] = useState(false);
  const [date, setDate] = useState(new Date());
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [isInplaceOpen, setIsInplaceOpen] = useState(false);   {/* Inplace */}
  const [value, setValue] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const toast = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPopUpShown, setPopUpShown] = useState(false);
  const [isViewDetailsClicked, setViewDetailsClicked] = useState(false);
  const [eventName, setEventName] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [events, setEvents] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  
 {/* Inplace until here 
  const showSampleToast = () => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Sample Toast Message' });
  };*/}

  const handleTabChange = (event) => {
    // Update the activeIndex when the tab changes
    setActiveIndex(event.index);
  };


  const handleCreateEventClick = () => {
  setShowDialog(true);
  setCreateEventClicked(true);
  setDashboardClicked(false);
  setCalendarClicked(false);
  setGenerateReportsClicked(false);
  setAboutClicked(false)

  showSampleToast();

    setEventName('');
    setDateFrom('');
    setDateTo('');
    setSelectedDepartment([]);
    setSelectedLocation('');

    const newEvent = {
      id: events.length + 1, // Assuming you have a unique identifier
      eventName,
      dateFrom,
      dateTo,
      selectedDepartment,
      selectedLocation,
    };
  
    setEvents([...events, newEvent]);
    showDashboardToast('Event created successfully');
  

  }; const showDashboardToast = () => {
      toast.current.show({
      severity: 'info',
      summary: 'Success!',
      detail: 'Information saved',
      className: 'custom-toast-message', 
    });
 
 
  }; const handleRowClick = (event) => {
    const clickedRowData = event.data;
    showDashboardToast();
  
    showDashboardToast(`Clicked Row Data: ${JSON.stringify(clickedRowData)}`);
  };

  const handleSelectionChange = (e) => {
    
    if (e.value.length > 0 && !isPopUpShown) {
    showDashboardToast();
    setPopUpShown(true);
    }
  };
  
 
  


  
 
  const [rowClick, setRowClick] = useState(/* initial value here */);
 
  const manuallyDefinedData = [
    { id: 1, event: 'Intramurals',from:'11-20-23', date: '11-24-2023', cat: 'Bonifacio', dep: 'Higher Ed' },
    { id: 2, event: 'CCS Nights',from:'11-20-23', date: '02-11-2024', cat: 'Main(Bangke)', dep: 'CSS' },
    { id: 3, event: 'College Days',from:'11-20-23', date: '01-22-2024', cat: 'Bonifacio', dep: 'Higher Ed' },
    { id: 4, event: 'Basic Ed Orientation',from:'11-20-23', date: '01-22-2024', cat: 'Main(Bangke)', dep: 'Higher Ed' },
    // Add more data as needed
  ];


  const [showDetails, setShowDetails] = useState(true);
  const [customers, setCustomers] = useState([
    {
      id: 1,
      email: 'pespinosa_220000000989@uic.edu.ph',
      country: 'Princess Micah',
      representative: 'CCS',
      Last:'Espinosa',
      Time:'7:30',
      status: 'Active',
      verified: true,
      Loc: 'Bonifacio',
    },
    {
      id: 2,
      email: 'aorig_200000000296@uic.edu.ph',
      country: 'Al Gabriel',
      representative: 'CCS',
      Last:'Orig',
      Time:'5:30',
      status: 'Active',
      verified: true,
      Loc: 'Bonifacio',
    },
    {
      id: 3,
      email: 'wmarinay_220000001044@uic.edu.ph',
      country: 'Wilfredo',
      representative: 'CCS',
      Last:'Marinay',
      Time:'10:00',
      status: 'Active',
      verified: true,
      Loc: 'Bangke',
    },
    {
      id: 4,
      email: 'ktan_220000002154@uic.edu.ph',
      country: 'Kyle Clancy',
      representative: 'CCS',
      Last:'Tan',
      Time:'1:00',
      status: 'Active',
      verified: true,
      Loc: 'Bonifacio',
    },
    {
      id: 5,
      email: 'avivas_230000001885@uic.edu.ph',
      country: 'Abrielle Dane',
      representative: 'CPC',
      Last:'Vivas',
      Time:'1:00',
      status: 'Active',
      verified: true,
      Loc: 'Bonifacio',
    },
    {
      id: 6,
      email: 'jescobar_220000001095@uic.edu.ph',
      country: 'Jeff Isaac',
      representative: 'CM',
      Last:'Escobar',
      Time:'12:00',
      status: 'Active',
      verified: true,
      Loc: 'Bonifacio',
    },
    {
      id: 8,
      email: 'kbendoy_230000001545@uic.edu.ph',
      country: 'Kimberly',
      representative: 'CPC',
      Last:'Bendoy',
      Time:'12:30',
      status: 'Active',
      verified: true,
      Loc: 'Bonifacio',
    },
  ]); 
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const header = "Table Header";
  const countryBodyTemplate = (rowData) => {
    // Implement your logic here
    return <span>{rowData.country}</span>;
  };
  const representativeBodyTemplate = (rowData) => {
    // Implement your logic here
    return <span>{rowData.representative}</span>;
  };
  const representativeRowFilterTemplate = (rowData) => {
    // Implement your logic here
    return <span>{rowData.representative}</span>;
  };
  const statusBodyTemplate = (rowData) => {
    // Implement your logic here
    return <span>{rowData.status}</span>;
  };
  const statusRowFilterTemplate = (rowData, column) => {
    // Implement your logic here
    return (
      <input
        type="text"
        value={statusFilter}
        onChange={(e) => onStatusFilterChange(e.target.value)}
        placeholder="Filter"
      />
    );
  };
  const verifiedBodyTemplate = (rowData) => {
    // Implement your logic here
    return <span>{rowData.verified ? 'Verified' : 'Not Verified'}</span>;
  };
  const verifiedRowFilterTemplate = (rowData) => {
    // Implement your logic here
    return <span>{rowData.verified ? 'Verified' : 'Not Verified'}</span>;
  };
  const statusFilter = (value, filter) => {
    // Implement your status filter logic here
    // ...
  
    // Return the filtered value or JSX representation
    return filteredValue;
  };
  
  const handleViewDetailsClick = () => {
    // Toggle the visibility of details
    setShowDetails(!showDetails);
  };
  const handleBackClick = () => {
    // Set the state to go back to the previous visual
    setShowDetails(true);
  };
  
  const products = [
    { code: '001', name: 'Product 1', category: 'Category 1', quantity: 10 },
    // Add more product data as needed
  ];
  
    {/* Inplace */}
  const initialProducts = [
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
            command: handleCreateEventClick, 

            },
        ],
      },
    ];

     {/*  () => {
              setCreateEventClicked(true);
              setDashboardClicked(false);
              setCalendarClicked(false);
              setGenerateReportsClicked(false);
              setAboutClicked(false)*/}
  
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
        { key: '1.1', label: 'Intramural 20-24 ' },
        




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

  
  const items = [
    {
      label: 'Shenna Rhea Cloribel',
      items: [
        { label: 'Logout', icon: 'pi pi-fw pi-times' },
      ],
    },
 
  ];
  const cities = [
    { name: 'CCS', code: '001' },
    { name: 'CPC', code: '002' },
    { name: 'MLS', code: '003' },
    { name: 'CABE', code: '004' },
    { name: 'Higher Ed', code: '005' },
   
  ];
  
  const [selectedCities, setSelectedCities] = useState([]);

  const location = [
    { name: 'Bangke(main)', code: '001' },
    { name: 'Bonifacio', code: '002' },
    { name: 'Bajada', code: '003' },
    
   
  ];const handleHomeClick = () => {
    console.log('Home clicked');
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateClick = (date) => {
    // You can add logic here to redirect or perform actions based on the selected date
    // For now, let's just update the state to show the DataTable
    setSelectedDate(date);
    setGenerateReportsClicked(true);
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
      <Toast ref={toast}></Toast>
      
       {/* Calendar portion, katong naay expand */}
      {isCreateEventClicked && (
      <>
      <img className='userr' src={userr} alt="" />
      <div className='logout'>
      <TieredMenu model={items} breakpoint="767px" />
      </div>
       
          <Dialog
          visible={showDialog}
          onHide={() => setShowDialog(false)}
          header="Create Event"
          >
        
         <div>
         
         <div className="pink">
          <div className='gen'>
          <h2>Add Event</h2></div>

          <div className='apple'>

          <div className='evnme'>
           <h4>Event Name:</h4>
            
            <div className='searchh'>
            <InputText value={eventName} onChange={(e) => setEventName(e.target.value)} />
            </div>
          </div>


          <div className='mango'>
            <h4>Date From:</h4>
            <div className='oums'>
            <InputText value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
            </div>
          </div>

          <div className='milk'>
            <h4>Date to:</h4>
            <div className='yum'>
            <InputText value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
            </div>
          </div>

          <div className ='loc'>
          <h4>Department:</h4>
          <div className='loc1'> 
         <MultiSelect value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.value)} options={cities} optionLabel="name" 
         placeholder="Select Department " maxSelectedLabels={3} className="w-full md:w-20rem" />
         </div>
        </div>

        <div className='dep'>
        <h4>Location:</h4>
        <div className='loc1'> 
        <MultiSelect value={selectedLocation} onChange={(e) => setSelectedLocation(e.value)} options={location} optionLabel="name" 
        placeholder="Select Location " maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
        </div>
       </div>
         <div className='save'>
          <Button label="Save"  rounded className="customButton" />  
        
          </div>

          <div className='cancel'>
          <Button icon="pi pi-times" severity="danger" aria-label="Cancel" className="customCancelButton" />
          </div>

          <div className='close-button-container '>
          <Button label="Close"  onClick={() => setShowDialog(false)} className='customCloseButton' />
          </div>




         


          </div>
          </div>
    </Dialog>
 
        
      {/*  <Toast ref={toast}></Toast>
       <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
          
<TabView activeIndex={activeIndex} onChange={handleTabChange}className="custom-tab-view">
        <TabPanel header="Tab 1">
        
          <p>Tab 1 Content</p>
        </TabPanel>
        <TabPanel header="Tab 2">
         
          <p>Tab 2 Content</p>
        </TabPanel>
       
      </TabView>*/}





      </>
      )}





      {isDashboardClicked && (
        <>
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
      <Button onClick={handleOpenButtonClick} id='Button1' label="Open" severity="danger" />
      </div>

          <div className="card2 flex justify-content-center">
            <Button onClick={handleOpenButtonClick} id='Button2' label="Open" severity="danger" />
          </div>
          <div className="card3 flex justify-content-center">
            <Button onClick={handleOpenButtonClick} id='Button3' label="Open" severity="danger" />
          </div>
          <div className="card4 flex justify-content-center">
            <Button id='Button4' label="Start Event" severity="danger" />
        </div>

        <div className="card5 flex justify-content-center">
            <Button id='Button5' label="Start Event" severity="danger" />
        </div>
        <div className="card6 flex justify-content-center">
            <Button id='Button6' label="Start Event" severity="danger" />
        </div>
          
       <img className='userr' src={userr} alt="" />
       <div className='logout'>
      <TieredMenu model={items} breakpoint="767px" />
      </div>
       
      {/* Your content for the Dashboard button goes here */}
      <div className='ivy'>
      <h1 className='Hi'>Hi, Shenna</h1>
      <p className='day'>Ready to start your day?</p>

      </div>

      {/* <img className='girl' src={girl} alt="" />*/}

      <div className='minji'> 
      <h3>Events </h3>
      </div>
          <div className="dashboard-content flex justify-content-center">
          </div>
        </>
      )}

      {isCalendarClicked && (
        <>
        <img className='userr' src={userr} alt="" />
        <div className='logout'>
       <TieredMenu model={items} breakpoint="767px" />
       </div>
      
 
       <div className='Toome'>
       <h4 >,02 November 2023</h4>
       </div>
 
       
       <div className='can'>
         <h3>Calendar</h3>
       </div>
       
       <div className="Calendar-container">
       <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek onSelect={(e) => handleDateClick(e.value)} />
       </div>
 
       <div className='libog'>
        <h3>Schedule, Event</h3>
       </div>
 
       
 
      <Tree value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="w-full md:w-30rem" />
 
      <div className="calendar-content flex justify-content-center">
       </div>
         </>
       )}





{isGenerateReportsClicked && (
        <>
          <img className='userr' src={userr} alt="" />

          <div className='logout'>
            <TieredMenu model={items} breakpoint="767px" />
          </div>
          
          <div className="pink-box">
            <div className='generate'>
              <h2>Generate Reports</h2>
            </div>

            <div className="inner-box">
              {showDetails ? (
                <>
                  <p className='text'>Recent Activities</p>

                  <div className='insidewt'>
                    <p className='textintrams'>Intramural</p>
                    <img className='icon' src={icon} alt="" />
                    <h1 className='num1'>5,900</h1>

                    <div className='Hme'>
                      <Button label="View Details" className="p-button" onClick={handleViewDetailsClick} />
                    </div>
                  </div>

                  {/* Additional sections */}
                  <div className='insidewt2'> 
                    <p className='CNght'>CCS Nights</p> 
                    <img className='iconn' src={icon} alt="" />
                    <h1 className='num2'>500</h1>
                   
                    <div className='Hme'>
                      <Button label="View Details" className="p-button" onClick={handleViewDetailsClick} />
                    </div>
                  </div>
                  <div className='insidewt3'> 
                    <p className='CDays'>College Days</p> 
                    <img className='iconnn' src={icon} alt="" />
                    <h1 className='num3'>3000</h1>
                   
                    <div className='Hme'>
                      <Button label="View Details" className="p-button" onClick={handleViewDetailsClick} />
                    </div>
                  </div>
                  <div className='insidewt4'> 
                    <p className='Break'>Tune Up: Breaking Unhealthy Behaviors</p> 
                    <img className='iconnnn' src={icon} alt="" />
                    <h1 className='num4'>3000</h1>
                   
                    <div className='Hme'>
                      <Button label="View Details" className="p-button" onClick={handleViewDetailsClick} />
                    </div>
                  </div>
                </>
              ) : (
                // Content for the new state when details are hidden
                <>
                  <div className='hidden-content'>
                  <div className="datatable-container">
                  <DataTable value={customers}  paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                   globalFilterFields={['email', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
                 
                 <Column field="email" header="Email add" filter filterPlaceholder="Search by name" style={{ minWidth: '10rem' }} />
                 <Column header="First Name" filterField="country.name" style={{ minWidth: '10rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by First Name" />

                 
                <Column field="Last" header="Last Name" filter filterPlaceholder="Search by Last Name"style={{ minWidth: '10rem' }} />


                 <Column header="Department" filterField="representative"  style={{ minWidth: '10rem' }} body={representativeBodyTemplate} filter filterPlaceholder="Search by Department" />
               {/*   <Column field="status" header="Date" showFilterMenu={false} filterMenuStyle={{ width: '10rem' }} style={{ minWidth: '10rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />*/}
                <Column field="Time" header="Time-in" filter filterPlaceholder="Search by Time-in"style={{ minWidth: '10rem' }} />
                <Column field="Loc" header="Location" filter filterPlaceholder="Search by Location" style={{ minWidth: '10rem' }} />
                {/*<Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />*/}
                 
                 </DataTable>
</div>


                  </div>
                  <div className='hidden-content'>
                    {/* Content for insidewt2 when details are hidden */}
                    
                  </div>
                  <div className='hidden-content'>
                    {/* Content for insidewt3 when details are hidden */}
                    
                  </div>
                  <div className='hidden-content'>
                    {/* Content for insidewt4 when details are hidden */}
                  
                  </div>
                  <Button label="Back" className="p-button transparent-button" onClick={handleBackClick} />
                </>
              )}
            </div>
          </div>
          
          <div className="reports-content flex justify-content-center"></div>
        </>
      )}



    
    {isAboutClicked && (
        <>
       
      
       <img className='userr' src={userr} alt="" />
       <div className='logout'>
      <TieredMenu model={items} breakpoint="767px" />
      </div>
     

      
      <img className='banner' src={banner} alt="" />
      {/* Your content for the About button goes here */}
        
      <h1 className='About'>ABOUT US.</h1>
      <div className='per'>
      <p>The University Student Attendance Monitoring System (USAMS) has </p>
      <p>significantly improved the academic experience for Computer Science </p>
      <p>students, with its intuitive interface and real-time attendance tracking </p>
      <p>feature enhancing the overall learning experience. This system streamlines </p>
      <p>administrative processes and improves student engagement.</p>
      </div>
     

     
      
      <h1 className='team'>MEET THE TEAM</h1>

      <img className='gab' src={gab} alt="" />
      <div className='line1'><h4 >Al Gabriel Orig</h4></div>
      <div className='line2'><h5>Programmer</h5></div>

      <img className='micah' src={micah} alt="" />
      <div className='line3'><h4 >Princess Micah B. Espinosa</h4></div>
      <div className='line4'><h5>UI/UX designer & Document Specialist</h5></div>


      <img className='fred' src={fred} alt="" />
      <div className='line5'><h4 >Wilfredo G. Marinay</h4></div>
      <div className='line6'><h5>Analyst</h5></div>


      <img className='tan' src={tan} alt="" />
      <div className='line7'><h4 >Kyle Clancy  F. Tan</h4></div>
      <div className='line8'><h5>UI/UX designer </h5></div>

    
     <div className="calendar-content flex justify-content-center">
      </div>
      
        </>
      )}

    </>
  );
}



export default FacultyPov;
