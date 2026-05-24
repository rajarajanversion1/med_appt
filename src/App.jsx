import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from './component/Navbar/Navbar.jsx'
import Sign_Up from './component/Sign_Up/Sign_Up.jsx'
import Login from './component/Login/Login.jsx'
import Home from './component/Home.jsx'
import GetStarted from './component/getstarted/getstarted.jsx'
import InstantConsultation from './component/InstantConsultationBooking/InstantConsultation.jsx'
import AppointmentFormIC from './component/InstantConsultationBooking/AppointmentFormIC/AppointmentFormIC.jsx'
import BookingConsultation from './component/BookingConsultation.jsx';
import Notification from './component/Notification/Notification.jsx'
import ReviewForm from './component/ReviewForm/ReviewForm.jsx';
import ReviewFormApp from './component/ReviewFormApp.jsx';

function App() {
  return (
    <>
      <Router>
        <Notification>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/getstarted" element={<GetStarted />}></Route>
          <Route path="/instant-consultation" element={<InstantConsultation />}></Route>
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/login" element={<Login />} />
          <Route path='/search/doctors' element={<AppointmentFormIC/>}></Route>
          <Route path="/booking-consultation" element={<BookingConsultation />}/>
          <Route path="/reviews" element={<ReviewForm />} />
          <Route path="/reviews" element={<ReviewFormApp />} />
        </Routes>
        </Notification>
      </Router>
    </>
  )
}

export default App