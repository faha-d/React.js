const Greet = ({time}) => {
    return(
        <p>{time === "Morning" ? "Good Morning" : "Good AfterNoon"}</p>
    )
}
export default Greet