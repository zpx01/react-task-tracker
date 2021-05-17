import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1 align="center">Task Tracker</h1>
      <br />
      <h3 align="center">Version 1.0.0</h3>
      <br />
      <p align="center">React project developed by Zeeshan Patel.</p>
      <p align="center">
        This task tracker uses JSON Server for a mock backend. You can add
        tasks, delete tasks, and toggle reminders.
      </p>
      <br />
      <div align="center">
        <Link to="/">
          <button className="btn">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
