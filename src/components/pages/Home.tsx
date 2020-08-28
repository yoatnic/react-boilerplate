import * as React from "react";
// import Header from "../organisms/Header";
// import Footer from "../organisms/Footer";
import HelthInput from "../molecules/HelthInput";
import HelthReports from "../molecules/HelthReports";
import { IHelthInput } from "../molecules/HelthInput";
import { IHelthReport } from "../atoms/HelthReport";

const Home = () => {
  const initialState: IHelthReport[] = [];
  const [reports, setReports] = React.useState(initialState);

  React.useEffect(() => {
    fetch("/api/v1/helth-reports")
      .then((response) => response.json())
      .then((data) => {
        setReports(data.reports);
      });
  }, []);

  return (
    <>
      {/* <Header /> */}
      <HelthInput
        onSave={async (input: IHelthInput) => {
          const r: IHelthReport = input;

          await fetch("/api/v1/helth-reports", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              reports: [r, ...reports],
            }),
          });

          setReports([r, ...reports]);
        }}
      />
      <HelthReports items={reports} />
    </>
  );
};

export default Home;
