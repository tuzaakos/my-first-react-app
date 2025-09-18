function Adatok(props){
    return(
        <>
            <p>
                <h3>{props.nev}</h3>
                <span>{props.szul_datum}</span>
                <span>{props.szul_hely}</span>
                <span>{props.munka}</span>
            </p>
        </>
    )
}
export default Adatok