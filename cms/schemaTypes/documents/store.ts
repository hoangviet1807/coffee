import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'store',
  title: 'Store',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Store name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),

    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    }),

    defineField({
      name: 'openingHours',
      title: 'Opening hours',
      type: 'string',
      placeholder: '07:00 - 22:00',
    }),
  ],
})
