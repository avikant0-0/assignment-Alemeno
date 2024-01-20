import {defineField, defineType} from 'sanity'
import NumericInput from 'react-numeric-input'
export default defineType({
  name: 'subscribers',
  title: 'Subscribers',
  type: 'document',
  fields: [
    defineField({
      name: 'gmail',
      title: 'Gmail',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'coursetaken',
      title: 'Coursestaken',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'course',
          fields: [
            {
              type: 'reference',
              to: [{type: 'courses'}],
              name: 'courseRef',
            },
            {
              type: 'number',
              name: 'percentage',
              title: 'Percentage of completion',
              inputComponent: NumericInput,
              validation: (Rule) => Rule.positive().max(100),
              options: {
                decimalScale: 0,
                fixedDecimalScale: true,
                allowNegative: false,
                suffix: ' %',
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'likedcourses',
      title: 'Liked courses',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'courses'}],
        },
      ],
    }),
  ],
})
