import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"
const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt="jobify" className="logo" />
        </nav>
        <div className ="container page">
          {/* info */}
            <div className="info">
              <h1>job <span>tracking</span> app</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Eius quo corrupti
                perspiciatis quidem ut itaque velit 
                ipsum aliquid reiciendis ab, cumque facere 
                aliquam distinctio possimus, mollitia voluptas
                tenetur placeat sapiente odit quos doloremque 
                molestias voluptate quibusdam? 
              </p>
              <button className="btn btn-hero">Login/Register</button>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
        </div>
    </main>
  )
}
export default Landing