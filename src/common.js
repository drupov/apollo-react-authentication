import gql from "graphql-tag";

export const ARTICLE = gql`
query Article ($id: Int!) {
  article(id: $id) {
    title
  }
}
`;
