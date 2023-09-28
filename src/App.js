import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Demo from "./Components/Demo";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{width: "70%", margin: "auto", backgroundColor: 'lightgray', height: '100vh'}}>
      <label>Selecting a value will navigate you to a different url &nbsp;</label>
      <select 
        onChange={e => {
          if(e.target.value!=="none") {
            navigate(`/${e.target.value}`)
          }else if(location.pathname!=="/") {
            navigate('/')
          }
        }} 
        style={{
          font: 18,
          outline: 'none',
          cursor: 'pointer'
        }}
        title="selecting a value will navigate you to different page"
      >
        <option 
          value="1" 
          label="1" 
          title="this will navigate to '/1'"
          style={{
            cursor: 'pointer'
          }}
        />
        <option 
          value="2" 
          label="2" 
          title="this will navigate to '/2'"
          style={{
            cursor: 'pointer'
          }}
        />
        <option 
          value="none" 
          label="none" 
          title="this will navigate to '/'"
          style={{
            cursor: 'pointer'
          }}
          selected
        />
      </select>
      <div style={{
            border: '1px solid black', 
            height: '40vh', 
            boxSizing: 'border-box', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            marginTop: 10
        }}>
        <Routes>
          <Route path="/:pageid" element={<Demo />}/>
        </Routes>

        {location.pathname==="/" && <p>select a option above to see results</p>}
      </div>
    </div>
  );
}

export default App;
