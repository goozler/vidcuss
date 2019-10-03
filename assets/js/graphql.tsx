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

export type IRootQueryType = {
  __typename?: "RootQueryType"
  /** Get all videos */
  videos: Array<IVideo>
}

export type IVideo = {
  __typename?: "Video"
  id: Scalars["ID"]
  title: Scalars["String"]
  url: Scalars["String"]
}

export type IListVideosQueryVariables = {}

export type IListVideosQuery = { __typename?: "RootQueryType" } & {
  videos: Array<{ __typename?: "Video" } & Pick<IVideo, "id" | "title" | "url">>
}

export const ListVideosDocument = gql`
  query ListVideos {
    videos {
      id
      title
      url
    }
  }
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
