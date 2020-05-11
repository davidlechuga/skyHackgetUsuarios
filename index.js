import gql from 'graphql-tag';

export const USUARIOS_QUERY = gql`
	{
		getUsuarios {
			id
			nombre
			apellido
			edad
			empresa
			tipo
		}
	}
`;
