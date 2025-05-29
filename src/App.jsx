import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [clean, setClean] = useState("");

  const changeText = (ev) => {
    setText(ev.target.value);
  };
  const handleSubmit = async () => {
    try {
      const cleanWords = await axios.post("https://backendbadword.onrender.com/bad", {
        text,
      });

      setClean(cleanWords.data);
    } catch (err) {
      console.log(err);
      setClean("Please retry");
    }
    finally{
      setText("")
    }
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "20px", color: "#333" }}> Censor bad words</h2>
          <input
            value={text}
            onChange={changeText}
            placeholder="Enter text"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Submit
          </button>
          <div style={{ color: "#333", fontSize: "14px" }}>
            <strong>The clean version of text is:</strong>
            <p>{clean}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
