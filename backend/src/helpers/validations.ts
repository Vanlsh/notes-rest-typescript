import * as yup from 'yup'

export const noteSchema =  yup.object({
    id: yup.number().required("Id is required"),
    title: yup.string().required('Title is required'),
    created: yup.string().required('Created date is required'),
    category: yup.string().required('Category is required'),
    content: yup.string().required('Content is required'),
    active: yup.boolean().required('Active is required'),
})
export const editNoteSchema =  yup.object({
    title: yup.string().required('Title is required'),
    created: yup.string().required('Created date is required'),
    category: yup.string().required('Category is required'),
    content: yup.string().required('Content is required'),
    active: yup.boolean().required('Active is required'),
})

export const idSchema = yup.number().required("Id is required")
