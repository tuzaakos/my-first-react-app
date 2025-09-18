import Hobbi from "./components/Hobbi.jsx";
import Kartya from "./components/Kartya.jsx";
import Konyvek from "./components/Konyvek.jsx";
import messi from "./img/messi.jpg";
import neymar from "./img/neymar.jpg";
import suarez from "./img/suarez.jpg";
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


      <h2>Kedvenc személyeim:</h2>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '20px' }}>
        <Kartya 
            kep={neymar}
            nev="Neymar JR"
            szul_datum="1992. február 5. (33 éves)"
            szul_hely="Mogi das Cruzes, Brazília"
          />
        <Kartya 
            kep={suarez}
            nev="Luis Suárez"
            szul_datum="1987. január 24. (38 éves)"
            szul_hely="Salto, Uruguay"
          />
          <Kartya 
            kep={messi}
            nev="Leonel Messi"
            szul_datum="1987. június 24. (38 éves)"
            szul_hely="Rosario, Argentína"
          />
        </div>
    </>
  )
    
}

export default App
