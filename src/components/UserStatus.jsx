const UserStatus = ({isLoggedIn, isAdmin}) => {
    if(isLoggedIn && isAdmin) {
        return( <p>Welcome Admin!</p>)
    }
    else if(isLoggedIn && !isAdmin) {
        return(<p> Welcome User!</p>)
    }
    else {
        return (<p>Please Sign In First!</p>)
    }
}

export default UserStatus;