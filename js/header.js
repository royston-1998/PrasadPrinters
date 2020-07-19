document.write(`
  <div class="reusedNavbar">
    <nav id="navbar_top" class="navbar navbar-expand-lg navbar-dark wofixedTop ">
      <a class="navbar-brand brandName" href="index.html">Prasad Printers
      <br><h6 class="tagLine">The Manifest Innovation of Quality.</h6></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item options">
            <a class="nav-link active" href="index.html">Home</a>
          </li>

          <li class="nav-item options">

            <div class="dropdown">
              <a class="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">About Us</a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" id="flip" href="aboutus.html">About Us</a>
                <a class="dropdown-item" href="#goGreen">Go Green</a>
              </div>
            </div>

          </li>
          <li class="nav-item options">

            <div class="dropdown">
              <a class="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Services</a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="services.html">Services</a>
                <a class="dropdown-item" href="#goGreen">Quality Assurance</a>
              </div>
            </div>

          </li>
          <li class="nav-item options">

            <a class="nav-link" href="facilities.html">Facilities</a>
          </li>

          <li class="nav-item options">
            <a class="nav-link" href="#contactUs">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>


`);
