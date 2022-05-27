const Footer = () => {
  return (
    <footer className="main-footer">
      <strong>
        <span>Copyright © {new Date().getFullYear()} </span>
        <a href="https://erdkse.com" target="_blank" rel="noopener noreferrer">
          gobdigital.com
        </a>
        <span>.</span>
      </strong>
      <div className="float-right d-none d-sm-inline-block">
        <b>Versión</b>
        <span>&nbsp;1.0.0</span>
      </div>
    </footer>
  )
}

export default Footer
