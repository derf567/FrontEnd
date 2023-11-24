import { useState } from 'react';
import { PrimeIcons } from 'primereact/api';
import { Menu } from 'primereact/menu';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Dashboard.css';
import { Button } from 'primereact/button';
import logo from './img/logo.png';
import { Chip } from 'primereact/chip';

function Dashboard() {
  const [count, setCount] = useState(0);
  const [isCreateEventClicked, setCreateEventClicked] = useState(false);
  const [isDashboardClicked, setDashboardClicked] = useState(false);
  const [isCalendarClicked, setCalendarClicked] = useState(false);
  const [isGenerateReportsClicked, setGenerateReportsClicked] = useState(false);

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
          },
        },
        {
          label: 'Calendar',
          icon: 'pi pi-calendar',
          command: () => {
            setCalendarClicked(true);
            setCreateEventClicked(false);
            setDashboardClicked(false);
            setGenerateReportsClicked(false);
          },
        },
        {
          label: 'Generate Reports',
          icon: 'pi pi-external-link',
          command: () => {
            setGenerateReportsClicked(true);
            setCreateEventClicked(false);
            setDashboardClicked(false);
            setCalendarClicked(false);
          },
        },
      ],
    },
  ];

  return (
    <>
      <img className='logo' src={logo} alt="" />
      <div className='Header'>
        <h1>Dashboard</h1>
        <p>Thursday, 02 November 2023</p>
      </div>
      <div className='addnew'>
        <Menu className='insidethe-addnew' model={items1} />
      </div>
      <div className='dash'>
        <Menu className='insidethe-addnew' model={items2} />
      </div>

      {isCreateEventClicked && (
        <>
          {/* Your time component goes here */}
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
        </>
      )}

      {isDashboardClicked && (
        <>
                  <div className='Profile1'>
                    <Chip label="M.I.S Personel" image="path" />
                  </div>
          {/* Your content for the Dashboard button goes here */}
          <div className="dashboard-content flex justify-content-center">
            <p>This is the content for the Dashboard button.</p>
          </div>
        </>
      )}

      {isCalendarClicked && (
        <>
                  <div className='Profile1'>
                    <Chip label="M.I.S Personel" image="path" />
                  </div>
          {/* Your content for the Calendar button goes here */}
          <div className="calendar-content flex justify-content-center">
            <p>This is the content for the Calendar button.</p>
          </div>
        </>
      )}

      {isGenerateReportsClicked && (
        <>
                  <div className='Profile1'>
                    <Chip label="M.I.S Personel" image="path" />
                  </div>
          {/* Your content for the Generate Reports button goes here */}
          <div className="reports-content flex justify-content-center">
            <p>This is the content for the Generate Reports button.</p>
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
