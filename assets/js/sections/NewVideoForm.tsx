import React from "react"
import { Form } from "react-final-form"
import { IListVideosQuery, IVideoFragment, ListVideosDocument, useCreateVideoMutation } from "~/graphql/interface"
import { Input, mapGraphQLErrors } from "~/shared/form"

interface FormValues {
  title: string
  url: string
}

const NewVideoForm = () => {
  const [createVideo] = useCreateVideoMutation()

  const onSubmit = (values: FormValues) => {
    return createVideo({
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
    }).then(({ data }) => {
      const result = data!.createVideo!
      if (!result.successful) {
        return mapGraphQLErrors(result.messages!)
      }
    })
  }

  return (
    <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      render={({ handleSubmit, form, submitting }) => (
        <form
          onSubmit={async event => {
            const errors = await handleSubmit(event)
            if (!errors) form.reset()
          }}
        >
          <div>
            <Input name="title" type="text" placeholder="Title" />
          </div>
          <div>
            <Input name="url" type="text" placeholder="Url" />
          </div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </form>
      )}
    />
  )
}

export default NewVideoForm
