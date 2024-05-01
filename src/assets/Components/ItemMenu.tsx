

export default function ItemMenu(props:{content:string ,link:string }) {
  return (
    <a className="nav-link active" href={props.link}>{props.content}</a>
  )
}
