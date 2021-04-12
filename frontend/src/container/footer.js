import React from 'react';
import {Footer} from '../component';


export  function FooterContainer() {
    return(
        <div className="container" >  <Footer.Link className="container1" href="#">Back to top</Footer.Link>
        <Footer className='center'>
            
            <Footer.Link className='center1' href="#">Our Partners</Footer.Link>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column className="row left">
                    <Footer.Link className="row left1" href="#">FAQ</Footer.Link>
                    <Footer.Link className="row left3" href="#">Investors</Footer.Link>
                    
                    <Footer.Link className="row left2" href="#">About cjstore</Footer.Link>
                    <Footer.Link ></Footer.Link>
                </Footer.Column>

                <Footer.Column>

                    <Footer.Link className="row left4" href="#">Sell products</Footer.Link>

                </Footer.Column>

                <Footer.Column className="row right">
                    <Footer.Link href="#">Help Centre</Footer.Link>
                    <Footer.Link className="row right2" href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                    <Footer.Link ></Footer.Link>
                
                </Footer.Column>

                <Footer.Column className="row left5">
                   
                    <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                
                </Footer.Column>

                <Footer.Column className="row left5">
                    <Footer.Link href="#">Best Seller</Footer.Link>
                    <Footer.Link href="#">Buy Gift Cards</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                
                </Footer.Column>
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text ></Footer.Text>
        </Footer>
        </div>
    )
}