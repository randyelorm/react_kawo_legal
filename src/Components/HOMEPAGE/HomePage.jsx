import React from 'react';
import { Link} from "react-router-dom"
import Logo from "../../Images/logo.png"
import "./home.css"


const HomePage = () => {
    return (
        <>
    
       <div class="row Home_container">

            <div class="col-sm-12">

          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                      
                <div class="carousel-inner" role="listbox">
                        <div class="item active home_image_container">

                           
                                <nav class=" navbar_main_container">
                                  <div class="nav_container">
                                  
                                    <div class="navbar-header">
                                      
                                      <a class="navbar-brand logo" href="#"> <img src={Logo}alt="" class = "logo"/> </a>
                                    </div>
                                
                            
                                
                                      <ul class="nav_links">
                                        <li> <Link to = "/" >Home </Link></li>
                                        <li><Link to = "/startups" >Startups</Link> </li>
                                        <li><Link href="/register" >Register</Link></li>
                                        <li><Link href="login.html" >Login</Link></li>
                  
                                      </ul>
                                  
                                  </div>
                                </nav>

                         <div className = "page_info">
                             <div>
                              <p class = "kawolegal text-center"> KAWOLEGAL</p>
                              <p class = "home_text text-center"> A collaborative ecosystem for problem </p>
                              <p class = "home_text2 text-center"> solvers and support for startups.</p>
                             </div>
                                  

                              <a href=""><button type="button" class="btn btn-default text-center register_now">Register Now!!</button></a>
                         </div>
                          

                             
                            

                          </div>  
              
                </div> 
          </div>  
            
           
         </div> 



         

</div> 



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

export default HomePage;
