
import Student from './Students.jsx'

function App() {
  return(
    <>
   <Student name='Rajni' age={23} isStudent={true}/>
   <Student name='Rohit' age={25} isStudent={false}/>
   <Student name='Prachiti' age={23} isStudent={true}/>
   <Student name='Trupti' age={23} isStudent={true}/>
   <Student/>
    </>
  );
  
}

export default App
