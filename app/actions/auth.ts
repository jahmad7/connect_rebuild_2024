"use server"

import {
  SignupFormSchema,
  LoginFormSchema,
  FormState,
} from "@/app/lib/definitions";
import { redirect } from 'next/navigation'

import { ApolloClient, InMemoryCache } from "@apollo/client";

import { createSession } from "@/app/lib/session";

import { LOGIN } from "@/app/graphql/mutations";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http:///127.0.0.1:8000/graphql/",
  cache: new InMemoryCache(),
});

export async function signup(state: FormState, formData: any) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...
}

export async function login(state: FormState, formData: any) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...
  const { data, errors } = await client.mutate({
    mutation: LOGIN,
    variables: {
      user: formData.get("email"),
      pass: formData.get("password"),
    },
  });

  if (errors || data.tokenAuth.errors) {
    // handle errors
    return (data.tokenAuth.errors.nonFieldErrors[0].message)
  } else {
    await createSession(data.tokenAuth);
    redirect("/")
  }
}

