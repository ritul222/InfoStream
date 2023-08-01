import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav  class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top"  >
     {/* <nav class="navbar navbar-dark bg-dark">
  */}
    <div class="container-fluid">
    <a class="navbar-brand" href="#"><strong>InfoStream</strong></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
         
            <a class="nav-link active" aria-current="page" href="/business"> Business</a>
          
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/sports">Sports</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/trending">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/entertainment">Entertainment</a>
          </li>
          <li class="nav-item">
         
         <a class="nav-link active" aria-current="page" href="/world"> World</a>
       
       </li>
        </ul>
       
      </div>
    </div>
  </nav>
  );
}

export default Navbar;


//stock api benzing  9f63105acd9142fda9168673f405eaa0