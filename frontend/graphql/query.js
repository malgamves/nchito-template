import gql from 'graphql-tag'

export const jobQuery = gql`
query {
  jobs {
    id
    title
    companyName
    companySize
    description
    remote
    location
    salary
    
  }
}
`
