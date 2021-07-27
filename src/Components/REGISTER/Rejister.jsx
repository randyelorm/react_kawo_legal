import { Link} from "react-router-dom"
import Logo from "../../Images/logo.png"
import "./register.css"





import React from 'react';

const Rejister = () => {
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
                            <li><Link to="/register" >Register</Link> </li>
                            <li><Link to="login" >Login</Link></li>
      
                          </ul>
                      
                      </div>
                    </nav>

                    <div class="search_box row">
                        <div class="col-sm-12">

                            <form>
                                <div class="input-group container search_box_container">
                                    <label htmlFor=""> <span>Full Name</span> </label>
                                             <input type="text" class="form-control" placeholder="Full Name"/>
                                 

                                  <br />
                                  <br />
                                  <br />
                                  <br />
                                  

                                  <label htmlFor=""> <span>Email Address</span> </label>
                                             <input type="email" class="form-control" placeholder="Full Name"/>
                                 

                                  <br />
                                  <br />
                                  <br />
                                  <br />

                                  <label htmlFor=""> <span>Password</span> </label>
                                             <input type="text" class="form-control" placeholder="Full Name"/>
                                 

                                  <br />
                                  <br />
                                  <br />
                                  <br />
                                  

                                  <label htmlFor=""> <span>Confirm Password</span>  </label>
                                 <input type="text" class="form-control" placeholder="Full Name"/>
                                

                                 <br />
                                 <br />
                                 <br />
                                 <br />
                                             <button className ="sign_up">Sign Up</button>
                                </div>

                                       
                               
                              </form>

                            

                            

                        </div>

                    </div>

                      <br />
                      <br />
                    <div className = "startup_body_box container">

         

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

export default Rejister;
