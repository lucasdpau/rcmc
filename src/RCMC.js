import React from 'react';

function Header(){
    return(
        <div class="main_page_header">
            <div class="main_page_header_words">
                Welcome to Royal Care Medical Center.
            </div>
        </div>
    );
}

function Body(){
    return(
        <div class="main_page_body">
            <div>
                <a href="/rehab">Rehab</a>
                <a href="/medical">Medical</a>
                <a href="/pharmacy">Pharmacy</a>
            </div>
            <div>
                <h2>Welcome to Royal Care Medical Centre</h2>
                <p>Royal Medical is an multidisciplinary clinic that aims to tackle health care in all aspects. 
                    With our knowledgeable Practitioners and friendly office administrators we are here for you for 
                    all things health related.</p>
                <p>
                Royal Care Medical Centre offers many medical services. We have multiple family physicians who can
                take appointments and walk-ins, a pharmacy to provide prescription medications, and a rehabilitation 
                centre featuring physiotherapy, massage therapy and medical aesthetics services.
                </p>
            </div>
            <div>
                <h2>Contact info</h2>
                <RcmcContactCard />
                <LakeshoreContactCard />
            </div>
            <div>
                Maps
                <br />
                <img src="./rcmc-ss.png" alt="Map to RCMC"></img>
            </div>
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