import React from 'react';

export default ({user}) => {
	const {name, icon} = user;
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<h3>Todo list</h3>
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">About</a>
					</li>
					{
						user &&
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<img src={icon} width={"30px"} height={"30px"} className="img img-thumbnail" alt="user_logo" />
								<span>{name}</span>
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">Action</a>
								<a className="dropdown-item" href="#">Another action</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item btn btn-danger" role="button"
								 	onClick={e => {
										//  Because reloading page it will be refreshed.
										e.preventDefault();
										window.location.reload();
								}}>Log Out</a>
							</div>
						</li>
					}
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
}