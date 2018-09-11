import Project from './Project';

const projects = [
  {
    name: 'Lucid',
    image: 'static/images/lucid/main-screen.png',
    blurb: [
      "This was a project that I undertook as part of a 'Chingu Cohort', a community coding project.",
      "This project is currently a proof-of-concept — a fully functional frontend-only app."
    ],
    skills: ['JavaScript', 'React', 'Sketch'],
    date: 'August 2018'
  },
  {
    name: 'Pomodoro Timer',
    image: 'static/images/pomodoro/main-screen.png',
    blurb: [
      "My first full-fledged React app: a Pomodoro timer to track your work periods.",
      "It was an eye-opener to design the interface beforehand and I think it paid off."
    ],
    skills: ['JavaScript', 'React', 'Sketch'],
    date: 'July'
  },
  {
    name: 'Marija P portfolio',
    image: 'static/images/marijap/main-screen.png',
    blurb: [
      "A design/coding collaboration for the UX designer Marija Peraic's portfolio.",
      "This gave me some insight into developing a project with the end user in mind."
    ],
    skills: ['Bootstrap', 'Sass', 'JavaScript', 'jQuery'],
    date: 'July'
  },
  {
    name: 'Date Facts',
    image: 'static/images/datefacts/main-screen.png',
    blurb: ["Shows facts for any date based on data from the 'Number Facts' API.",
      "This was great practice for fetching data with a simple frontend."
    ],
    skills: ['JavaScript', 'React'],
    date: 'July'
  },
  {
    name: 'Word Counter',
    image: 'static/images/wordcounter/main-screen.png',
    blurb: [
      "Although I originally wrote this as an exercise in modern JavaScript, it was rewritten in React.",
      "Migrating an app, even a simple one like this, is a great learning experience."],
    skills: ['JavaScript', 'React'],
    date: 'July'
  },
  {
    name: 'Kalender',
    image: 'static/images/kalender/main-screen.png',
    blurb: [
      "Final showcase for an online computer science course, Harvard's CS50X.",
      "An open project to bring together twelve weeks of valuable study."
    ],
    skills: ['Python', 'Flask', 'JavaScript'],
    date: 'July'
  }
];

export default () => (
  <section className="portfolio">
    <header>
        <h1>Projects</h1>
        <p className="portfolio-lead">
          Newer projects are at the top. Click on a project to see more.
        </p>
    </header>

    {projects.map(project => (
      <Project {...project} key={project.name} />
    ))}
  </section>
)