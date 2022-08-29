import style from "./Join.module.scss"

const Join = () => {
  const onSubmit = () => {
    console.log(1);
  }
  return (
    <div className="wrapper">
      <form onSubmit={onSubmit} className={style.form}>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <button className={`main_btn ${style.main_btn}`}><span data-text="Sign Up"></span></button>
      </form>
    </div>
  )
}

export default Join;