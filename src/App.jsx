import "./App.css";
import Form from "./components/Form";
import Inputs from "./components/Inputs";
import Card from "@mui/material/Card";

function App() {
  return (
    <div className="p-2">
      <Card
        sx={{ borderRadius: "16px" }}
        className="p-10 justify-evenly max-w-fit mx-auto my-20"
      >
        <p className="text-2xl pb-5 text-center font-semibold">
          Free Crypto Tax Calculator Australia
        </p>
        <Form />
        <div
          style={{
            width: "120%",
            height: "100%",
            borderBottom: "2px rgba(201, 207, 221, 0.60) solid",
          }}
        />
        <Inputs />
      </Card>
    </div>
  );
}

export default App;
