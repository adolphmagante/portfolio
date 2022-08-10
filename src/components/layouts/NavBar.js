import React from 'react';
import profile from '../../assets/images/profile.jpg';

const NavBar = () => {
  return (
    <div>
        {/* <!-- ======= Mobile nav toggle button ======= --> */}
        <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
    
        {/* <!-- ======= Header ======= --> */}
        <header id="header">
        <div class="d-flex flex-column">
    
            <div class="profile">
            <img src={profile} alt="" class="img-fluid rounded-circle"/>
            <h1 class="text-light"><a href="index.html">Adolph Ed Sue</a></h1>
            <div class="social-links mt-3 text-center">
                <a href="https://twitter.com/addiiee08" target="_blank" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="https://www.facebook.com/addiiee18/" target="_blank" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/addiiee08/" target="_blank" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/in/adolph-ed-sue-magante-852461206/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
            </div>
    
            <nav id="navbar" class="nav-menu navbar">
            <ul>
                <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
            </nav>
        </div>
        </header>
        {/* <!-- End Header --> */}
    </div>
  )
}

export default NavBar