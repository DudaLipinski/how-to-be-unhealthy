import { Route, Routes } from 'react-router'
import Content from './components/content'
import topics from './data/topics'

const AppRoutes = () => (
  <Routes>
    {topics.map(({ link }) => (
      <Route path={`/${link}`} element={<Content topic={link} />}/>
    ))}
  </Routes>
)

export default AppRoutes