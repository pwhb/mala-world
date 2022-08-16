import { gql } from "graphql-request";

export const layoutQuery = gql`
query layoutQuery {
    layouts {
      footerIcon
      footerText
      heroText
      title
    }
  }
  
`