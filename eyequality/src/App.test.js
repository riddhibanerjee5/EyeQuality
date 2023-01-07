
import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import LandingPage from './Pages/LandingPage';
import MapPage from './Pages/MapPage';
import LoginPage from './Pages/LoginPage';
import SurveyPage from './Pages/SurveyPage';
import NavigationBar from './Components/Navigationbar';
import InfoPage from './Pages/InfoPage';
import Mark from './Components/Mark';
import App from './App';




  describe("<Landing Page />", () => {
    it("Renders <Landing Page /> component correctly", () => {
      const { getByText } = render(<LandingPage />);
      expect(getByText(/Welcome/i)).toBeInTheDocument();
      
    });
    it("<Landing Page /> has everything", () => {
      const { getByText } = render(<LandingPage />);
      expect(getByText(/Login as/i)).toBeInTheDocument();
      expect(getByText(/View Map/i)).toBeInTheDocument();
    });
  });


  describe("<Map Page />", () => {
    it("Renders <Map Page /> component correctly", () => {
      const { getByText } = render(<MapPage />);
      expect(getByText(/Map Page/i)).toBeInTheDocument();
    });
  });

  describe("<Info Page />", () => {
    it("Renders <Info Page /> component correctly", () => {
      const { getByText } = render(<InfoPage />);
      expect(getByText(/About/i)).toBeInTheDocument();
    });
  });


  describe("<Mark  />", () => {
    it("Render mark when clicked", () => {
      const { getByText } = render(<Mark clicked={true}/>);
      expect(getByText(/Hello/i)).toBeInTheDocument();
    });
  });


  describe("<LoginPage  />", () => {
    it("Render Login page", () => {
      const AuthContext = React.createContext();
      const addItem = jest.fn()
      const { getByText } = render(
        <AuthContext.Provider value={{ addItem }}>
          <LoginPage />
        </AuthContext.Provider>
      );
      expect(getByText(/Login/i)).toBeInTheDocument();
    });
    it("renders Login Button", () => {
      const AuthContext = React.createContext();
      const addItem = jest.fn()
      const { getByText } = render(
        <AuthContext.Provider value={{ addItem }}>
          <LoginPage />
        </AuthContext.Provider>
      );
      expect(getByText(/Sign in/i)).toBeInTheDocument();
    });
  });



  
  

  
  
  
  
  

