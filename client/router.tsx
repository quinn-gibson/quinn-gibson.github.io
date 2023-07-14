import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </>
  )
)

export default router