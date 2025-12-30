import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',

  fields: [
    defineField({
      type: 'object',
      name: 'heroCarousel',
      title: 'Hero carousel',
      fields: [
        {
          name: 'slides',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'image', type: 'image', options: {hotspot: true}},
                {name: 'title', type: 'string'},
                {name: 'subtitle', type: 'text'},
                {name: 'buttonText', type: 'string'},
                {name: 'buttonLink', type: 'string'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'blocks',
      title: 'Page blocks',
      type: 'array',
      of: [
        // HERO CAROUSEL

        // TEXT BLOCK
        {
          type: 'object',
          name: 'textBlock',
          title: 'Text block',
          fields: [
            {name: 'title', type: 'string'},
            {name: 'text', type: 'text'},
          ],
        },

        // PRODUCT LIST
        {
          type: 'object',
          name: 'productBlock',
          title: 'Product block',
          fields: [
            {name: 'title', type: 'string'},
            {
              name: 'products',
              type: 'array',
              of: [{type: 'reference', to: [{type: 'product'}]}],
            },
          ],
        },
      ],
    }),
  ],
})
