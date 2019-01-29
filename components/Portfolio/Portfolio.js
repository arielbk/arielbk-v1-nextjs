import Project from '../Project/Project';
import projects from '../../static/assets/projects';
import {
  Portfolio, Arrow, Title, Lead, Contact,
} from './Portfolio.styled';

export default () => (
  <Portfolio>
    <Arrow width="40" height="87" viewBox="0 0 40 87">
      <path d="M39.75 43.3013L0 86.6025V0L39.75 43.3013Z" fill="#505152" />
    </Arrow>
    <header>
      <Title>My projects</Title>
      <Lead>
        A selection of coding projects, with the more recent at the top.
      </Lead>

      <Contact>
        <a href="mailto:buchwald.kearney@gmail.com">
          <span>
            <i className="far fa-envelope" />
            Email
          </span>
        </a>
        <a href="https://github.com/arielbk">
          <span>
            <i className="fab fa-github" />
            GitHub
          </span>
        </a>
        <a href="https://www.linkedin.com/in/arielbk">
          <span>
            <i className="fab fa-linkedin" />
            LinkedIn
          </span>
        </a>
      </Contact>
    </header>

    {projects.map((project, index) => (
      <Project {...project} key={project.name} dark={(index % 2 === 0)} />
    ))}

    <footer>
      <div>
        <Title>Get in touch!</Title>
        <Lead>
          The best way is to send me an
          {' '}
          <a href="mailto:buchwald.kearney@gmail.com">email</a>
        </Lead>
      </div>
    </footer>
  </Portfolio>
);
