// import React from 'react'
import Data from './Components/Data'
import Pagination from './Components/Pagination'
import Search from './Components/Search'
import { useContext } from 'react'
import { AppContext } from './Components/Context'

const App = () => {
  const data = useContext(AppContext)
  return (
    <>
      <div>NEWS APP {data}</div>
      <Search />
      <Pagination />
      <Data />
    </>
    
  )
}

export default App