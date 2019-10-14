import gql from "graphql-tag"
import * as React from "react"
import * as ApolloReactCommon from "@apollo/react-common"
import * as ApolloReactComponents from "@apollo/react-components"
import * as ApolloReactHooks from "@apollo/react-hooks"
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type IRootMutationType = {
  __typename?: "RootMutationType"
  /** Create a video */
  createVideo: Maybe<IVideoPayload>
}

export type IRootMutationTypeCreateVideoArgs = {
  title: Maybe<Scalars["String"]>
  url: Maybe<Scalars["String"]>
}

export type IRootQueryType = {
  __typename?: "RootQueryType"
  /** Get all videos */
  videos: Array<IVideo>
}

/**
 * Validation messages are returned when mutation input does not meet the requirements.
 * While client-side validation is highly recommended to provide the best User Experience,
 * All inputs will always be validated server-side.
 *
 * Some examples of validations are:
 *
 * * Username must be at least 10 characters
 * * Email field does not contain an email address
 * * Birth Date is required
 *
 * While GraphQL has support for required values, mutation data fields are always
 * set to optional in our API. This allows 'required field' messages
 * to be returned in the same manner as other validations. The only exceptions
 * are id fields, which may be required to perform updates or deletes.
 **/
export type IValidationMessage = {
  __typename?: "ValidationMessage"
  /** A unique error code for the type of validation used. */
  code: Scalars["String"]
  /**
   * The input field that the error applies to. The field can be used to
   * identify which field the error message should be displayed next to in the
   * presentation layer.
   *
   * If there are multiple errors to display for a field, multiple validation
   * messages will be in the result.
   *
   * This field may be null in cases where an error cannot be applied to a specific field.
   **/
  field: Maybe<Scalars["String"]>
  /**
   * A friendly error message, appropriate for display to the end user.
   *
   * The message is interpolated to include the appropriate variables.
   *
   * Example: `Username must be at least 10 characters`
   *
   * This message may change without notice, so we do not recommend you match against the text.
   * Instead, use the *code* field for matching.
   **/
  message: Maybe<Scalars["String"]>
  /** A list of substitutions to be applied to a validation message template */
  options: Maybe<Array<Maybe<IValidationOption>>>
  /**
   * A template used to generate the error message, with placeholders for option substiution.
   *
   * Example: `Username must be at least {count} characters`
   *
   * This message may change without notice, so we do not recommend you match against the text.
   * Instead, use the *code* field for matching.
   **/
  template: Maybe<Scalars["String"]>
}

export type IValidationOption = {
  __typename?: "ValidationOption"
  /** The name of a variable to be subsituted in a validation message template */
  key: Scalars["String"]
  /** The value of a variable to be substituted in a validation message template */
  value: Scalars["String"]
}

export type IVideo = {
  __typename?: "Video"
  id: Scalars["ID"]
  title: Scalars["String"]
  url: Scalars["String"]
}

export type IVideoPayload = {
  __typename?: "VideoPayload"
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages: Maybe<Array<Maybe<IValidationMessage>>>
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result: Maybe<IVideo>
  /** Indicates if the mutation completed successfully or not.  */
  successful: Scalars["Boolean"]
}

export type IVideoFragment = { __typename?: "Video" } & Pick<IVideo, "id" | "title" | "url">

export type IListVideosQueryVariables = {}

export type IListVideosQuery = { __typename?: "RootQueryType" } & {
  videos: Array<{ __typename?: "Video" } & IVideoFragment>
}

export type ICreateVideoMutationVariables = {
  title: Maybe<Scalars["String"]>
  url: Maybe<Scalars["String"]>
}

export type ICreateVideoMutation = { __typename?: "RootMutationType" } & {
  createVideo: Maybe<
    { __typename?: "VideoPayload" } & Pick<IVideoPayload, "successful"> & {
        result: Maybe<{ __typename?: "Video" } & IVideoFragment>
        messages: Maybe<
          Array<Maybe<{ __typename?: "ValidationMessage" } & Pick<IValidationMessage, "field" | "message">>>
        >
      }
  >
}

export const VideoFragmentDoc = gql`
  fragment Video on Video {
    id
    title
    url
  }
`
export const ListVideosDocument = gql`
  query listVideos {
    videos {
      ...Video
    }
  }
  ${VideoFragmentDoc}
`
export type ListVideosComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<IListVideosQuery, IListVideosQueryVariables>,
  "query"
>

export const ListVideosComponent = (props: ListVideosComponentProps) => (
  <ApolloReactComponents.Query<IListVideosQuery, IListVideosQueryVariables> query={ListVideosDocument} {...props} />
)

/**
 * __useListVideosQuery__
 *
 * To run a query within a React component, call `useListVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListVideosQuery({
 *   variables: {
 *   },
 * });
 */
export function useListVideosQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<IListVideosQuery, IListVideosQueryVariables>
) {
  return ApolloReactHooks.useQuery<IListVideosQuery, IListVideosQueryVariables>(ListVideosDocument, baseOptions)
}
export function useListVideosLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IListVideosQuery, IListVideosQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<IListVideosQuery, IListVideosQueryVariables>(ListVideosDocument, baseOptions)
}
export type ListVideosQueryHookResult = ReturnType<typeof useListVideosQuery>
export type ListVideosLazyQueryHookResult = ReturnType<typeof useListVideosLazyQuery>
export type ListVideosQueryResult = ApolloReactCommon.QueryResult<IListVideosQuery, IListVideosQueryVariables>
export const CreateVideoDocument = gql`
  mutation createVideo($title: String, $url: String) {
    createVideo(title: $title, url: $url) {
      successful
      result {
        ...Video
      }
      messages {
        field
        message
      }
    }
  }
  ${VideoFragmentDoc}
`
export type ICreateVideoMutationFn = ApolloReactCommon.MutationFunction<
  ICreateVideoMutation,
  ICreateVideoMutationVariables
>
export type CreateVideoComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<ICreateVideoMutation, ICreateVideoMutationVariables>,
  "mutation"
>

export const CreateVideoComponent = (props: CreateVideoComponentProps) => (
  <ApolloReactComponents.Mutation<ICreateVideoMutation, ICreateVideoMutationVariables>
    mutation={CreateVideoDocument}
    {...props}
  />
)

/**
 * __useCreateVideoMutation__
 *
 * To run a mutation, you first call `useCreateVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVideoMutation, { data, loading, error }] = useCreateVideoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useCreateVideoMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<ICreateVideoMutation, ICreateVideoMutationVariables>
) {
  return ApolloReactHooks.useMutation<ICreateVideoMutation, ICreateVideoMutationVariables>(
    CreateVideoDocument,
    baseOptions
  )
}
export type CreateVideoMutationHookResult = ReturnType<typeof useCreateVideoMutation>
export type CreateVideoMutationResult = ApolloReactCommon.MutationResult<ICreateVideoMutation>
export type CreateVideoMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ICreateVideoMutation,
  ICreateVideoMutationVariables
>
