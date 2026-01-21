

import UserCard from './Usercard';

function App() {
  const firstName = "abdullahi";
  const lastName = "mohamed";
  const email = "abdullahi.mohamed@example.com";

  return (
    <div>
      <UserCard firstName={firstName} lastName={lastName} email={email} />
      <UserCard firstName="hamuuda" lastName="mc" email="mc.doe@example.com" />
      <UserCard firstName="omartood" lastName="tood" email="exercise.doe@example.com" />
      <UserCard firstName="salah" lastName="adan" email="tood.doe@example.com" />
    </div>
      
      
  );
}

export default App;
