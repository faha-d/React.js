const Content = () => {
  return (
    <main className="content">
      <h2>Main Content</h2>
      <p className="lead"> This is main content! </p>
    </main>
  );
};

const ValidPassword = () => {
  return (
    <div>
      <h2>Valid Password</h2>
    </div>
  );
};

const InValidPassword = () => {
  return (
    <div>
      <h2>InValid Password</h2>
    </div>
  );
};

export const Password = ({ isValid }) => {
  // Using If Else
  // if(isValid) {
  //   return <ValidPassword/>
  // }
  // return <InValidPassword/>

  // Using Ternery Operator
  return isValid ? <ValidPassword /> : <InValidPassword />;
};
export default Content;
