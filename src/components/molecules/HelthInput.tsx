import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { PrimaryButton } from "office-ui-fabric-react";
import { mergeStyleSets } from "office-ui-fabric-react/lib/Styling";
import { Stack, IStackProps } from "office-ui-fabric-react/lib/Stack";
import {
  DatePicker,
  DayOfWeek,
  IDatePickerStrings,
} from "office-ui-fabric-react/lib/DatePicker";

export interface IHelthInput {
  date: string;
  weight: string;
  percentBodyFat: string;
  bmi: string;
  muscleMass: string;
  bodyAge: string;
}

export interface IProps {
  onSave: (a: IHelthInput) => void;
}

const DayPickerStrings: IDatePickerStrings = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],

  shortDays: ["S", "M", "T", "W", "T", "F", "S"],

  goToToday: "Go to today",
  prevMonthAriaLabel: "Go to previous month",
  nextMonthAriaLabel: "Go to next month",
  prevYearAriaLabel: "Go to previous year",
  nextYearAriaLabel: "Go to next year",
  closeButtonAriaLabel: "Close date picker",

  isRequiredErrorMessage: "Field is required.",

  invalidInputErrorMessage: "Invalid date format.",
};
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: "100%", maxWidth: 480, marginBottom: 32 } },
};
const classNames = mergeStyleSets({
  saveButton: {
    marginTop: 16,
  },
});

class HelthInput extends React.Component<IProps, IHelthInput> {
  constructor(props: IProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.state = {
      date: "",
      weight: "",
      bmi: "",
      percentBodyFat: "",
      muscleMass: "",
      bodyAge: "",
    };
  }

  public render() {
    return (
      <Stack {...columnProps}>
        <DatePicker
          isRequired={true}
          firstDayOfWeek={DayOfWeek.Sunday}
          strings={DayPickerStrings}
          placeholder="yyyy-mm-dd"
          ariaLabel="Select a date"
          underlined
          label="記録日:"
          onSelectDate={(d: Date) =>
            this.setState({ date: this.formatDate(d) })
          }
          formatDate={this.formatDate}
          value={this.state.date ? new Date(this.state.date) : new Date()}
        />
        <TextField
          label="体重:"
          underlined
          required
          placeholder="99.9"
          suffix="kg"
          onChange={(e: any, v: string) => this.setState({ weight: v })}
        />
        <TextField
          label="BMI:"
          underlined
          required
          placeholder="99.9"
          onChange={(e: any, v: string) => this.setState({ bmi: v })}
        />
        <TextField
          label="体脂肪率:"
          underlined
          required
          placeholder="99.9"
          suffix="%"
          onChange={(e: any, v: string) => this.setState({ percentBodyFat: v })}
        />
        <TextField
          label="筋肉量:"
          underlined
          required
          placeholder="99.9"
          suffix="kg"
          onChange={(e: any, v: string) => this.setState({ muscleMass: v })}
        />
        <TextField
          label="体年齢:"
          underlined
          required
          placeholder="99"
          onChange={(e: any, v: string) => this.setState({ bodyAge: v })}
        />
        <PrimaryButton
          className={classNames.saveButton}
          text="Save"
          onClick={this.onClick}
          allowDisabledFocus
        />
      </Stack>
    );
  }

  private formatDate(d: Date): string {
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  }

  private onClick() {
    this.props.onSave({
      date: this.state.date,
      weight: this.state.weight,
      bmi: this.state.bmi,
      percentBodyFat: this.state.percentBodyFat,
      muscleMass: this.state.muscleMass,
      bodyAge: this.state.bodyAge,
    });
  }
}

export default HelthInput;
