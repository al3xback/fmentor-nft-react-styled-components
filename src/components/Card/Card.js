import styled from 'styled-components';

import equilibriumImage from '../../assets/images/equilibrium.jpg';
import avatarImage from '../../assets/images/avatar.png';
import viewImage from '../../assets/images/icons/view.svg';

const CardShell = styled.article`
	width: 100%;
	max-width: 21.875em;
	padding: 1.5em;
	background-color: hsl(216, 50%, 16%);
	margin: 1.875em 0 3.75em;
	border-radius: 15px;
	box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);

	&,
	& .card__image,
	& .card__content {
		display: flex;
		flex-direction: column;
	}

	& .card__image {
		position: relative;
		background-color: hsl(215, 51%, 70%);
		margin-bottom: 1.5em;
		border-radius: 8px;
		cursor: pointer;
	}

	& .card__image::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: hsla(178, 100%, 50%, 0.5);
		background-image: url(${viewImage});
		background-repeat: no-repeat;
		background-position: center;
		border-radius: inherit;
		opacity: 0;
		transition: opacity 0.3s;
	}

	& .card__image:hover::before {
		opacity: 1;
	}

	& .card__image img {
		width: 100%;
		height: auto;
		border-radius: inherit;
	}

	& .card__title {
		margin-bottom: 0.54em;
	}

	& .card__desc {
		margin-bottom: 1.125em;
	}

	& .card__stats-list {
		display: flex;
	}

	& .card__stats-list-item {
		display: flex;
		align-items: center;
		width: 50%;
		font-size: 0.9375em;
	}

	& .card__stats-list-item:first-child {
		font-weight: 600;
		color: hsl(178, 100%, 50%);
	}

	& .card__stats-list-item:last-child {
		justify-content: flex-end;
	}

	& .card__stats-list-item i {
		flex: none;
		margin-right: 0.48125em;
	}

	& .card__author {
		display: flex;
		align-items: center;
		padding-top: 1em;
		margin-top: 1em;
		border-top: 1px solid hsl(215, 32%, 27%);
	}

	& .card__author-img {
		flex: none;
		width: 2.0625em;
		height: auto;
		margin-right: 1em;
		border: 1px solid hsl(0, 0%, 100%);
		border-radius: 50%;
	}

	& .card__author-desc {
		font-size: 0.9375em;
	}

	@media (min-width: 48em) {
		& .card__title {
			margin-bottom: 0.72em;
		}

		& .card__desc {
			margin-bottom: 1.33em;
			font-size: 1.125em;
		}

		& .card__stats-list-item,
		& .card__author-desc {
			font-size: 1em;
		}

		& .card__author {
			margin-top: 1.5em;
		}
	}
`;

const Card = () => {
	return (
		<CardShell>
			<div className="card__image">
				<img
					width="302"
					height="302"
					src={equilibriumImage}
					alt="Equilibrium"
				/>
			</div>
			<div className="card__content">
				<h2 className="card__title">
					<a href="#/" className="btn btn--link">
						Equilibrium #3429
					</a>
				</h2>
				<p className="card__desc">
					Our Equilibrium collection promotes balance and calm.
				</p>
				<ul className="card__stats-list">
					<li className="card__stats-list-item">
						<i className="icon-ethereum" aria-hidden="true"></i>
						<span>0.041 ETH</span>
					</li>
					<li className="card__stats-list-item">
						<i className="icon-clock" aria-hidden="true"></i>
						<span>3 days left</span>
					</li>
				</ul>
				<div className="card__author">
					<img
						className="card__author-img"
						width="33"
						height="33"
						src={avatarImage}
						alt="Jules Wyvern"
					/>
					<span className="card__author-desc">
						Creation of&nbsp;
						<a href="#/" className="btn btn--link">
							Jules Wyvern
						</a>
					</span>
				</div>
			</div>
		</CardShell>
	);
};

export default Card;
