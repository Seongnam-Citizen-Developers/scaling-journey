import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core";

interface PlayTimeProps {
  setPhase: any;
  gnt: number | undefined;
  setGnt: any;
  lxt: number | undefined;
  setLxt: any;
}

const PlayTime: React.FC<PlayTimeProps> = ({
  setPhase,
  gnt,
  setGnt,
  lxt,
  setLxt,
}) => {
  const [sliderValues, setSliderValues] = useState<number[]>([gnt, lxt]);
  const style = useStyles();
  const handleChange = (event, value) => {
    setSliderValues(value);
    if (gnt !== value[0]) {
      setGnt(value[0]);
    } else if (lxt !== value[1]) {
      setLxt(value[1]);
    }
  };

  const valuetext = (value) => {
    return `${value}°C`;
  };

  const marks = [
    {
      value: 10,
      label: "최소",
    },
    {
      value: 180,
      label: "최대",
    },
  ];

  return (
    <>
      <h2 className={style.title}>Q3.</h2>
      <h4>한 게임이 얼마나 길었으면 좋겠어요??</h4>
      <p>슬라이더로 플레이 시간을 알려주세요.</p>
      <div>
        <Slider
          value={sliderValues}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          marks={marks}
          step={10}
          min={10}
          max={180}
          valueLabelFormat={(x) => {
            return x + "분";
          }}
        />
      </div>
      <div className={style.nextArea}>
        설정을 완료하셨으면 "다음" 버튼을 눌러주세요
        <Button
          className={style.button}
          variant="contained"
          color="primary"
          onClick={() => {
            setPhase("mechanics");
          }}
          fullWidth
        >
          {" "}
          다음{" "}
        </Button>
      </div>
    </>
  );
};

export default PlayTime;

const useStyles = makeStyles({
  title: {
    color: "#E04181",
  },
  button: {
    marginTop: "10px",
    height: "50px",
  },
  nextArea: {
    paddingTop: "5%",
  },
});
