import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  const [time, setTime] = React.useState(
    new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
  );
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
        })
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div style={{ margin: "100px" }}>
      <h1>cutebear</h1>
      <p style={{ color: "gray" }}>一個爛爛的開發者</p>
      <div>
        <a href="https://github.com/cutebear0123" target="__blank">
          <Button variant="outline-primary">GitHub</Button>
        </a>
      

        <a href="/">
          <Button variant="outline-primary">網站</Button>
        </a>
      </div>
      <br />
      <div>
        <p>
          時間：
          {time}
        </p>
      </div>
    </div>
  );
};
export default Home;
