import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      type: 'object',
      name: 'banner',
      title: 'Banner',
      fields: [
        {
          name: 'images',
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
        // INTRO BLOCK
        {
          type: 'object',
          name: 'introBlock',
          title: 'Intro block',
          fields: [
            {name: 'image', type: 'image', options: {hotspot: true}},
            {name: 'text', type: 'array', of: [{type: 'block'}]},
          ],
        },

        // TEXT BLOCK
        {
          type: 'object',
          name: 'textBlock',
          title: 'Text block',
          fields: [
            {name: 'image', type: 'image', options: {hotspot: true}},
            {name: 'text', type: 'array', of: [{type: 'block'}]},
            {name: 'buttonText', type: 'string'},
            {name: 'buttonLink', type: 'string'},
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
