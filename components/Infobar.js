export default () => (
  <div className="infobar">
    <section className="infobar__container">
    {/* HEADER SECTION */}
    <header>
      <h1 className="infobar__header">ariel <br />buchwald <br /> kearney</h1>
      <h3 className="infobar__caption">web developer</h3>

      <img className="infobar__biophoto" src="static/images/arielbk.jpg" />
    </header>

    {/* <!-- BIO SECTION --> */}
    <section className="infobar__biotext">
      <p>I love to code websites and apps. I’m starting out and determined to keep on learning.</p>
    </section>
    
    {/* <!-- CONTACT SECTION goes here... --> */}
    <section className="infobar__contact">
      <a href="mailto:buchwald.kearney@gmail.com">Email</a>
      <a href="https://github.com/arielbk">GitHub</a>

      <svg className="infobar__arrow" width="40" height="87" viewBox="0 0 40 87" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.75 43.3013L0 86.6025V0L39.75 43.3013Z" fill="#ffffff"/>
      </svg>
    </section>
    </section>
  </div>
)