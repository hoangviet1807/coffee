import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'sizeOption',
  title: 'Size option',
  type: 'object',
  fields: [
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          {title: 'Large', value: 'L'},
          {title: 'Medium', value: 'M'},
          {title: 'Small', value: 'S'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'price',
      title: 'Price (VND)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: 'isAvailable',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
