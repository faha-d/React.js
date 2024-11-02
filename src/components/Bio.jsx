const Bio = ({ name, img, age, hobbies }) => {
  return (
    <section className="Bio">
      <img src={img} alt={name} width={200}/>
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
};

export default Bio;
