import gql from 'graphql-tag' 
 
export const EDIT_USER_MUTATION = gql`
mutation EditChildren($input: EditChildrenInput!) {
    editChildren(input: $input) {
        _id
        firstName
        lastName
    }
}
`