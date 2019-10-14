import React from "react"
import { Field, Form, Formik, FormikActions } from "formik"
import { IListVideosQuery, IVideoFragment, ListVideosDocument, useCreateVideoMutation } from "~/graphql/interface"

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
            const response = data!.createVideo!
            if (!response.successful) return

            const cachedData = cache.readQuery<IListVideosQuery>({
              query: ListVideosDocument,
            })

            const newVideo = response.result as IVideoFragment

            cache.writeQuery({
              query: ListVideosDocument,
              data: { videos: [...cachedData!.videos, newVideo] },
            })
          },
        })
          .then(({ data }) => {
            if (!data!.createVideo!.successful) return
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
