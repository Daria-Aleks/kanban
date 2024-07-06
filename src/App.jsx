import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/PopBrowse/PopBrowse'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopUser from './components/PopUser/PopUser'
import {cardList, statusList} from "./data";

function App() {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState(cardList);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
      console.log(loading)
    }, 1000)
  }, [])

  function onCardClick() {
    setCards([
      ...cards, 
      {
        id: cards.length + 1,
        theme: "Web Design",
        title: "Название задачи",
        date: "30.10.23",
        status: "Без статуса"
      }
    ])
  }
  return (
    <>
    <div className="wrapper">	
		<PopUser/>
		<PopNewCard onCardClick={onCardClick}/>
		<PopBrowse/>
		<Header/>
		<Main statusList={statusList} cardList={cards} loading={loading}/>
    </div>

    <script src="js/script.js"></script>
    </>
  )
}

export default App
