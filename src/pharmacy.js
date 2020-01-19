import React from 'react';
import "./rcmcmain.css";

function PhHeader(){
    return(
        <div class="pharmacy_page_header">
            <div class="main_page_header_words pharmacy_page_header_words">
                <img src="./pharmacy-icon-transparent.png" alt="royal care pharmacy logo"></img>
                <p>Royal Care Pharmacy</p>
            </div>
        </div>
    );
}

function PhBody(props){
    return(
        <div>
            <div>
                <a href="#medical" className="three-links-medical"
                onClick={() => props.onClick("medical")}>
                    <img src="./medical-icon.png" className="three-links-img" alt="medical logo"></img>
                    <br />
                    Medical
                </a>
            </div>
            <div>
                Royal Care Pharmacy offers excellent customer service and can provide you with quality 
                prescriptions, nutritional products, and any health information you require. Catering to many 
                students and families, we take pleasure in optimizing our clients overall health and knowledge and in creating 
                a welcoming experience for all. We are here to provide maximum care for our patients. Please feel 
                free to contact us if you have any questions regarding your medication or health.
            </div>
        </div>
    );
}

function PhFooter(){
    return(
        <div class="main_page_footer">
            <div>
                Copyright © Royal Care
            </div>

        </div>
    );
}

export {PhHeader, PhBody, PhFooter};