// import Header from "./components/Header";
// import Content, { Password } from "./components/Content";
// import Footer from "./components/Footer";
// import Bio from "./components/Bio";
// import ProductInfo from "./components/ProductInfo";
// import UsersInfo from "./components/UsersInfo";
// import Weather from "./components/Weather";
// import UserStatus from "./components/UserStatus";
// import Greet from "./components/Greet";
import Cardlist from "./components/card/Card";

const App = () => {
  return (
    <>
      {/* <Header />
      <Content />
      <Footer />
      <ProductInfo />
      <UsersInfo />
      <Bio
        name="Muhammad Fahad"
        age={20}
        hobbies={["Coding", "Gaming"]}
        img="https://imgs.search.brave.com/23Erch8wBAZqQYPVBFcKymRHH_SYuXbEBC7EEkeDrK8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzU3LzA0LzU4/LzM2MF9GXzU3MDQ1/ODg3X0hISm1sNkRK/VnhOQk1xTWVEcVZK/MFpRRG5vdHA1ckdE/LmpwZw"
      /> */}

      {/* <Password isValid={false} />
      <Weather temp={26} />
      <UserStatus isLoggedIn={false} isAdmin={true} />
      <Greet time="Morning" /> */}

      <Cardlist />
    </>
  );
};
export default App;
