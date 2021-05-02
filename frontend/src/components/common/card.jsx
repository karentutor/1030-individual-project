import React from "react";

const CardComp = ({id, name, email}) => {
	return (
        <div class="card" style={{ width: "18rem" }}>
			<img class="card-img-top" src="..." alt="Card image cap" />
			<div class="card-body">
                <h5 class="card-title">{id}</h5>
				<p class="card-text">
                    {name}
                </p>
				<a href="#" class="btn btn-secondary">
					{email}
				</a>
			</div>
		</div>
	);
};

export default CardComp;
