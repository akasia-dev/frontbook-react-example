import { demo } from 'frontbook-react'

export default demo({
  controls: {
    value: {
      type: 'string',
      defaultValue: 'test?'
    }
  },

  renderProps: (props) => {
    return {
      value: props.value
    }
  }
})
