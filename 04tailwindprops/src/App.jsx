import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className = 'bg-green-400 text-white rounded-lg p-5 m-5'>Tailwind CSS</h1>
      <div className='flex overflow-x-auto w-[1000px]'>
      <Card name = "Yuvraj" bio = "Loving and caring"/>
      <Card name = "Shivani" bio = "Caring and understanding"/>
      <Card name = "Yuvraj" bio = "Loving and caring"/>
      <Card name = "Yuvraj" bio = "Loving and caring"/>
      <Card name = "Yuvraj" bio = "Loving and caring"/>
      <Card name = "Yuvraj" bio = "Loving and caring"/>
      <Card name = "Yuvraj" bio = "Loving and caring"/>
      <Card name = "Yuvraj" bio = "Loving and caring"/>
      </div>
    </>
  )
}

export default App
