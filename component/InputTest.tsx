import { ChangeEvent, useEffect } from 'react'

export interface InputTestProps {
  value: string
  onChange?: (changedValue: string) => unknown
}

const InputTest = (props: InputTestProps) => {
  console.log('in input-test', { props })

  useEffect(() => {
    console.log('useEffect started!')
    return () => {
      console.log('useEffect cleanup!')
    }
  }, [])

  return (
    <div className="inputTest">
      <input
        type="text"
        value={props.value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          console.log('check?', event.target.value)
          if (typeof props.onChange === 'undefined') return
          props.onChange(event.target.value)
        }}
      />
    </div>
  )
}

export default InputTest
