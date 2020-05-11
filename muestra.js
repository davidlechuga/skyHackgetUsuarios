import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { USUARIOS_QUERY } from '../queries';
import { Link } from 'react-router-dom';

const muestra = () => (
	<Query query={USUARIOS_QUERY}>
		{({ loading, error, data }) => {
			if (loading) return 'cargando...';
			if (error) return `Error: ${error.message}`;
			console.log(data.getUsuarios);

			return (
				<Fragment>
					<h1 className="text-center"> Listados de Usuarios</h1>
					<ul className="list-group m-5">
						{data.getUsuarios.map((item) => (
							<li key={item.id} className="list-group-item">
								<div className="row justify-content-between align-items-center">
									<div className="col-md-8 d-flex justify-content-between align-items-center">
										{item.nombre} {item.apellido}
									</div>
									<div className="col-md-4 d-flex jsutify-content-end">
										<Link
											to={`/usuarios/editar/${item.id}`}
											className="btn btn-success d-block d-md-inline-block"
										>
											Editar Cliente
										</Link>
									</div>
								</div>
							</li>
						))}
					</ul>
				</Fragment>
			);
		}}
	</Query>
);

export default muestra;
