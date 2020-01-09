import React from 'react';
import "./rcmcmain.css";

function Header(){
    return(
        <div class="main_page_header">
            <div class="main_page_header_words">
                Welcome to Royal Care Medical Center
            </div>
        </div>
    );
}

function Body(){
    return(
        <div class="main_page_body">
            <div class="three-links">
                <a href="/rehab" class="three-links-rehab">
                    <img src="./rehab-icon.jpg" class="three-links-img" alt="rehab logo"></img>
                    <br />
                    Rehab
                </a>
                <a href="/medical" class="three-links-medical">
                    <img src="./medical-icon.png" class="three-links-img" alt="medical logo"></img>
                    <br />
                    Medical
                </a>
                <a href="/pharmacy" class="three-links-pharmacy">
                    <img src="./pharmacy-icon.png" class="three-links-img" alt="pharmacy logo"></img>
                    <br />
                    Pharmacy
                </a>
            </div>
            <RcmcDescription />
            <div>
                <h2 class="body-header">Contact info</h2>
                <RcmcContactCard />
                <LakeshoreContactCard />
            </div>
            <Contacts />
            <div>
                Maps
                <br />
                <img src="./rcmc-ss.png" alt="Map to RCMC"></img>
            </div>
        </div>
    );
}

function RcmcDescription(){
    return(
        <div class="rcmc-description">
            <h2 class="body-header">Welcome to Royal Care Medical Centre</h2>
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
        <div>
            <h3>Royal Care Medical Center</h3>
            <h3>295 College Street</h3>
            <h4>Toronto, ON</h4>
            <h4>M5T 1S2</h4>
        </div>
    );
}

function LakeshoreContactCard(){
    return(
        <div>
            <h3>Lakeshore West Pharmacy</h3>
            <h3>3-2083 Lake Shore Blvd West</h3>
            <h4>Toronto, ON</h4>
            <h4>M8V 4G2</h4>
        </div>
    );
}

function Contacts(){
    return(
        <div>
            <div>
                Medical (College St.)
                info@royalcaremedical.com
                (416) 925-5511  
            </div>
            <div>
                Rehab
                info@royalcarerehab.com          
                (416) 925-2929 
            </div>
            <div>
                Pharmacy
                info@royalcarepharmacy.com
                (416) 925 - 5000      
            </div>
            <div>
                Optometry
                Sandra.solano@rocketmail.com 
                (647) 893 - 1925  
            </div>
        </div>
    );
}


function Footer(){
    return(
        <div class="main_page_footer">
            <div>
                Copyright © Royal Care
            </div>

        </div>
    );
}

export {Header, Body, Footer};