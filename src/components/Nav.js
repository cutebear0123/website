import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/">
        <Button>首頁</Button>
      </Link>
      <Link to="/project">
        <Button>項目</Button>
      </Link>
      <Link to="/setup">
        <Button>配置</Button>
      </Link>
    </nav>
  );
}
export default Nav;
