import Project from './Project';
import styled, { ThemeProvider } from 'styled-components';
import variables from '../components/variables';

// maybe this should be based on an API call - mongoose and mlab?
const projects = [
  {
    name: 'Film Base',
    image: 'static/images/filmbase/main-screen.jpg',
    blurb: [
      "A frontend website that fetches film information from The Movie Database API.",
      "I incorporated ESLint into my workflow to enforce coding best practices."
    ],
    skills: ['JavaScript', 'React'],
    date: 'November 2018',
    repo: 'https://github.com/arielbk/filmbase',
    demo: 'https://movies-eyqgndvdgr.now.sh'
  },
  {
    name: 'arielbk',
    image: 'static/images/arielbk/main-screen.png',
    blurb: [
      "This website. A platform to showcase my web development projects.",
      "It has been a great introduction to server-side rendering using NextJS."
    ],
    skills: ['JavaScript', 'React', 'NextJS', 'Figma'],
    date: 'October 2018',
    repo: 'https://github.com/arielbk/arielbk',
    demo: 'https://arielbk.com/'
  },
  {
    name: 'BPM Count',
    image: 'static/images/bpmcount/main-screen.png',
    blurb: [
      "An app to tap along with music and discover the tempo — measured in Beats Per Minute (BPM).",
      "I was insired to make this because it is a tool that I find helpful and use frequently."
    ],
    skills: ['JavaScript', 'React', 'Sketch'],
    date: 'September 2018',
    repo: 'https://github.com/arielbk/BPM-Counter',
    demo: 'https://arielbk.com/bpmcount'
  },
  {
    name: 'Lucid',
    image: 'static/images/lucid/main-screen.png',
    blurb: [
      "A project undertaken as part of a 'Chingu Cohort', a community coding 'build-to-learn' project.",
      "This was great UI design and code practice, and working with other coders was invaluable."
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
      "A timer to track work and break periods with the Pomodoro productivity hack.",
      "A pet project that has gone through uncountable rewrites as I continue learning."
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
      "Working together with a designer was insightful — design first, and then code."
    ],
    skills: ['Bootstrap', 'Sass', 'JavaScript', 'jQuery'],
    date: 'June 2018',
    repo: 'https://github.com/arielbk/portfolio-marija',
    demo: 'https://marijap.com/'
  },
  {
    name: 'Date Facts',
    image: 'static/images/datefacts/main-screen.png',
    blurb: ["Shows facts for any date based on data fetched from the 'Number Facts' API.",
      "This was great practice for communicating with an API and building out a simple frontend."
    ],
    skills: ['JavaScript', 'React'],
    date: 'June 2018',
    repo: 'https://github.com/arielbk/react-apps/tree/master/date-facts-react',
    demo: 'http://datefacts.glitch.me/'
  },
  {
    name: 'Word Counter',
    image: 'static/images/wordcounter/main-screen.png',
    blurb: [
      "This was made to practice modern JavaScript, before reconstructing it in React.",
      "Migrating a simple app like this was a great introduction to the framework."],
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
  <ThemeProvider theme={variables}>
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
          <a href="https://codepen.io/arielbk">
            <span>
              <i className="fab fa-codepen" />
              Codepen
            </span>
          </a>
        </Contact>
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
  </ThemeProvider>
);

const Portfolio = styled.div`
  padding: 4.2rem 0 0;
  position: relative;

  header, footer {
    margin: 0 4rem;
  }

  footer {
    height: 100vh;
    // so old phone browsers don't give it way too much height...
    max-height: 1000px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      text-align: center;
    }
  }

  @media ${props => props.theme.media.md} {
    padding: 6rem 0 2rem;
  }

  @media ${props => props.theme.media.sm} {
    header, footer {
      margin: 0 1rem;
    }
  }
`;

const Arrow = styled.svg`
  position: absolute;
  left: 0;
  top: 2.6em;

  @media ${props => props.theme.media.md} {
    transform: rotate(90deg);
    top: -24px;
    left: 50%;
    margin-left: -22px;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: ${props => props.theme.colors.almostwhite};
  font-weight: 200;
  font-size: 2.2rem;
  text-transform: uppercase;
`;

const Lead = styled.p`
  color: ${props => props.theme.colors.medgrey};
  margin: .5rem 0 4.7rem 0;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 260px;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 101;

  a {
    ${props => props.theme.transition('background')};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0.5rem;
    background: rgba(10,10,10,0.5);
    font-size: 0.6rem;
    text-align: center;
    width: 80px;
    height: 80px;
    box-shadow:
      0 15px 35px rgba(37,37,80,0.1), 0 5px 15px rgba(0,0,0,.06);

    i {
      width: 100%;
      font-size: 2.2rem;
      margin-bottom: 0.2rem;
    }

    :hover {
      background: ${props => props.theme.colors.brightblue};
      color: #fff;
    }
  }

  @media ${props => props.theme.media.md} {
    display: none;
  }
`;
