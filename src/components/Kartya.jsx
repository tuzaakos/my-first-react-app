import kepstilus from "../css/kartya.module.css";
import Adatok from './Adatok';

function Kartya(props){
    return(
        <>
            <div className={kepstilus.kartya}>
                <img src={props.kep} alt={props.nev} className={kepstilus.kep}></img>
                <p><strong>Születési dátum:</strong> {props.szul_datum}</p>
                <p><strong>Születési hely:</strong> {props.szul_hely}</p>
           </div>
        </>
    )
}
export default Kartya