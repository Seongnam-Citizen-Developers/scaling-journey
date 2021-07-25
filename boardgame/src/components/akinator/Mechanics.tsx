import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const mechanicsMappingTable: {
  [key: string]: { name: string; comment: string };
} = {
  "9mNukNBxfZ": {
    name: "Cooperative Play",
    comment: "협력",
  },
  BGrhzIN69D: {
    name: "Player Elimination",
    comment: "개인전",
  },
  "9jnCsVuRat": {
    name: "Teams",
    comment: "팀전",
  },
};

interface MechanicsProps {
  setPhase: any;
  mechanics: string | undefined;
  setMechanics: any;
}

const Mechanics: React.FC<MechanicsProps> = ({
  setPhase,
  mechanics,
  setMechanics,
}) => {
  const mechanicsIdList = ["9mNukNBxfZ", "BGrhzIN69D", "9jnCsVuRat"];

  const onClick = (data: any) => {
    console.log(data.currentTarget.value);
    setMechanics(data.currentTarget.value);
    setPhase("request");
  };
  const style = useStyles();

  return (
    <>
      <h2 className={style.title}>Q4.</h2>
      <h4>마지막으로 게임 모드를 선택해주세요</h4>
      {mechanicsIdList.map((mechanicId, index) => (
        <div key={index}>
          <Button
            onClick={onClick}
            value={mechanicId}
            className={style.button}
            variant="contained"
            color="primary"
            fullWidth
          >
            {mechanicsMappingTable[mechanicId].comment}
          </Button>
        </div>
      ))}
    </>
  );
};

export default Mechanics;

const useStyles = makeStyles({
  title: {
    color: "#E04181",
  },
  button: {
    marginTop: "10px",
    height: "50px",
  },
});
