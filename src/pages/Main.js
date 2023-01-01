import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="mainDiv">
      <div className="informDiv">
        <a href="/" className="information">
          실험 안내
        </a>
        <a href="/" className="information">
          실험 동의서
        </a>
      </div>
      <div className="linkDiv">
        <Link className="link" to="/chatbot?version=1">
          챗봇1
        </Link>
        <Link className="link" to="/chatbot?version=2">
          챗봇2
        </Link>
        <Link className="link" to="/chatbot?version=3">
          챗봇3
        </Link>
        <Link className="link" to="/chatbot?version=4">
          챗봇4
        </Link>
      </div>
    </div>
  );
}

export default Main;
