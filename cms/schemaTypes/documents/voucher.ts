import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'voucher',
  title: 'Voucher / Promotion',
  type: 'document',
  fields: [
    defineField({
      name: 'code',
      title: 'Voucher code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'discountType',
      title: 'Discount type',
      type: 'string',
      options: {
        list: [
          {title: 'Percentage (%)', value: 'percentage'},
          {title: 'Fixed amount (VND)', value: 'fixed'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'discountValue',
      title: 'Discount value',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: 'applicableProducts',
      title: 'Applicable products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
      description: 'Leave empty to apply to all products',
    }),

    defineField({
      name: 'minOrderAmount',
      title: 'Minimum order amount (VND)',
      type: 'number',
    }),

    defineField({
      name: 'startDate',
      title: 'Start date',
      type: 'datetime',
    }),

    defineField({
      name: 'endDate',
      title: 'End date',
      type: 'datetime',
    }),

    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
