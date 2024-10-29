const Greet = () => {
  const myName = "Muhammad Fahad";
  const message = "You Logged In on our website at";
  const currentDate = new Date().toLocaleDateString();
  const fullMessage = `${myName}, ${message} ${currentDate}`;
  
  return (
    <section>
      <p>{fullMessage}</p>
    </section>
  );
};
export default Greet;
