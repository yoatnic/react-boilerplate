import * as React from "react";
import {
  ITheme,
  mergeStyleSets,
  getTheme,
} from "office-ui-fabric-react/lib/Styling";

const theme: ITheme = getTheme();
const { palette, fonts } = theme;
const classNames = mergeStyleSets({
  card: {
    width: 150,
    height: 150,
    boxShadow: "0 1px 2px 1px rgba(0,0,0,0.2)",
    margin: 8,
    padding: 4,
  },
  title: {
    width: "100%",
    textAlign: "center",
    color: palette.blackTranslucent40,
    fontSize: fonts.small.fontSize,
    marginBottom: 8,
  },
  weight: {
    width: "100%",
    textAlign: "center",
    fontSize: fonts.large.fontSize,
  },
  table: {
    width: "100%",
  },
  th: {
    width: "50%",
    textAlign: "right",
    fontSize: fonts.small.fontSize,
    fontWeight: fonts.small.fontWeight,
  },
  td: {
    textAlign: "left",
    fontSize: fonts.small.fontSize,
    fontWeight: fonts.small.fontWeight,
  },
});

export interface IHelthReport {
  date: string;
  weight: string;
  percentBodyFat: string;
  bmi: string;
  muscleMass: string;
  bodyAge: string;
}

export const HelthReport = (props: IHelthReport) => {
  return (
    <div className={classNames.card} data-is-focusable>
      <div className={classNames.title}>{props.date}</div>
      <div className={classNames.weight}>{props.weight} kg</div>
      <table className={classNames.table}>
        <tbody>
          <tr>
            <th className={classNames.th}>体脂肪率：</th>
            <td className={classNames.td}>{props.percentBodyFat} %</td>
          </tr>
          <tr>
            <th className={classNames.th}>BMI：</th>
            <td className={classNames.td}>{props.bmi}</td>
          </tr>
          <tr>
            <th className={classNames.th}>筋肉量：</th>
            <td className={classNames.td}>{props.muscleMass} kg</td>
          </tr>
          <tr>
            <th className={classNames.th}>肉体年齢：</th>
            <td className={classNames.td}>{props.bodyAge} 才</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
