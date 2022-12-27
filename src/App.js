import "./App.css"

function App() {
  function HandleChange() {
    document.querySelector(".preview").innerHTML = document.querySelector(".input").value;
  }

  function HandleSubmit() {
    let num = document.querySelectorAll(".item").length;
    document.querySelector(".preview").innerHTML = "";
    document.querySelector(".items-container").innerHTML += `
      <div class="item ${num}">
        <input value=${document.querySelector(".input").value}>
        <button class="delete-btn">Delete</button>
      </div>
    `
    document.querySelector(".input").value = "";

    document.querySelectorAll(".delete-btn").forEach(function(btn) {
      btn.addEventListener("click", function(e){
        e.target.parentNode.remove();
      })
    })
  }

  return (
    <>
      <input className="input" onChange={HandleChange} placeholder="Type here"></input>
      <button onClick={HandleSubmit}>Add item</button>

      <p className="preview"></p>

      <div className="items-container">

      </div>
    </>
  );
}

export default App;
