import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'courses',
  title: 'Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'enrollment',
      title: 'enrollment',
      type: 'string',
    }),
    defineField({
      name: 'subscribers',
      title: 'Subscribers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'subscribers'}],
        },
      ],
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'prerequisites',
      title: 'Prerequisties',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'syllabus',
      title: 'Syllabus',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'week',
              title: 'Week',
              type: 'string',
            },
            {
              name: 'topic',
              title: 'Topic',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'likes',
      title: 'LikedBy',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'subscribers'}],
        },
      ],
    }),
  ],
})
