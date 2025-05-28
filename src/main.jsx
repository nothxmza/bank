import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Page/App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Layout } from './components/Layout.jsx'
import Login from './Page/Login.jsx'
import Profile from './Page/Profile.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><App /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
