import "@/pages/coffee.css";

export const getServerSideProps = ({ res }) => {
  res.statusCode = 418;
  return { props: {} };
};

export default function Coffee() {
  return (
    <div className="coffee-container">
      <div className="container">
        <h1 className="error-heading">
          <span className="status-code">418</span>
          <span className="dash">&nbsp;&ndash;&nbsp;</span>
          <span className="message">I'm a teapot</span>
          <span className="emoji">☕</span>
        </h1>
        <p>
          I cannot brew coffee because I am, permanently,&nbsp;<b>teapot</b>.
        </p>
      </div>
      <div className="error-container">
        <h2 className="biggest">418 HTTPS Status Code</h2>
      </div>
    </div>
  );
}
