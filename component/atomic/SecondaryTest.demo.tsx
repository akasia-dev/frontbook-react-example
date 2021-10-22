import { demo } from 'frontbook-react'

export default demo({
  controls: {
    name: {
      type: 'string',
      defaultValue: 'secondary-test'
    },
    objectName: {
      type: 'string',
      defaultValue: 'object name?'
    }
  },

  renderProps: (props) => {
    return {
      name: props.name,
      texts: ['test1', 'test2'],
      object: {
        name: props.name,
        objectName: props.objectName
      },
      onClick: () => {
        console.log('click?')
      }
    }
  },

  children: 'Hi?'
})
