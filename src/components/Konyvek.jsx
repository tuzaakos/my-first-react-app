import GyurukUra  from "./GyurukUra.jsx"
import Konyv from "./Konyv.jsx"

function Konyvek(){
    return(
        <>
            <h2>Kedvenc könyveim:</h2>

            <GyurukUra />
            <Konyv szerzo="Fekete István" cim="Tüskevár" />
        </>
    )
}
export default Konyvek