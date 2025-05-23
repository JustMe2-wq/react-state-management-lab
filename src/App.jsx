import { useState } from 'react'
import './App.css'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const zombieFighters = [

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
  ]


  const handleAddFighter = (fighter) => {
    if (money >= fighter.price && !team.find((person) => person.id === fighter.id)) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
    } else if (team.find((person) => person.id === fighter.id)) {
      console.log('Already in your team');
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (fighterId) => {
    setTeam(team.filter((person) => person.id !== fighterId));
    const removedFighter = team.find((person) => person.id === fighterId);
    if (removedFighter) {
      setMoney(money + removedFighter.price);
    }
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {team.reduce((totalStrength, person) => totalStrength + person.strength, 0)}</h2>
      <h2>Team Agility: {team.reduce((totalAgility, person) => totalAgility + person.agility, 0)}</h2>
      <h2>Team:</h2>
      {team.length === 0 ? (
      <p>Pick some team members!</p>
      ) : (
        <p>Your Team:</p>
      )}
      <ul>
        {team.map((person, index) => (
          <li key={index}>
            <img src={person.img} />
            <h3>{person.name}</h3>
            <p>Price: {person.price}</p>
            <p>Strength: {person.strength}</p>
            <p>Agility: {person.agility}</p>
            <button onClick={() => handleRemoveFighter(person.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Fighters:</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} />
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App