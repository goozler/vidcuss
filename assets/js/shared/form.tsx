import React from "react"
import { Field } from "react-final-form"

interface FormErrors {
  [index: string]: string
}

type GraphQLErrorMessages = Array<{
  field: string | null
  message: string | null
} | null>

export const mapGraphQLErrors = (messages: GraphQLErrorMessages): FormErrors => {
  return (messages || []).reduce((acc: FormErrors, validationMessage) => {
    if (validationMessage && validationMessage.field && validationMessage.message) {
      acc[validationMessage.field] = validationMessage.message
    }
    return acc
  }, {})
}

const isInvalid = (meta: { touched?: boolean; error?: any; submitError?: any }): boolean => {
  if (meta.submitError) return true
  if (meta.touched && meta.error) return true
  return false
}

type Props = {
  name: string
  label?: string
} & any

export const Input = (props: Props) => (
  <Field
    {...props}
    render={({ input, meta, ...rest }) => {
      const fieldIsInvalid = isInvalid(meta)
      return (
        <>
          {props.label && <label>{props.label}</label>}
          <input {...input} {...rest} />
          {fieldIsInvalid && <span>{meta.error || meta.submitError}</span>}
        </>
      )
    }}
  />
)
