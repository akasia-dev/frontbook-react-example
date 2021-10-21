import { demo } from "frontbook-react";

export interface IProps {
  name: string;
}

export default demo({
  controls: {
    name: {
      type: "string",
      defaultValue: "just only exist demo component?",
    },
  },
  renderProps: (props) => {
    return { name: props.name };
  },
  renderManualComponent: (props: IProps) => {
    return (
      <>
        <div>{props.name}</div>
      </>
    );
  },
});
