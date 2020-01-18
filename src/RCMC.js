import React from 'react';
import "./rcmcmain.css";

function Header(){
    return(
        <div className="main_page_header">
            <div className="main_page_header_words">
                Welcome to Royal Care Medical Center
            </div>
        </div>
    );
}

function Body(){
    return(
        <div className="main_page_body">
            <div className="three-links">
                <a href="/rehab" className="three-links-rehab">
                    <img src="./rehab-icon.jpg" className="three-links-img" alt="rehab logo"></img>
                    <br />
                    Rehab
                </a>
                <a href="/medical" className="three-links-medical">
                    <img src="./medical-icon.png" className="three-links-img" alt="medical logo"></img>
                    <br />
                    Medical
                </a>
                <a href="/pharmacy" className="three-links-pharmacy">
                    <img src="./pharmacy-icon.png" className="three-links-img" alt="pharmacy logo"></img>
                    <br />
                    Pharmacy
                </a>
            </div>
            <RcmcDescription />
            <div>
                <h2 className="body-header">Contact info</h2>
                <div className="card-container">
                    <RcmcContactCard />
                    <LakeshoreContactCard />
                </div>
                
            </div>
            <Contacts />
            <div className="rcmc-map-container">
                Maps
                <br />
                <img src="./rcmc-ss.png" alt="Map to RCMC" 
                className="rcmc-map"></img>
            </div>
        </div>
    );
}

function RcmcDescription(){
    return(
        <div className="rcmc-description">
            <h2 className="body-header">Welcome to Royal Care Medical Centre</h2>
            <p>Royal Medical is an multidisciplinary clinic that aims to tackle health care in all aspects. 
                With our knowledgeable Practitioners and friendly office administrators we are here for you for 
                all things health related.</p>
            <p>
            Royal Care Medical Centre offers many medical services. We have multiple family physicians who can
            take appointments and walk-ins, a pharmacy to provide prescription medications, and a rehabilitation 
            centre featuring physiotherapy, massage therapy and medical aesthetics services.
            </p>
        </div>
    );
}

function RcmcContactCard(){
    return(
        <div className="contact-card">
            <h3>Royal Care Medical Center</h3>
            <h4>295 College Street</h4>
            <h4>Toronto, ON M5T 1S2</h4>
        </div>
    );
}

function LakeshoreContactCard(){
    return(
        <div className="contact-card">
            <h3>Lakeshore West Pharmacy</h3>
            <h4>3-2083 Lake Shore Blvd West</h4>
            <h4>Toronto, ON M8V 4G2</h4>
        </div>
    );
}

function Contacts(){
    return(
        <div className="card-container">
            <div className="phone-card">
                <h4>Medical</h4>
                info@royalcaremedical.com
                <br />
                (416) 925-5511  
            </div>
            <div className="phone-card">
                <h4>Rehab</h4>
                info@royalcarerehab.com   
                <br/>       
                (416) 925-2929 
            </div>
            <div className="phone-card">
                <h4>Pharmacy</h4>
                info@royalcarepharmacy.com
                <br/>
                (416) 925 - 5000      
            </div>
            <div className="phone-card">
                <h4>Optometry</h4>
                Sandra.solano@rocketmail.com 
                <br/>
                (647) 893 - 1925  
            </div>
        </div>
    );
}


function Footer(){
    return(
        <div className="main_page_footer">
            <div>
                Copyright © Royal Care 2020
            </div>

        </div>
    );
}

export {Header, Body, Footer};