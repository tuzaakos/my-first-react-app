import Hobbi from "./components/Hobbi.jsx";
import Konyvek from "./components/Konyvek.jsx";
import "./css/global.css";

function App() {
  var nev = "Mekk Elek";
  const szulNap = {
    ev: 2000,
    ho: 'január',
    nap: 1,
  }

  const getFavColor = () => 'zöld';

const nevStilus = {
  fontSize: "1.5em",
  fontWeight: "bold"
}

  return (
    <>
      <h1 style={ {textAlign: "center"} }>Első react alkalmazásom</h1>
      <p>Helló Világ</p>
      <p style={nevStilus}>Az én nevem {nev}</p>
      <p>Én {szulNap.ev}. év {szulNap.ho} hónapjának {szulNap.nap} napján születtem.</p>
      <p>A kedvenc színem a {getFavColor()}.</p>

      <Hobbi />
      <Konyvek />

    </>
  )
    
}

export default App
