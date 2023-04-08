import people from './mocks/people.json'

function App() {
  return (
    <div className="text-xl">
      <div>
        <img src={people[0]['company-image']} alt="" />
      </div>
      <span>hola</span>
    </div>
  )
}

export default App
