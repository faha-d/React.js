const Temperature = ({temp}) => {
    if(temp > 25) {
        return( <p>Its really hot outside</p>)
    }
    else if(temp >= 15 && temp <= 25) {
        return(<p> Its nice outside</p>)
    }
    else {
        return (<p>Its really cold outside</p>)
    }
}

export default Temperature;