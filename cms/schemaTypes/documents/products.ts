import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Thumbnail Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'imagesProduct',
      title: 'Image Product',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'richText',
    }),

    defineField({
      name: 'sizes',
      title: 'Sizes & Prices',
      type: 'array',
      of: [{type: 'sizeOption'}],
      initialValue: [],
      validation: (Rule) => Rule.required().min(1).error('Product must have at least 1 size'),
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})
