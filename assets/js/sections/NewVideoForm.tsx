import React from "react"
import { Field, Form, Formik, FormikActions } from "formik"
import { IListVideosQuery, ListVideosDocument, useCreateVideoMutation } from "~/graphql"

interface FormValues {
  title: string
  url: string
}

const NewVideoForm = () => {
  const [createVideo] = useCreateVideoMutation()

  return (
    <Formik
      initialValues={{ title: "", url: "" }}
      onSubmit={(values: FormValues, actions: FormikActions<FormValues>) => {
        createVideo({
          variables: values,
          update: (cache, { data }) => {
            const cachedData = cache.readQuery<IListVideosQuery>({
              query: ListVideosDocument,
            })

            if (cachedData && cachedData.videos && data && data.createVideo) {
              cache.writeQuery({
                query: ListVideosDocument,
                data: { videos: [...cachedData.videos, data.createVideo] },
              })
            }
          },
        })
          .then(() => {
            actions.resetForm()
          })
          .finally(() => {
            actions.setSubmitting(false)
          })
      }}
      render={({ isSubmitting }) => (
        <Form>
          <Field name="title" />
          <Field name="url" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    />
  )
}

export default NewVideoForm
