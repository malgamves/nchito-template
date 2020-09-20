import gql from 'graphql-tag'

export const addJobMutation = gql` 
  mutation addJobs($Title: String!, $CompanyName: String!, $CompanySize: String!, $Description: !String, $Remote: !Boolean, $Location: !String, $Salary: !Int ) {
  createJob(
    input: {
      data: {
        title: $Title
        companyName: $CompanyName
        companySize: $CompanySize
        description: $Description
        remote: $Remote
        location: $Location
        salary: $Remote
      }
    }
  ) { job {
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
}

`
