export interface IPrimaryTestProps {
  name: string
}

const PrimaryTest = (props: IPrimaryTestProps) => {
  return (
    <>
      <div>{props.name}</div>
    </>
  )
}

export default PrimaryTest
