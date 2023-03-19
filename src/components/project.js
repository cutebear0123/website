import { Stack } from "react-bootstrap";
function Project(props) {
  const { name, icon, description, link } = props;
  return (
    <div
      style={{
        border: "5px solid white",
        borderRadius: "5px",
        margin: "30px",
      }}
    >
      <a
        href={link}
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <Stack direction="horizontal" gap="10px" align="center">
          <img
            src={icon}
            alt={name}
            height={"100px"}
            width={"100px"}
            style={{ margin: "10px" }}
          />
          <div>
            <h2
              style={{
                textAlign: "left",
              }}
            >
              {name}
            </h2>
            <p>{description}</p>
          </div>
        </Stack>
      </a>
    </div>
  );
}
export default Project;
