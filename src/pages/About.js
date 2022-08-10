import React from 'react';
import profile from '../assets/images/profile.jpg';

const About = () => {
  return (
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
          <p>A person who studied Information Technology who wants to make solution to innovate the future by being part of this never ending technology growth. As a developer, the core duty relies mostly not only skills but on how the projects affect other people's POV towards this industry.</p>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src={profile} class="img-fluid rounded-circle" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3 class="border-bottom ">Application Developer</h3>
            {/* <!-- <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p> --> */}
            <div class="row">
              <div class="col-lg-5">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>18 October 2000</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+63 (929) 543 9524</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Manila, Philippines</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>adolphedsue.magante@gmail.com</span></li>
                </ul>
              </div>
            </div>
            {/* <!-- <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p> --> */}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About