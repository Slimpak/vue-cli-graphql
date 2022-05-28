import gql from 'graphql-tag' 
 
export const GET_ALL_USERS_QUERY = gql` 
query Children($input: ListChildrenInput) {
    childrens(input: $input) {
      firstName
    }
  }  
` 