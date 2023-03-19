import Project from "../components/project";
const Projects = () => {
  return (
    <div style={{ margin: "100px" }}>
      <h1>項目</h1>
      <Project
        name="網站"
        icon="/icon/browser.svg"
        description="就是這個網站，不然呢"
        link="/"
      />{" "}
      <Project
        name="鯊妹"
        icon="/icon/shark.png"
        description="我唯一的驗證bot"
        link="https://shark.cutebear.me"
        target="__blank"
      />
      <Project
        name="Safer 2"
        icon="/icon/safer.png"
        description="一隻防護機器人"
        link="https://top.gg/bot/1083888404044972052"
        target="__blank"
      />
    </div>
  );
};
export default Projects;
