import * as React from "react";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { HelthReport, IHelthReport } from "../atoms/HelthReport";
import { mergeStyleSets } from "office-ui-fabric-react/lib/Styling";

export interface IProps {
  items: IHelthReport[];
}

export interface IHelthReportsState {
  items: IHelthReport[];
}

const classNames = mergeStyleSets({
  cardContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
});

export const HelthReports = (props: IProps) => {
  const reports = props.items.map((item, i) => (
    <HelthReport key={`${i + 1}`} {...item} />
  ));

  return (
    <Fabric>
      <Stack>
        <div className={classNames.cardContainer}>{...reports}</div>
      </Stack>
    </Fabric>
  );
};

export default HelthReports;
