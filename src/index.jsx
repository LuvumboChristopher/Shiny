import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import Survey from './pages/Survey/index'
import Results from './pages/Results/index'
import Freelances from './pages/Freelances/index'
import Header from './components/Header/index'
import Error from './components/Error/index'
import Footer from './components/Footer'
import { ThemeProvider, SurveyProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <SurveyProvider>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/survey/:questionNumber' element={<Survey />} />
            <Route path='/results' element={<Results />} />
            <Route path='/freelances' element={<Freelances />} />
            <Route element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </SurveyProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
