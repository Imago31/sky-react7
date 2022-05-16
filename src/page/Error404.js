import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div>
      <h1>404</h1>
      <h3>Страница не существует</h3>
      <p>
        Страницы не сущетвует больше. Возможно она пропала безвести. 
        К сожалению, в интернете и не такое бывает.
      </p>
      <Link to="/">Home</Link>
    </div>
  )
}
export default Error404