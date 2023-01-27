export const Config = {
  type: 'data',
  label: 'Site configuration',
  singleInstance: true,
  readOnly: true,
  fields: [
    {
      type: 'image',
      name: 'favicon',
      label: 'Favicon',
      default:
        'https://assets.stackbit.com/components/images/default/favicon.svg'
    },
    {
      type: 'model',
      name: 'header',
      label: 'Header configuration',
      models: ['Header']
    },
    {
      type: 'model',
      name: 'footer',
      label: 'Footer configuration',
      models: ['Footer']
    }
  ]
}
