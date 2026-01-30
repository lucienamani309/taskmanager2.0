import { createContext, useContext, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import { useRef } from 'react'
import marketing from './assets/marketing.jpg';
import google from './assets/google.png';
import beautiful from './assets/beautiful.jpg'
import axios from "axios";
import { TaskContainer } from './composants/taskContainer';
import { TaskInput } from './composants/taskInput/taskInput';
import { TaskList } from './composants/taskList/taskList';
{/* 
  const ThemeContext = createContext();

function ThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="px-4 py-2 bg-black text-white rounded">
      Changer thème
    </button>
  );
}

//Avant la fonction App
 const colors = {
    primary: "#060606",
    backgroud: "#E0E0E0",
    distabled: "#D9D9D9"
  }
  */}
 



function App() {

  //const [dark, setDark] = useState(false);

  //const [count, setCount] = useState(0);
  
  //const inputRef = useRef(null);
{/*
   useEffect(() => {
    document.title = `Compteur : ${count+5}`;
  }, [count]);
  */}
  
 // const [count, setCount] = useState('Maman')


//Mise en commentaire des éléments précedents de la page
 {/* Utilisation de useRef

<ThemeContext.Provider value={{ toggleTheme: () => setDark(!dark) }}>
      <div className={`min-h-screen flex items-center justify-center ${dark ? "bg-black" : "bg-white"}`}>
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
     <div className=" flex-2 gap-2.5 items-center justify-center bg-gray-500">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
        <h2 className="text-2xl font-bold text-amber-600">Compteur</h2>

        <p className="text-4xl font-semibold  text-amber-600">{count}</p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount(count - 2)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            -
          </button>

          <button
            onClick={() => setCount(count + 2)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            +
          </button>
        </div>
      </div><br />

      

      <div className="bg-blue-500 p-6 rounded-xl shadow space-y-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Clique sur le bouton"
          className="border px-3 py-2 rounded w-full"
        />

        <button
          onClick={() => inputRef.current.focus()}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Focus Input
        </button>
      </div>
    </div>

  */}
{/*
  <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col items-center justify-center'>
      <div className='absolute to-20% flex left-7 gap-6 flex-col justify-start items-start'>
        <h1 className='text-4xl text-white font-bold text-left'>Turn your Ideas into reality</h1>
        <p className='text-xl text-white font-normal'>Start for free and get attractive ofers from the community </p>
      </div>
      <img src={beautiful} className='w-full h-full object-cover'/>
      </div>

      <div className='w-1/2 h-full bg-white/90 flex flex-col p-20 justify-between'>
        <h3 className='text-xl text-black font-semibold text-left'>Interactive Brand</h3>
      
      <div className='w-full flex flex-col max-w-550px'>
        <div className='w-full flex flex-col mb-5 items-start'>
          <h3 className='text-3xl text-black font-semibold mb-2'>Login</h3>
          <p className='texxt-base mb-2  text-black'>Welwome Back! Please enter your details.</p>
        </div>

        <div className='w-full flex flex-col'>
          <input 
          type="email"
          placeholder='Email'
          className='w-full text-black py-2 my-2 bg-transparent border-b border-black focus: outline-none '
           />

             <input 
          type="password"
          placeholder='Password'
          className='w-full text-black py-2 my-2 bg-transparent border-b border-black focus: outline-none '
           />
        </div>

        <div className='w-full flex items-center justify-between'>
          <div className='w-full flex items-center'>
            <input type="checkbox" className='w-4 h-4 mr-2 bg-white' />
            <p className='text-sm text-black'>Remeber me for 30 days</p>
          </div>

          <p className='text-sm font-medium text-black whitespace-nowrap cursor-pointer underline-offset-2'>Forgot Password ?</p>
        </div>

        <div className='w-full flex-col my-4'>
          <button className='w-full text-white my-2 bg-black rounded-md p-4 text-center flex items-center justify-center'>Login</button>
          <button className='w-full text-[#060606] my-2 bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center'>Register</button>
        </div>

        <div className='w-full flex items-end justify-center relative py-2 '>
          <div className='w-full h-[0.5px] bg-black top-10'></div>
          <p className='text-lg absolute text-black/80 bg-white/5 bottom-2'>or</p>
        </div>

        <div className='w-full text-black my-2 font-semibold bg-white border border-black rounded-md p-4 text-center justify-center flex flex-row items-center cursor-pointer'>
          <img src={google} alt="" className='h-6 mr-2'/>
          <p>Sign In with Google</p>
        </div>
      </div>

      <div className='w-full flex items-center justify-center'>
        <p className='text-sm font-normal text-black'>Don't have a account? <span className='font-semibold underline-offset-2 cursor-pointer'>Sign up for free</span></p>
      </div>
      </div>
    </div>

// Exercice sur l'utilisation des APIs

const [utilisateurs, setUtilisateurs] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        setUtilisateurs(response.data);
        setChargement(false);
      })
      .catch(error => {
        setErreur(error.message);
        setChargement(false);
      });
  }, []);

  if (chargement) return <div>Chargement en cours...</div>;
  if (erreur) return <div>Erreur : {erreur}</div>;

//Les éléments dans return
 <div className="min-h-screen bg-blue-200 p-8">
  <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
    Liste des articles
  </h1>

  <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {utilisateurs.map((post) => (
      <li
        key={post.id}
        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition cursor-pointer hover:-translate-y-1"
      >
        /* Titre 
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {post.title}
        </h2>

        /* Contenu 
        <p className="text-sm text-gray-600 line-clamp-4">
          {post.body}
        </p>

        /* Footer 
        <div className="mt-4 text-xs text-gray-400">
          Article #{post.id}
        </div>
      </li>
    ))}
  </ul>
</div>

  */}

   
  return (
    <>
    <TaskContainer />
    
    </>
    
  )
}

export default App
