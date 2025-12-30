import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site title',
      type: 'string',
    }),

    defineField({
      name: 'siteDescription',
      title: 'Site description',
      type: 'text',
    }),

    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'seo',
    }),
  ],
})
