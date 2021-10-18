import { useEffect } from 'react'

export interface ISecondaryTestProps {
  name: string
  texts: string[]
  object: { name: string }
  onClick: () => unknown
  children?: any
}

const SecondaryTest = (props: ISecondaryTestProps) => {
  console.log('in secondary-test', { props }, props.children)
  console.log('in secondary-test jsx test', <></>)

  useEffect(() => {
    console.log('useEffect started! (SecondaryTest)')
    return () => {
      console.log('useEffect cleanup! (SecondaryTest)')
    }
  }, [])

  return (
    <div className="secondaryTest" onClick={props.onClick}>
      <div>{props.name}</div>
      {props.texts.map((text) => (
        <p>text: {text}</p>
      ))}
      <p>Object name: {props.object.name}</p>
      <div className="childrenMightBe">
        {props.children ? props.children : <>NOONE!</>}
      </div>
    </div>
  )
}

export default SecondaryTest
