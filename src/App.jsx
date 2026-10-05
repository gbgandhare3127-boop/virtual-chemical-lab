import { useState } from "react";
import "./App.css";

const experiments = [
  {
    icon: "🧪",
    title: "Acid–Base Titration",
    level: "Beginner",
    description:
      "Determine the concentration of an unknown solution using a virtual titration.",
  },
  {
    icon: "🌈",
    title: "pH Testing",
    level: "Beginner",
    description:
      "Test different solutions and understand acids, bases and the pH scale.",
  },
  {
    icon: "⚗️",
    title: "Chemical Reactions",
    level: "Intermediate",
    description:
      "Observe virtual reactions and identify colour, gas and precipitate changes.",
  },
  {
    icon: "🔬",
    title: "Qualitative Analysis",
    level: "Intermediate",
    description:
      "Identify unknown ions using simulated laboratory tests.",
  },
  {
    icon: "🧫",
    title: "Separation Techniques",
    level: "Beginner",
    description:
      "Explore filtration, evaporation and distillation techniques.",
  },
  {
    icon: "🔥",
    title: "Flame Test",
    level: "Intermediate",
    description:
      "Identify metal ions by observing their characteristic flame colours.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [volume, setVolume] = useState(10);
  const [concentration, setConcentration] = useState(0.1);
  const [indicator, setIndicator] = useState("Phenolphthalein");
  const [experimentStarted, setExperimentStarted] = useState(false);

  const moles = ((volume * concentration) / 1000).toFixed(4);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* NAVIGATION */}
      <header className="navbar">
        <div className="nav-container">

          <div
            className="logo"
            onClick={() => scrollTo("home")}
          >
            <span className="logo-icon">⚗️</span>

            <span>
              Virtual
              <strong>Chem Lab</strong>
            </span>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => scrollTo("home")}>
              Home
            </button>

            <button onClick={() => scrollTo("about")}>
              About
            </button>

            <button onClick={() => scrollTo("experiments")}>
              Experiments
            </button>

            <button onClick={() => scrollTo("virtual-lab")}>
              Virtual Lab
            </button>

            <button onClick={() => scrollTo("safety")}>
              Safety
            </button>
          </nav>

          <button
            className="nav-cta"
            onClick={() => scrollTo("virtual-lab")}
          >
            Start Lab
          </button>

        </div>
      </header>

      <main>

        {/* HERO */}
        <section id="home" className="hero">

          <div className="hero-content">

            <div className="badge">
              🧪 Interactive Chemistry Learning
            </div>

            <h1>
              Explore Chemistry
              <span>Without Limits.</span>
            </h1>

            <p>
              A safe and interactive virtual chemical laboratory
              where students can perform experiments, understand
              concepts and learn chemistry through simulation.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => scrollTo("virtual-lab")}
              >
                Start Experiment →
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollTo("experiments")}
              >
                Explore Experiments
              </button>

            </div>

            <div className="hero-stats">

              <div>
                <strong>6+</strong>
                <span>Experiments</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Virtual & Safe</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Learning</span>
              </div>

            </div>

          </div>

          <div className="hero-lab">

            <div className="lab-window">

              <div className="window-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="lab-screen">

                <div className="flask">
                  ⚗️
                </div>

                <div className="liquid"></div>

                <div className="bubble bubble-1"></div>
                <div className="bubble bubble-2"></div>
                <div className="bubble bubble-3"></div>

                <div className="lab-label">
                  <small>VIRTUAL EXPERIMENT</small>
                  <strong>Acid–Base Titration</strong>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="section about">

          <div className="section-heading">

            <span className="section-tag">
              ABOUT THE LAB
            </span>

            <h2>
              Learn Chemistry by Doing
            </h2>

            <p>
              Virtual Chemical Lab brings the laboratory
              experience to your screen. Perform experiments
              digitally and understand what is happening at
              every step.
            </p>

          </div>

          <div className="about-grid">

            <div className="about-card">
              <div className="card-icon">🛡️</div>

              <h3>
                Safe Learning
              </h3>

              <p>
                Practice experiments without exposure to
                hazardous chemicals or laboratory accidents.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🎯</div>

              <h3>
                Interactive
              </h3>

              <p>
                Change quantities, select materials and
                observe how experimental choices affect results.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">📚</div>

              <h3>
                Educational
              </h3>

              <p>
                Connect practical experimentation with
                chemistry theory, observations and calculations.
              </p>
            </div>

          </div>

        </section>

        {/* EXPERIMENTS */}
        <section
          id="experiments"
          className="section experiments"
        >

          <div className="section-heading">

            <span className="section-tag">
              EXPERIMENT LIBRARY
            </span>

            <h2>
              Choose Your Experiment
            </h2>

            <p>
              Start with beginner-friendly experiments and
              gradually explore advanced chemistry concepts.
            </p>

          </div>

          <div className="experiment-grid">

            {experiments.map((experiment) => (

              <article
                className="experiment-card"
                key={experiment.title}
              >

                <div className="experiment-icon">
                  {experiment.icon}
                </div>

                <div className="experiment-level">
                  {experiment.level}
                </div>

                <h3>
                  {experiment.title}
                </h3>

                <p>
                  {experiment.description}
                </p>

                <button
                  className="learn-button"
                  onClick={() => scrollTo("virtual-lab")}
                >
                  Open Experiment →
                </button>

              </article>

            ))}

          </div>

        </section>

        {/* VIRTUAL LAB */}
        <section
          id="virtual-lab"
          className="section virtual-lab"
        >

          <div className="section-heading light">

            <span className="section-tag">
              VIRTUAL LAB
            </span>

            <h2>
              Try a Real Experiment
            </h2>

            <p>
              Experiment with our interactive acid–base
              titration simulator.
            </p>

          </div>

          <div className="lab-container">

            {/* CONTROLS */}

            <div className="lab-controls">

              <h3>
                Experiment Controls
              </h3>

              <label>
                Volume of solution
                <strong>{volume} mL</strong>
              </label>

              <input
                type="range"
                min="1"
                max="50"
                value={volume}
                onChange={(e) =>
                  setVolume(Number(e.target.value))
                }
              />

              <label>
                Concentration
              </label>

              <select
                value={concentration}
                onChange={(e) =>
                  setConcentration(Number(e.target.value))
                }
              >
                <option value="0.05">
                  0.05 M
                </option>

                <option value="0.1">
                  0.10 M
                </option>

                <option value="0.2">
                  0.20 M
                </option>

                <option value="0.5">
                  0.50 M
                </option>
              </select>

              <label>
                Indicator
              </label>

              <select
                value={indicator}
                onChange={(e) =>
                  setIndicator(e.target.value)
                }
              >
                <option>
                  Phenolphthalein
                </option>

                <option>
                  Methyl Orange
                </option>

                <option>
                  Bromothymol Blue
                </option>
              </select>

              <button
                className="primary-button full"
                onClick={() =>
                  setExperimentStarted(true)
                }
              >
                Run Experiment 🧪
              </button>

            </div>

            {/* WORKSPACE */}

            <div className="lab-workspace">

              <div className="workspace-top">
                <span>
                  Virtual Workspace
                </span>

                <span className="status">
                  ● Ready
                </span>
              </div>

              <div className="apparatus">

                <div className="burette">

                  <div className="burette-liquid"></div>

                  <div className="tap"></div>

                  <div className="drop"></div>

                </div>

                <div className="flask-large">

                  <div className="flask-neck"></div>

                  <div className="flask-liquid"></div>

                  <div className="flask-bubble one"></div>

                  <div className="flask-bubble two"></div>

                  <div className="flask-bubble three"></div>

                </div>

              </div>

              <div className="observation">

                <h3>
                  Observation
                </h3>

                {!experimentStarted ? (

                  <p>
                    Adjust the experiment controls and click
                    <strong> Run Experiment </strong>
                    to begin.
                  </p>

                ) : (

                  <div className="result-box">

                    <div>
                      <span>Indicator</span>
                      <strong>{indicator}</strong>
                    </div>

                    <div>
                      <span>Volume</span>
                      <strong>{volume} mL</strong>
                    </div>

                    <div>
                      <span>Concentration</span>
                      <strong>{concentration} M</strong>
                    </div>

                    <div>
                      <span>Calculated Moles</span>
                      <strong>{moles} mol</strong>
                    </div>

                  </div>

                )}

              </div>

            </div>

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section className="section how-it-works">

          <div className="section-heading">

            <span className="section-tag">
              HOW IT WORKS
            </span>

            <h2>
              Learn in Four Simple Steps
            </h2>

          </div>

          <div className="steps">

            <div className="step">
              <div className="step-number">01</div>
              <h3>Choose</h3>
              <p>
                Select an experiment from the laboratory library.
              </p>
            </div>

            <div className="step">
              <div className="step-number">02</div>
              <h3>Prepare</h3>
              <p>
                Choose chemicals, equipment and experimental settings.
              </p>
            </div>

            <div className="step">
              <div className="step-number">03</div>
              <h3>Experiment</h3>
              <p>
                Interact with the virtual apparatus and perform
                the procedure.
              </p>
            </div>

            <div className="step">
              <div className="step-number">04</div>
              <h3>Learn</h3>
              <p>
                Record observations, calculate results and
                answer questions.
              </p>
            </div>

          </div>

        </section>

        {/* SAFETY */}
        <section id="safety" className="section safety">

          <div className="safety-content">

            <div>

              <span className="section-tag">
                SAFETY FIRST
              </span>

              <h2>
                Practice Without the Risk
              </h2>

              <p>
                The Virtual Chemical Lab provides a controlled
                environment where students can understand
                laboratory procedures before performing them
                in a physical laboratory.
              </p>

              <ul>
                <li>✓ No chemical exposure</li>
                <li>✓ No broken glassware</li>
                <li>✓ Safe experimentation</li>
                <li>✓ Repeat experiments anytime</li>
              </ul>

            </div>

            <div className="safety-visual">

              <div className="shield">
                🛡️
              </div>

              <h3>
                Safe Virtual Environment
              </h3>

              <p>
                Experiment, make mistakes and try again.
              </p>

            </div>

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="final-cta">

          <span className="section-tag">
            START LEARNING
          </span>

          <h2>
            Your Laboratory Is Ready.
          </h2>

          <p>
            Explore chemistry through interactive virtual experiments.
          </p>

          <button
            className="primary-button"
            onClick={() => scrollTo("virtual-lab")}
          >
            Enter Virtual Lab →
          </button>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <div className="footer-content">

          <div className="footer-brand">

            <div className="logo">
              <span className="logo-icon">⚗️</span>

              <span>
                Virtual
                <strong>Chem Lab</strong>
              </span>
            </div>

            <p>
              An interactive virtual laboratory designed to
              make chemistry practical, safe and accessible.
            </p>

          </div>

          <div className="footer-links">

            <div>

              <h4>Explore</h4>

              <button onClick={() => scrollTo("home")}>
                Home
              </button>

              <button onClick={() => scrollTo("experiments")}>
                Experiments
              </button>

              <button onClick={() => scrollTo("virtual-lab")}>
                Virtual Lab
              </button>

            </div>

            <div>

              <h4>Learn</h4>

              <button onClick={() => scrollTo("about")}>
                About
              </button>

              <button onClick={() => scrollTo("safety")}>
                Safety
              </button>

              <button onClick={() => scrollTo("virtual-lab")}>
                Practice
              </button>

            </div>

          </div>

        </div>

        <div className="copyright">
          © 2026 Virtual Chemical Lab. Educational Project.
        </div>

      </footer>

    </div>
  );
}

export default App;