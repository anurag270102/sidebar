import React, { Component } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faInfo, faFile, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarCollapsed: false,
      isMobileView: false,
    };
  }

  componentDidMount() {
    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkMobileView);
  }

  checkMobileView = () => {
    this.setState({
      isMobileView: window.innerWidth < 768,
    });
  };

  handleSidebarToggle = () => {
    this.setState((prevState) => ({
      isSidebarCollapsed: !prevState.isSidebarCollapsed,
    }));
  };

  render() {
    const { isSidebarCollapsed, isMobileView } = this.state;
    const buttonIcon = isSidebarCollapsed ? faBars : faTimes;

    return (
      <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        {isSidebarCollapsed?'':<div className="sidebar-header">
          <h3>My Sidebar</h3>
        </div>}
        <ul className="list-unstyled components">
          <li>
            <a href="/">{isSidebarCollapsed ?   
                <FontAwesomeIcon icon={faHome}/> : 'home'}</a>
          </li>
          <li>
            <a href="/">
                {isSidebarCollapsed ?   
                  <FontAwesomeIcon icon={faInfo} />:  'About'}
               </a>
          </li>
          <li>
            <a href="/">
                {isSidebarCollapsed ?   
                 <FontAwesomeIcon icon={faFile} />:'Services' }
                 </a>
          </li>
          <li>
            <a href="/">
                {isSidebarCollapsed ?   
               <FontAwesomeIcon icon={faBriefcase} /> : 'Portfolio'}
                 </a>
          </li>
          <li>
            <a href="/">
                {isSidebarCollapsed ?   
                 <FontAwesomeIcon icon={faEnvelope} />: 'Contact'}
                 </a>
          </li>
        </ul>
        
        <div className="corner-button">
          <button
            onClick={this.handleSidebarToggle}
            className={`responsive-button ${
              isSidebarCollapsed ? 'closed' : 'open'
            }`}
          >
            <FontAwesomeIcon icon={buttonIcon} />
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
