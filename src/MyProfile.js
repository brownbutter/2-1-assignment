// Add module styles later...
import styles from "./MyProfile.module.css";
import logo from "./Logo.png";

function MyProfile() {
  // Apply CSS as an object

  return (
    <div className={styles.background}>
      <br />
      <img src={logo} />
      <h1 className={styles.heading}>Fiona Leong </h1>
      <div
        style={{
          color: "Black",
          backgroundColor: "beige",
          padding: "5px",
        }}
      >
        <h2>Software Engineer</h2>
      </div>
      <div className={styles.profileContainer}>
        <h3>About Me</h3>
        <br />
        <hr />
        <p>
          I am an advocate of self-improvement and I want to help people improve
          their lives through knowledge and application{" "}
        </p>
      </div>
      <div className={styles.profileContainer}>
        <h3>Contact Me</h3>
        <br />
        <hr />
        <p>
          Email: sample_john_smith@mail.com | LinkedIn:
          https://www.linkedin.com/{" "}
        </p>
      </div>
    </div>
  );
}
export default MyProfile;
