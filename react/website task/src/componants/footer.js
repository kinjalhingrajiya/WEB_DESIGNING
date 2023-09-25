export default function Footer(props)
{
    return(
    <>
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      Developed By:Kinjal Sutariya
    </a>
  </div>
</nav>
    </>)
}