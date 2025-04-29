import { useState } from 'react'
import './App.css';


const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([

  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]);

const handleAddFighter = (fighter) => {
  if (money >= fighter.price) {
    setTeam([...team, fighter])
    setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id))
    setMoney(money - fighter.price)
  } else {
    alert("Not enough money")
  }
}

const handleRemoveFighter =(fighter) => {
  setTeam(team.filter(f => f.id !== fighter.id))
  setZombieFighters([...zombieFighters, fighter])
  setMoney(money + fighter.price)
};


const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
const totaAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);
const totalCost = team.reduce((sum, fighter) => sum + fighter.price, 0);

return (
  <div className='app'>
    <h1>Zombie Apocalypse Team Builder</h1>

    <div className='stats'>
      <p>Money: ${money}</p>
      <p>Team Strength: {totalStrength}</p>
      <p>Team Agility: {totaAgility}</p>
      <p>Team Cost: ${totalCost}</p>
    </div>

    <div className='team-section'>
      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>No team members yet!</p>
      ) : (
        <ul className='fighter-list'>
          {team.map(fighter => (
           <li key={fighter.id} className='fighter-card'>
            <img src="fighter.img" alt={fighter.name} />
            <div className='fighter-info'>
               <h3>{fighter.name}</h3>
               <p>Price: ${fighter.price}</p>
               <p>Strength: {fighter.strength}</p>
               <p>Agility: {fighter.agility}</p>
            </div> 
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
           </li> 
          ))}
        </ul>  
      )}
    </div>

    <div className='available-section'>
      <h2>available Fighters</h2>
      <ul className='fighter-list'>
        {zombieFighters.map(fighter => (
      <li key={fighter.id} className='fighter-card'>
        <img src={fighter.img} alt="fighter.name" />
        <div className='fighter.info'>
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
        </div>
        <button onClick={() => handleAddFighter(fighter)}disabled={money < fighter.price}>Add</button>
        {money < fighter.price && (
          <p className='cost-warning'>Need ${fighter.price - money} more</p>
        )}
      </li>
        ))}
      </ul>
    </div>
  </div>
);
}



export default App;
