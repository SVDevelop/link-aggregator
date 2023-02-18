import { useTransition, animated } from '@react-spring/web'
import { Routes, Route, useLocation } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound'
import Layout from './components/Layout/Layout';


function App() {
  const location = useLocation()
  // const [transitions, api] = useTransition(data, () => ({
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 1 },
  // }))

  console.log('location', location)
  return (
    <>
    {/* {transition.map(({item, props, key}) => (
      <animated.div key={key} style={props}>
        
      </animated.div>
    ))} */}
      <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="about" element={<About />} />
            <Route path="about" element={<Contacts />} /> */}
            <Route
              path="*"
              element={<NotFound error={'404'} title={'Страница не найдена'} />}
            />
          </Route>
        </Routes>
    </>
  )
}

export default App
