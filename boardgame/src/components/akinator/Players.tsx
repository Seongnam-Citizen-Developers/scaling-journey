import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

interface PlayersProps {
  setPhase: any;
  numOfPeople: number | undefined;
  setNumOfPeople: any;
}

const Players: React.FC<PlayersProps> = ({
  setPhase,
  setNumOfPeople,
  numOfPeople,
}) => {
  const style = useStyles();
  const numList = [1, 2, 3, 4, 5, 6, 7, 8];

  const onClick = (data: any) => {
    console.log(data.currentTarget.value);
    setPhase("playTime");
    setNumOfPeople(Number(data.currentTarget.value));
  };

  return (
    <>
      <h2 className={style.title}>Q2.</h2>
      <h4>몇 명이 플레이 할 예정인가요??</h4>
      {numList.map((num, index) => (
        <div key={index}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            value={num}
            onClick={onClick}
            className={style.button}
          >
            {num}명
          </Button>
        </div>
      ))}
    </>
  );
};

export default Players;

const useStyles = makeStyles({
  title: {
    color: "#E04181",
  },
  button: {
    marginTop: "10px",
    height: "50px",
  },
});
