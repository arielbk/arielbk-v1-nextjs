export default () => (
  <div className="infobar">
    <section className="infobar-content">
    {/* HEADER SECTION */}
    <header>
      <h1>ariel <br />buchwald <br /> kearney</h1>
      <h3>web developer</h3>

      <img className="biophoto" src="static/images/arielbk.jpg" />
    </header>

    {/* <!-- BIO SECTION --> */}
    <section>
        <p>I love to code, mostly in JavaScript, and I'm looking for a team to do this with and learn.</p>
    </section>
    
    {/* <!-- CONTACT SECTION --> */}
    <section>
      <h3 className="connect">Connect</h3>
      <div className="contact-route">
        <a href="https://github.com/arielbk">
          <i className="contact-icon fab fa-github-square"></i>
        </a>
        <a href="mailto:buchwald.kearney@gmail.com">
          <i className="contact-icon fas fa-envelope"></i>
        </a>
      </div>
    </section>
    
    </section>
  </div>
)