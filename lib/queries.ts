import { gql } from "graphql-request";

export const GET_POSTS = gql`
  {
    posts {
      nodes {
        title
        slug
        date
        excerpt
      }
    }
  }
`;

export const GET_POST = gql`
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
    }
  }
`;