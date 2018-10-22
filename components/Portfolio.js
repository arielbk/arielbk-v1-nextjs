import Project from './Project';
import styled from 'styled-components';

// maybe this should be based on an API call - mongoose and mlab?
const projects = [
  {
    name: 'Lucid',
    image: 'static/images/lucid/main-screen.png',
    blurb: [
      "This was a project that I undertook as part of a 'Chingu Cohort', a community coding project.",
      "This project is currently a proof-of-concept — a fully functional frontend-only app."
    ],
    skills: ['JavaScript', 'React', 'Sketch'],
    date: 'August 2018',
    repo: 'https://github.com/chingu-voyage6/Geckos-Team-03/tree/master',
    demo: 'https://arielbk.com/lucid/'
  },
  {
    name: 'Pomodoro Timer',
    image: 'static/images/pomodoro/main-screen.png',
    blurb: [
      "My first full-fledged React app: a Pomodoro timer to track your work periods.",
      "It was an eye-opener to design the interface beforehand and I think it paid off."
    ],
    skills: ['JavaScript', 'React', 'Sketch'],
    date: 'July 2018',
    repo: 'https://github.com/arielbk/pomodoro-timer',
    demo: 'https://arielbk.com/pomodorotimer'
  },
  {
    name: 'UX Portfolio',
    image: 'static/images/marijap/main-screen.png',
    blurb: [
      "A design/coding collaboration for the UX designer Marija Peraic's portfolio.",
      "This gave me some insight into developing a project with the end user in mind."
    ],
    skills: ['Bootstrap', 'Sass', 'JavaScript', 'jQuery'],
    date: 'June 2018',
    repo: 'https://github.com/arielbk/portfolio-marija',
    demo: 'https://marijap.com/'
  },
  {
    name: 'Date Facts',
    image: 'static/images/datefacts/main-screen.png',
    blurb: ["Shows facts for any date based on data from the 'Number Facts' API.",
      "This was great practice for fetching data with a simple frontend."
    ],
    skills: ['JavaScript', 'React'],
    date: 'June 2018',
    repo: 'https://github.com/arielbk/react-apps/tree/master/date-facts-react',
    demo: 'http://arielbk.com/date-facts/'
  },
  {
    name: 'Word Counter',
    image: 'static/images/wordcounter/main-screen.png',
    blurb: [
      "Although I originally wrote this as an exercise in modern JavaScript, it was rewritten in React.",
      "Migrating an app, even a simple one like this, is a great learning experience."],
    skills: ['JavaScript', 'React'],
    date: 'May 2018',
    repo: 'https://github.com/arielbk/react-apps/tree/master/word-counter-react',
    demo: 'https://arielbk.com/word-counter-react/'
  },
  {
    name: 'Kalender',
    image: 'static/images/kalender/main-screen.png',
    blurb: [
      "Final showcase for an online computer science course, Harvard's CS50X.",
      "An open project to bring together twelve weeks of valuable study."
    ],
    skills: ['Python', 'Flask', 'JavaScript'],
    date: 'May 2018',
    repo: 'https://github.com/arielbk/kalender-heroku',
    demo: 'https://kalender-deploy.herokuapp.com/',
  }
];

export default () => (
  <Portfolio>
    <Arrow width="40" height="87" viewBox="0 0 40 87">
      <path d="M39.75 43.3013L0 86.6025V0L39.75 43.3013Z" fill="#45484C" />
    </Arrow>
    <header>
        <Title>My projects</Title>
        <Lead>
          A selection of coding projects, with the more recent at the top.
        </Lead>
    </header>

    {projects.map((project, index) => (
      <Project {...project} key={project.name} dark={(index%2 === 0)} />
    ))}

    <footer>
      <div>
        <Title>Get in touch!</Title>
        <Lead>
          The best way is to send me an <a href="mailto:buchwald.kearney@gmail.com">email</a>
        </Lead>
      </div>
    </footer>
  </Portfolio>
);

const Portfolio = styled.div`
  padding: 4.2rem 0 0;
  position: relative;

  header, footer {
    margin: 0 4rem;
  }

  footer {
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      text-align: center;
    }
  }

  @media screen and (max-width: 840px) {
    padding: 6rem 0 2rem;
  }
`;

const Arrow = styled.svg`
  position: absolute;
  left: 0;
  top: 2.6em;

  @media screen and (max-width: 840px) {
    transform: rotate(90deg);
    top: -24px;
    left: 50%;
    margin-left: -22px;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: var(--lightestgrey);
  font-weight: 200;
  font-size: 2.2rem;
  text-transform: uppercase;
`;

const Lead = styled.p`
  color: var(--medgrey);
  margin: .5rem 0 4.7rem 0;
`;