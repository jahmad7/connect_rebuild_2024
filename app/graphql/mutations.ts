import { gql } from "@apollo/client";
export const LOGIN = gql`
  mutation Login($user: String!, $pass: String!) {
    tokenAuth(username: $user, password: $pass) {
      token
      refreshToken
      user {
        id
        firstName
        lastName
        role {
          name
        }
        profileimageSet {
          user {
            profileImageUrl
          }
        }
      }
    }
  }
`;