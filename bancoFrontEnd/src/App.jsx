import "./global.css";
import style from "./App.module.css"

export function App() {
  return (
    <article className={style.container}>
      <div className={style.card}>
        <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80" 
        alt="cover"></img>

        <h1>Cover</h1>
        <h1>avatar</h1>
        <h1>descrição/nome</h1>
        <h1>stack</h1>
      </div>
    </article>
  )

};

export default App;
