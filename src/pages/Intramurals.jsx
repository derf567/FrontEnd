import { PrimeIcons } from "primereact/api";
import { Menu } from "primereact/menu";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Dashboard.css";
import { Button } from "primereact/button";
import logo from "./img/logo.png";
import icon from "./img/icon.png";
import gab from "./img/gab.png";
import micah from "./img/micah.png";
import fred from "./img/fred.png";
import tan from "./img/tan.png";
import userr from "./img/userr.png";
import girl from "./img/girl.png";
import { Calendar } from "primereact/calendar";
import { Tree } from "primereact/tree";
import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { TieredMenu } from "primereact/tieredmenu";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import React, { useState, useEffect } from "react";
import { DataScroller } from "primereact/datascroller";
function Intramurals() {
    useEffect(() => {
        setGenerateReportsClicked(true);
        setCreateEventClicked(false);
        setDashboardClicked(false);
        setCalendarClicked(false);
        setAboutClicked(false);
    }, []);
    const [count, setCount] = useState(0);
    const [isCreateEventClicked, setCreateEventClicked] = useState(false);
    const [isDashboardClicked, setDashboardClicked] = useState(false);
    const [isCalendarClicked, setCalendarClicked] = useState(false);
    const [isGenerateReportsClicked, setGenerateReportsClicked] = useState(
        false
    );
    const [isAboutClicked, setAboutClicked] = useState(false);
    const [date, setDate] = useState(new Date());
    const [expandedKeys, setExpandedKeys] = useState([]);
    const [isInplaceOpen, setIsInplaceOpen] = useState(false);
    {
        /* Inplace */
    }
    const [value, setValue] = useState("");
    const products = [
        {
            code: "001",
            name: "Product 1",
            category: "Category 1",
            quantity: 10,
        },
        // Add more product data as needed
    ];
    {
        /* Inplace */
    }
    const initialProducts = [
        {
            code: "001",
            name: "Product 1",
            category: "Category 1",
            quantity: 10,
        },
        {
            code: "002",
            name: "Product 2",
            category: "Category 2",
            quantity: 15,
        },
    ];
    const onOpen = () => {
        setIsInplaceOpen(true);
    };
    {
        /* Inplace until here */
    }
    const items1 = [
        {
            label: "",
            items: [
                {
                    label: "Create Event",
                    icon: "pi pi-fw pi-plus",
                    command: () => {
                        setCreateEventClicked(true);
                        setDashboardClicked(false);
                        setCalendarClicked(false);
                        setGenerateReportsClicked(false);
                        setAboutClicked(false);
                    },
                },
            ],
        },
    ];
    const items2 = [
        {
            label: "",
            items: [
                {
                    label: "Dashboard",
                    icon: "pi pi-th-large",
                    command: () => {
                        setDashboardClicked(true);
                        setCreateEventClicked(false);
                        setCalendarClicked(false);
                        setGenerateReportsClicked(false);
                        setAboutClicked(false);
                    },
                },
                {
                    separator: true,
                },
                {
                    label: "Calendar",
                    icon: "pi pi-calendar",
                    command: () => {
                        setCalendarClicked(true);
                        setCreateEventClicked(false);
                        setDashboardClicked(false);
                        setGenerateReportsClicked(false);
                        setAboutClicked(false);
                    },
                },
                {
                    separator: true,
                },
                {
                    label: "Generate Reports",
                    icon: "pi pi-external-link",
                    command: () => {
                        setGenerateReportsClicked(true);
                        setCreateEventClicked(false);
                        setDashboardClicked(false);
                        setCalendarClicked(false);
                        setAboutClicked(false);
                    },
                },
                { separator: true },
                { separator: true },
                { separator: true },
                { separator: true },
                { separator: true },
                { separator: true },
                { separator: true },
                { separator: true },
                { separator: true },
                { separator: true },
                {
                    label: "About",
                    icon: "pi pi-question",
                    command: () => {
                        setAboutClicked(true);
                        setCreateEventClicked(false);
                        setDashboardClicked(false);
                        setCalendarClicked(false);
                        setGenerateReportsClicked(false);
                    },
                },
            ],
        },
    ];
    {
        /* Calendar portion, katong naay expand */
    }
    const expandAll = () => {
        setExpandedKeys(nodes.map((node) => node.key));
    };
    const collapseAll = () => {
        setExpandedKeys([]);
    };
    const nodes = [
        {
            key: "1",
            label: "November",
            children: [{ key: "1.1", label: "Intramural " }],
        },
        {
            key: "2",
            label: "December",
            children: [
                { key: "2.1", label: "Node 2.1" },
                { key: "2.2", label: "Node 2.2" },
            ],
        },
    ];
    const items = [
        {
            label: "Shenna Rhea Cloribel",
            items: [{ label: "Logout", icon: "pi pi-fw pi-times" }],
        },
    ];
    const cities = [
        { name: "CCS", code: "001" },
        { name: "CPC", code: "002" },
        { name: "MLS", code: "003" },
        { name: "CABE", code: "004" },
    ];
    const [selectedCities, setSelectedCities] = useState([]);
    const location = [
        { name: "Bangke(main)", code: "001" },
        { name: "Bonifacio", code: "002" },
        { name: "Bajada", code: "003" },
    ];
    const handleHomeClick = () => {
        console.log("Home clicked");
    };
    return (
        <>
            <img className="logo" src={logo} alt="" />
            <div className="addnew">
                <Menu className="insidethe-addnew" model={items1} />
            </div>
            <div className="dash">
                <Menu className="insidethe-addnew" model={items2} />
            </div>
            {isCreateEventClicked && (
                <>
                    <img className="userr" src={userr} alt="" />
                    <div className="logout">
                        <TieredMenu model={items} breakpoint="767px" />
                    </div>
                    {/* Your time component goes here */}
                    <div className="Header">
                        <h1>Dashboard</h1>
                        <h4 className="Thurs">Thursday</h4>
                    </div>
                    <div className="no">
                        <h4>, 02 November 2023</h4>
                    </div>
                    <div className="ivy">
                        <h1 className="Hi">Hi, Shenna</h1>
                        <p className="day">Ready to start your day?</p>
                    </div>
                    <img className="girl" src={girl} alt="" />
                    <div className="event">
                        <p>Events</p>
                    </div>
                    <div className="intrams">
                        <p>Intramural</p>
                    </div>
                    <div className="ccs">
                        <p>College Days</p>
                    </div>
                    <div className="cnight">
                        <p>CSS Nights</p>
                    </div>
                    <div className="card flex justify-content-center">
                        <Button id="Button1" label="Open" severity="danger" />
                    </div>
                    <div className="card2 flex justify-content-center">
                        <Button id="Button1" label="Open" severity="danger" />
                    </div>
                    <div className="card3 flex justify-content-center">
                        <Button id="Button1" label="Open" severity="danger" />
                    </div>
                    <div className="card4 flex justify-content-center">
                        <Button
                            className="Button4"
                            label="Start Event"
                            severity="danger"
                        />
                    </div>
                    <div className="card5 flex justify-content-center">
                        <Button
                            className="Button5"
                            label="Start Event"
                            severity="danger"
                        />
                    </div>
                    <div className="card6 flex justify-content-center">
                        <Button
                            className="Button6"
                            label="Start Event"
                            severity="danger"
                        />
                    </div>
                    <div className="dashboard-content flex justify-content-center"></div>
                    <div className="pink">
                        <div className="gen">
                            <h2>Add Event</h2>
                        </div>
                        <div className="apple">
                            <div className="evnme">
                                <h4>Event Name:</h4>
                                <div className="searchh">
                                    <InputText
                                        value={value}
                                        onChange={(e) =>
                                            setValue(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="mango">
                                <h4>Date From:</h4>
                                <div className="oums">
                                    <InputText
                                        value={value}
                                        onChange={(e) =>
                                            setValue(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="milk">
                                <h4>Date to:</h4>
                                <div className="yum">
                                    <InputText
                                        value={value}
                                        onChange={(e) =>
                                            setValue(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="loc">
                                <h4>Department:</h4>
                                <div className="loc1">
                                    <MultiSelect
                                        value={selectedCities}
                                        onChange={(e) =>
                                            setSelectedCities(e.value)
                                        }
                                        options={cities}
                                        optionLabel="name"
                                        placeholder="Select Department "
                                        maxSelectedLabels={3}
                                        className="w-full md:w-20rem"
                                    />
                                </div>
                            </div>
                            <div className="dep">
                                <h4>Location:</h4>
                                <div className="loc1">
                                    <MultiSelect
                                        value={selectedCities}
                                        onChange={(e) =>
                                            setSelectedCities(e.value)
                                        }
                                        options={location}
                                        optionLabel="name"
                                        placeholder="Select Location "
                                        maxSelectedLabels={3}
                                        className="w-full md:w-20rem"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="save">
                            <Button
                                label="Save"
                                rounded
                                className="customButton"
                            />
                        </div>
                        <div className="cancel">
                            <Button
                                icon="pi pi-times"
                                severity="danger"
                                aria-label="Cancel"
                                className="customCancelButton"
                            />
                        </div>
                        <div className="close">
                            <p>Close</p>
                        </div>
                    </div>
                </>
            )}
            {isDashboardClicked && (
                <>
                    <img className="userr" src={userr} alt="" />
                    <div className="logout">
                        <TieredMenu model={items} breakpoint="767px" />
                    </div>
                    {/* Your content for the Dashboard button goes here */}
                    <div className="Header">
                        <h1>Dashboard</h1>
                        <h4 className="Thurs">Thursday</h4>
                    </div>
                    {/* 
<div className='no'>
   <h4>, 02 November 2023</h4>
</div>
*/}
                    <div class="custom-box">
                        <div className="plan">
                            <p>Acitvity Plan</p>
                        </div>
                        <div className="play1">
                            <p>Intramurals</p>
                        </div>
                        <div className="card flex justify-content-center">
                            <Button
                                id="Button1"
                                label="Open"
                                severity="danger"
                            />
                        </div>
                        <div className="card2 flex justify-content-center">
                            <Button
                                id="Button1"
                                label="Open"
                                severity="danger"
                            />
                        </div>
                        <div className="card3 flex justify-content-center">
                            <Button
                                id="Button1"
                                label="Open"
                                severity="danger"
                            />
                        </div>
                        <div className="card4 flex justify-content-center">
                            <Button
                                className="Button4"
                                label="Start Event"
                                severity="danger"
                            />
                        </div>
                        <div className="card5 flex justify-content-center">
                            <Button
                                className="Button5"
                                label="Start Event"
                                severity="danger"
                            />
                        </div>
                        <div className="card6 flex justify-content-center">
                            <Button
                                className="Button6"
                                label="Start Event"
                                severity="danger"
                            />
                        </div>
                    </div>
                    <div class="custom-box2"></div>
                    <div className="dashboard-content flex justify-content-center"></div>
                </>
            )}
            {isCalendarClicked && (
                <>
                    <img className="userr" src={userr} alt="" />
                    <div className="logout">
                        <TieredMenu model={items} breakpoint="767px" />
                    </div>
                    <div className="Header">
                        <h1>Calendar</h1>
                        <h4 className="Thurs">Thursday</h4>
                    </div>
                    <div className="Toome">
                        <h4>,02 November 2023</h4>
                    </div>
                    <div className="ivy">
                        <h1 className="Hi">Hi, Shenna</h1>
                        <p className="day">Ready to start your day?</p>
                    </div>
                    <img className="girl" src={girl} alt="" />
                    <div className="car">
                        <h3>Calendar</h3>
                    </div>
                    <div className="Calendar-container">
                        <Calendar
                            value={date}
                            onChange={(e) => setDate(e.value)}
                            inline
                            showWeek
                        />
                    </div>
                    <div className="events">
                        <h3>Schedule, Event</h3>
                    </div>
                    <Tree
                        value={nodes}
                        expandedKeys={expandedKeys}
                        onToggle={(e) => setExpandedKeys(e.value)}
                        className="w-full md:w-30rem"
                    />
                    <div className="calendar-content flex justify-content-center"></div>
                </>
            )}
            {isGenerateReportsClicked && (
                <>
                    <img className="userr" src={userr} alt="" />
                    <div className="logout">
                        <TieredMenu model={items} breakpoint="767px" />
                    </div>
                    {/* Your content for the Generate Reports button goes here */}
                    <div className="pink-box">
                        <div className="generate">
                            <h2>Generate Reports</h2>
                        </div>
                        <div className="inner-box">
                            {/* DRE KANA MAG BUTANG OG MGA CONTENT NIMO MICAH*/}
                        </div>
                    </div>
                    <div className="reports-content flex justify-content-center"></div>
                </>
            )}
            {isAboutClicked && (
                <>
                    <img className="userr" src={userr} alt="" />
                    <div className="logout">
                        <TieredMenu model={items} breakpoint="767px" />
                    </div>
                    {/* Your content for the About button goes here */}
                    {/*
<h1 className='About'>ABOUT US.</h1>
<p className='per'>The University Student Attendance Monitoring System (USAMS) has brought about a positive transformation in the academic journey of our Computer Science students. 
   The system's intuitive interface has made it easier for both faculty and students in the department to navigate, enhancing their overall experience.
          The system's user-friendly interface and seamless integration into our existing infrastructure have made it a valuable asset for both faculty and administrative staff. The real-time attendance tracking feature ensures that we can promptly address any concerns related to student attendance and engagement. This has not only streamlined administrative processes but has also enhanced the overall learning experience for our students.
</p>
*/}
                    <h1 className="About">ABOUT US.</h1>
                    <div className="per">
                        <p>
                            The University Student Attendance Monitoring System
                            (USAMS) has brought about a positive transformation
                            in the academic journey of our Computer Science
                            students.{" "}
                        </p>
                        <p>
                            The system's intuitive interface has made it easier
                            for both faculty and students in the department to
                            navigate, enhancing their overall experience.The
                            system's user-friendly interface
                        </p>
                        <p>
                            and seamless integration into our existing
                            infrastructure have made it a valuable asset for
                            both faculty and administrative staff.The real-time
                            attendance tracking feature ensures{" "}
                        </p>
                        <p>
                            that we can promptly address any concerns related to
                            student attendance and engagement. This has not only
                            streamlined administrative processes but has also
                            enhanced the overall{" "}
                        </p>
                        <p>learning experience for our students.</p>
                    </div>
                    <h1 className="team">MEET THE TEAM</h1>
                    <img className="gab" src={gab} alt="" />
                    <div className="line1">
                        <h4>Al Gabriel Orig</h4>
                    </div>
                    <div className="line2">
                        <h5>Programmer</h5>
                    </div>
                    <img className="micah" src={micah} alt="" />
                    <div className="line3">
                        <h4>Princess Micah B. Espinosa</h4>
                    </div>
                    <div className="line4">
                        <h5>UI/UX designer & Document Specialist</h5>
                    </div>
                    <img className="fred" src={fred} alt="" />
                    <div className="line5">
                        <h4>Wilfredo G. Marinay</h4>
                    </div>
                    <div className="line6">
                        <h5>Analyst</h5>
                    </div>
                    <img className="tan" src={tan} alt="" />
                    <div className="line7">
                        <h4>Kyle Clancy F. Tan</h4>
                    </div>
                    <div className="line8">
                        <h5>UI/UX designer </h5>
                    </div>
                    <div className="calendar-content flex justify-content-center"></div>
                </>
            )}
        </>
    );
}
export default Intramurals;
