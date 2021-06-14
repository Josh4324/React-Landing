import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function CreatorPage(props) {
    const [modal, setmodal] = useState(false);

    const onModal = () => {
        setmodal(!modal)
    }
    return (
        <div className="creator-page">
             <div class="main-wrapper">


<div class="main-content pt-0">

    <div class="nav-header border-0">
        <div class="nav-top">
            <Link to="/" class="logo"> <img src="images/trendupp-logo-icon.png"
                    alt="Trendupp Logo"/>
            </Link>
        </div>
    </div>
    
    <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left">
            <div class="row">
                <div class="col-md-9 mx-auto">

                    <div class="card card-creator card-creator-bio pt-0">
                        <div class="card-body">

                            <h3 class="card-creator-bio--title">Twyse Ereme</h3>
                                <p class="card-creator-bio--body">
                                    Travel & Lifestyle YouTuber living in Lagos, Nigeria. I create content around Lifestyle, Real Estate, Travel & more...

                                    <a onClick={onModal} class="btn btn-md mt-3 supportBtn"><svg
                                            enable-background="new 0 0 512 512" height="512"
                                            viewBox="0 0 512 512" width="512"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <g>
                                                    <path
                                                        d="m246.122 477.289c-144.417-126.367-246.122-193.304-246.122-299.774 0-80.513 57.4-146.515 136-146.515 54.544 0 95.017 33.497 120 81.015 24.981-47.515 65.454-81.015 120-81.015 78.609 0 136 66.015 136 146.515 0 106.457-101.572 173.291-246.122 299.773-5.657 4.949-14.1 4.949-19.756.001z" />
                                                </g>
                                            </g>
                                        </svg> Support Twyse</a>
                                </p>

                                <div class="card-body card-creator-about">
                                   
                                    <p class="card-creator-about-text">Kia ora and hello from Aotearoa, the land
                                        of the long white cloud. Join my Virtual Walking Tours around New
                                        Zealand. Enjoy beautiful nature, local lifestyle, food and fun. Join
                                        Lunch with Louise for cooking and food, coffee and cafes. Let's Go to
                                        the real Middle Earth and walk on Rainbows and Fossil Forests. Join me
                                        daily on Happs.tv, IG, YouTube & Twitter
                                        I love my coffee. Your coffees keep me inspired and motivated so I can
                                        share lots more with you. Thank you 😍</p>

                                </div>
                                <div class="card-body card-creator-about-social">
                                    <a href="#" class="card-creator-about-social--item"><i
                                            class="feather-twitter"></i> </a>
                                    <a href="#" class="card-creator-about-social--item"><i
                                            class="feather-instagram"></i></a>
                                    <a href="#" class="card-creator-about-social--item"><i
                                            class="feather-youtube"></i></a>
                                    <a href="#" class="card-creator-about-social--item"><i
                                            class="feather-facebook"></i></a>
                                    <a href="#" class="card-creator-about-social--item"><i
                                            class="feather-link"></i></a>
                                </div>
                        </div>
                    </div>

                    <div class="card card-creator mb-3">
                        <div class="card-body card-creator-meta">
                           
                            <h4 class="card-creator-meta--author"> <a href="#">Twyse Ereme </a> <span
                                    class="card-creator-meta--date">March 2,
                                    2022</span></h4>

                        </div>
                        <div class="card-body card-creator-image">
                            <a href="#"><img src="images/egypt-lg.jpg" class="" alt="image"/></a>
                        </div>
                        <div class="card-body p-0 me-lg-5">
                            <a href="#">
                                <h3 class="card-creator-title">We went on tour in Cairo, Egypt</h3>
                                <p class="card-creator-text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
                                    faucibus mollis pharetra. Proin blandit ac massa sed rhoncus...</p>
                            </a>

                        </div>
                    </div>

                    <div class="card card-creator card-creator-locked mb-3">
                        <div class="card-body card-creator-meta">
                           
                            <h4 class="card-creator-meta--author"><a href="#">Twyse Ereme </a> <span
                                    class="card-creator-meta--date">March 2,
                                    2022</span></h4>

                        </div>
                        <div class="card-body card-creator-image">
                            <a href="#" class="supportBtn">
                            <img src="images/jamaica-lg.jpg" class="" alt="image"/>
                            <span class="locked-content-overlay">
                                <i class="locked-content-overlay-icon feather-lock"></i>
                                <h3 class="locked-content-overlay-title">This posts is for supporters</h3>
                                    
                                    <span class="btn locked-content-overlay-btn">
                                        <svg
                                            enable-background="new 0 0 512 512" height="512"
                                            viewBox="0 0 512 512" width="512"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <g>
                                                    <path
                                                        d="m246.122 477.289c-144.417-126.367-246.122-193.304-246.122-299.774 0-80.513 57.4-146.515 136-146.515 54.544 0 95.017 33.497 120 81.015 24.981-47.515 65.454-81.015 120-81.015 78.609 0 136 66.015 136 146.515 0 106.457-101.572 173.291-246.122 299.773-5.657 4.949-14.1 4.949-19.756.001z" />
                                                </g>
                                            </g>
                                        </svg> Support Twyse
                                    </span>
                            </span>
                            </a>
                        </div>
                        
                        
                        
                        
                        <div class="card-body p-0 me-lg-5">
                            <a href="#">
                                <h3 class="card-creator-title">I lived in a village in Ethiopia Africa</h3>
                                <p class="card-creator-text">Unlock this post by supporting Twyse</p>
                            </a>

                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>

</div>


<div class="app-footer border-0 shadow-lg bg-primary-gradiant">
    <a href="#" class="btn supportBtn"><svg enable-background="new 0 0 512 512" height="512"
            viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
            <g>
                <g>
                    <path
                        d="m246.122 477.289c-144.417-126.367-246.122-193.304-246.122-299.774 0-80.513 57.4-146.515 136-146.515 54.544 0 95.017 33.497 120 81.015 24.981-47.515 65.454-81.015 120-81.015 78.609 0 136 66.015 136 146.515 0 106.457-101.572 173.291-246.122 299.773-5.657 4.949-14.1 4.949-19.756.001z" />
                </g>
            </g>
        </svg> Support Twyse</a>
</div>

</div>

        {
            modal ? (
                <div class="popup-wrapper pt-0" id="popupWrapper">
                <div class="popup-blocker" id="popupBlocker"></div>
                <div class="popup-body card card-creator card-creator-support  mw-600 mx-auto bg-white p-5 rounded-xxl">
    
                <span class="popup-del" id="popupDel" onClick={onModal}><i class="feather-x"></i></span>
            <div class="card-body">
           
            <h3 class="card-creator-bio--title mb-4 text-center">Support Twyse Ereme</h3>
                <form action="">
                    <div class="row">
                        <div class="col-12 mb-3 text-center">
                            <div class="radio-circle-wrapper">
                            <input type="radio" name="support-type" value="one-time" class="support-type-radio radio-circle-input" checked id="support-type_onetime"/>
                            <label for="support-type_onetime" class="support-type radio-circle-label"> One-time</label>
                            </div>
                            
                            <div class="radio-circle-wrapper">
                            <input type="radio" name="support-type" value="monthly" class="support-type-radio radio-circle-input" id="support-type_monthly"/>
                            <label for="support-type_monthly" class="support-type radio-circle-label"> Monthly</label>
                            </div>
                            
                        </div>
                    </div>
                    <div class="row radio-row mb-2">
                        <div class="col-6">
                            <input type="radio" name="support-amount" class="radio-option" id="supportAmount1"
                                value="1000"/>
                            <label for="supportAmount1" class="radio-option-label">₦1,000</label>
                        </div>
                        <div class="col-6">
                            <input type="radio" name="support-amount" class="radio-option" id="supportAmount2"
                                value="1000"/>
                            <label for="supportAmount2" class="radio-option-label">₦3,000</label>
                        </div>
                    </div>
                    <div class="row radio-row mb-2">
                        <div class="col-6">
                            <input type="radio" name="support-amount" class="radio-option" id="supportAmount3"
                                value="1000"/>
                            <label for="supportAmount3" class="radio-option-label">₦5,000</label>
                        </div>
                        <div class="col-6">
                            <input type="radio" name="support-amount" class="radio-option" id="supportAmount4"
                                value="1000"/>
                            <label for="supportAmount4" class="radio-option-label">₦10,000</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-2">
    
                            <div class="form-group form-group-icon form-group-primary-light">
    
                                <input type="radio" name="support-amount" class="d-none" id="supportAmountC"/>
                                <span class="input-icon">₦</span>
                                <input type="text" class="form-control mb-0" placeholder="other amount" />
    
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
    
                        <div class="col-lg-12 mb-3">
                            <label for=""> Send Twyse a message</label>
                            <textarea class="form-control mb-0 p-3 h100 bg-greylight lh-16" rows="5"
                                placeholder="Say something nice... (optional)" spellcheck="false"></textarea>
                        </div>
    
                    </div>
                    <div class="row">
    
                        <div class="col-lg-12">
    
                            <button type="submit" class="btn d-block mb-3 w-100"><svg enable-background="new 0 0 512 512"
                                    height="512" viewBox="0 0 512 512" width="512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <g>
                                            <path
                                                d="m246.122 477.289c-144.417-126.367-246.122-193.304-246.122-299.774 0-80.513 57.4-146.515 136-146.515 54.544 0 95.017 33.497 120 81.015 24.981-47.515 65.454-81.015 120-81.015 78.609 0 136 66.015 136 146.515 0 106.457-101.572 173.291-246.122 299.773-5.657 4.949-14.1 4.949-19.756.001z" />
                                        </g>
                                    </g>
                                </svg> Support Twyse</button>
                        </div>
                    </div>
    
                </form>
    
                <form action="">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <input type="email" class="form-control style2-input mb-3" placeholder="Email" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <input type="text" class="form-control style2-input mb-3" placeholder="First Name"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <input type="text" class="form-control style2-input mb-3" placeholder="Last Name"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-2">
    
                            <p class="mb-2">Amount</p>
                            <h4 class="form-header">₦10,000 <span class="text-grey-500 font-xsss">monthly</span>
                            </h4>
                        </div>
                    </div>
                    <div class="row">
    
                        <div class="col-lg-12">
    
                            <button type="submit" class="btn d-block w-100">Pay with Flutterwave</button>
    
                            <img src="images/cff1437-Badge_1_1.png" class=" d-inline-block mt-4 w-100" alt=""/>
                        </div>
                    </div>
    
                </form>
    
    
        </div>
    
    
    
    </div>
    </div>
            ) : null
        }

       
        </div>
    )
}