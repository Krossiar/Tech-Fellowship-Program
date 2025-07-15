// pages/index.tsx
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Navbar */}
      <header className={styles.navbar}>
        <div className={styles.logo}>⚡ Programming Pathshala</div>
        <nav className={styles.navLinks}>
          <a href="#">Fellowship Program</a>
          <a href="#">Renaissance</a>
          <a href="#">Certification Courses</a>
          <a href="#">Resources</a>
        </nav>
        <div className={styles.buttons}>
          <button className={styles.loginBtn}>Log In</button>
          <button className={styles.trialBtn}>Start 7-Days Free Trial</button>
        </div>
      </header>

      {/* Main Section */}
      <section className={styles.mainSection}>
        {/* Left */}
        <div className={styles.left}>
          <h1 className={styles.heading}>Tech Fellowship Program</h1>
          <p className={styles.subheading}>
            Accelerated Learning to be a Next-Gen Software Engineer.
            Learn by Building Projects with Tech Leads, Engineers and Product Managers.
          </p>
          <ul className={styles.features}>
            <li>🏢 Learn in a Corporate Ecosystem</li>
            <li>💰 Assured Paid Internships</li>
            <li>📚 In-depth Coursework</li>
            <li>🏫 In-Person Full-Time Learning</li>
            <li>🛠️ Tackle Live Industry Projects</li>
            <li>🚀 Limited Seats Only</li>
          </ul>
        </div>

        {/* Right - Form */}
        <div className={styles.formCard}>
          <h2>Application Form</h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter full name" />

            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" />

            <label>Phone number</label>
            <input type="tel" placeholder="Enter 10-digit number" />

            <p className={styles.note}>
              We have a strict no-spam policy and will only contact you regarding your application.
            </p>

            <label>Graduating Year</label>
            <input type="number" placeholder="Enter year" />

            <button type="submit">Apply Now 🚀</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div>On-Site Immersive Learning</div>
        <div>📍 Sector 62, Noida</div>
        <div>🗓️ 10th September</div>
        <div>🎓 40% Scholarship Upto</div>
      </footer>
    </main>
  );
}
