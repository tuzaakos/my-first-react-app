import GyurukUra  from "./GyurukUra.jsx"
import Konyv from "./Konyv.jsx"
import Leiras from "./Leiras";


function Konyvek(){
    return(
        <>
            <h2>Kedvenc könyveim:</h2>

            <GyurukUra />
            <Konyv szerzo="Fekete István" cim="Tüskevár" />
            <Leiras>
                <strong>Természet</strong>
                <p>Egy fiú nyári kalandjai a mocsárvilágban</p>
            </Leiras>
        </>
    )
}
export default Konyvek