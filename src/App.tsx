

const App = () => {
  return (
    <div className="sidebar">
      <div className="logo-content">
        <div className="logo">
          <i className='bx bxl-aws'></i>
          <div className="logo-name"> Devillo</div>
        </div>
        <i className='bx bx-menu' id="btn"></i>
      </div>
      <ul className="nav-list">
      <li>
            <i className="bx bx-search-alt"></i>
            <input type="text" placeholder="search" className=""></input>
          
        </li>
        <li>
          <a href="/#">
            <i className="bx bxs-dashboard"></i>
            <span className="links-name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <i className="bx bx-home-alt"></i> 
            <span className="links-name">Home</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <i className="bx bx-user"></i>
            <span className="links-name">User</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <i className="bx bx-line-chart"></i>
            <span className="links-name">Analysis</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <i className="bx bx-cog"></i> 
            <span className="links-name">Setting</span>
          </a>
        </li>
      </ul>
      <div className="profile-content">
        <div className="profile">
          <div className="profile-details">
            <img src="./1.jpg" alt=""/>
            <div className = "name-job">
              <div className="name">Benchapon Sakhonkam</div>
              <div className="job">Front-End Engineer</div>
            </div>
          </div>
        </div>
      </div>
      <ul className="nav-list">
      <li>
      <a href="/#">
      <i className="bx bx-log-out" id ="log-out"></i>
          <span className="links-name"> Log-out</span>
      </a>
      </li>
      </ul>
     
    </div>
  );
}

export default App;
