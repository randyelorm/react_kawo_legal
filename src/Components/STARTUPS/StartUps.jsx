import React from 'react';
import "./startups.css"
import { Link} from "react-router-dom"
import Logo from "../../Images/logo.png"
import think from "../../Images/think.png"
import slate from "../../Images/slate.png"
import sleek from "../../Images/sleek.png"




const StartUps = () => {
    return (
        <>
        
       <div class="row statup_container">

<div class="col-sm-12">

<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          
    <div class="carousel-inner" role="listbox">
            <div class="item active home_image_container">

               
                    <nav class=" startup_nav navbar_main_container">
                      <div class="nav_container">
                      
                        <div class="navbar-header">
                          
                          <a class="navbar-brand logo" href="#"> <img src={Logo}alt="" class = "logo"/> </a>
                        </div>
                    
                
                    
                          <ul class="nav_links">
                            <li> <Link to = "/" >Home </Link></li>
                            <li><Link to = "/startups" >Startups</Link> </li>
                            <li><Link to="/register" >Register</Link></li>
                            <li><Link to ="/login" >Login</Link></li>
      
                          </ul>
                      
                      </div>
                    </nav>

                    <div class="search_box row">
                        <div class="col-sm-12">

                            <form>
                                <div class="input-group container search_box_container">
                                  <input type="text" class="form-control" placeholder="Search Startup by name or industry"/>
                                  <div class="input-group-btn">
                                    <button class="btn btn-default search_btn_container" type="submit">
                                      <i class="glyphicon glyphicon-search search_button"> Search</i>
                                    </button>
                                  </div>
                                </div>
                              </form>

                        </div>

                    </div>

                      <br />
                      <br />
                    <div className = "startup_body_box container">

                        <span className = "startup_body">
                          <img src={think} className = "think_picture" alt="" />
                            <span>
                              <h3>Think and Zoom</h3>
                              <p>Providing Solutions for the visually imapared, such as mind-controlled zooming, and wearable controlled zooming</p>
                              <button>See full details</button>
                              
                            </span>
                        </span>


                        <span className = "startup_body">
                          <img src={slate} className = "think_picture" alt="" />
                            <span>
                              <h3>Slatecube</h3>
                              <p>Slatecube helps job seekers develop job relevant skills, gain work experience, and land well paying jobs through world-class up-skilling courses and virtual internships.</p>
                              <button>See full details</button>
                              
                            </span>
                        </span>


                        <span className = "startup_body">
                          <img src={sleek} className = "think_picture" alt="" />
                            <span>
                              <h3>Sleekjob Academy</h3>
                              <p>Trains world-class software developers in Ghana and matches them to employment opportunities.</p>
                              <button>See full details</button>
                              
                            </span>
                        </span>

                    </div>
              

                 
                

              </div>  
  
    </div> 
</div>  


</div> 





</div> 


<br />
 <br />
 <br />
 <br />

    {/* footer */}
<div class="row container-fluid footer_container">

<div class="col-sm-12 all_footer">

<div class=" social_media_container text-right">


<a class = "social_media_links fa fa-facebook" href=""> <span></span> </a> 
<a class = "social_media_links fa fa-twitter" href=""> <span></span></a> 
<a class = "social_media_links fa fa-linkedin" href=""> <span></span> </a> 
<a class = "social_media_links fa fa-instagram" href=""> <span></span> </a>


</div>

<div class="rights_container">

<p class = " rights">  &copy;2021 KawoLegal. All Rights Reserved</p>


</div>
</div>

</div>


            
        </>
    );
}

export default StartUps;
