import { Link } from "react-router-dom";

export default function Navbar() {
  //   const toggleButton = document.getElementsByClassName('toggle-button')[0]
  //   const navbarLinks = document.getElementsByClassName('navbar-links')[0]

  //   toggleButton.addEventListener('click', () => {
  //   navbarLinks.classList.toggle('active')
  // })
  return (
    <>
      {/*      
     <nav className="navbar">
       <div className="brand-title">Veerbhadreshwar Temple</div>
       <a href="" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
       </a>
       <div className="navbar-links">
         <ul className="classList">
           <li> <a href="/">Home</a></li>
           <li><a href="/">Photos</a></li>
           <li><a href="https://www.google.com/maps/place/Shree+Veerabhad
           reshwar+Temple+Gokul/@17.8977903,77.0116458,16.74z/data=!4m6!3m5!1s0x3bcf235300000001
           :0x876c692b09504b76!4b1!8m2!3d17.8979172!4d77.0142156"> Location</a> </li>
           </ul>
       </div>
     </nav> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Veerbhadreshwar Temple</a> */}
          <h5 className="navbar-brand">Veerbhadreshwar Temple</h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/photos">
                  Photos
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.google.com/maps/place/Shree+Veerabhad
           reshwar+Temple+Gokul/@17.8977903,77.0116458,16.74z/data=!4m6!3m5!1s0x3bcf235300000001
           :0x876c692b09504b76!4b1!8m2!3d17.8979172!4d77.0142156"
                >
                  Location
                </a>
              </li>
            </ul>
            {/* <span class="navbar-text">
        Navbar text with an inline element
      </span> */}
          </div>
        </div>
      </nav>
    </>
  );
}
