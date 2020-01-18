import React from 'react';
import './LocationSearchResults.css';
import PropTypes from 'prop-types';
import Spinner from "../../UI/Spinner";

const getPages = (offsetInfo) => {

	const { currentOffser, totalCount } = offsetInfo;

	const pagesCnt = parseInt(totalCount / 10, 10),
		currPage = parseInt(currentOffser / 10, 10);

	if (pagesCnt > 0) {
		let pages = [
			(currPage > 0) ? { text: 'First', offset: 0 } : undefined,
			(currPage > 0 && currPage != 1) ? { text: 'Prev', offset: (currPage - 1) * 10 } : undefined,
			(pagesCnt > currPage && pagesCnt - currPage > 1) ? { text: 'Next', offset: (currPage + 1) * 10 } : undefined,
			(pagesCnt > currPage) ? { text: 'Last', offset: (pagesCnt) * 10 } : undefined,
		];
		return pages
	}
	return [undefined, undefined, undefined, undefined];
};

const LocationSearchResults = ({ show, loading, locations, selectLocation, offsetInfo, changePage }) => {
	let content = <Spinner />;
	if (!loading) {
		if (locations.length === 0) {
			content = <p>No results</p>;
		}
		else {
			content = (<ul className="location-results__list">
				{locations.map(city => (
					<ol key={city.id} onClick={(ev) => selectLocation(city.id)}>
						<div className="location-results__element" >
							<p className="location-results__location-name">{city.city}, ({city.countryCode})</p>
							<p> </p>
							<p>{city.country} ({city.region})</p>
						</div>
					</ol>
				))}
			</ul>);
		}
	}

	const pages = getPages(offsetInfo);

	const pageLinks = pages.map((page, i) => <button key={i} 
			className={`location-results__page-link${(!page ? ' location-results__page-link--disabled':'')}`}
			onClick={() => changePage(page && page.offset)}
			disabled={!page}
		>
			First{page && page.text}
		</button>);

	return (
		<div className="location-results">
			{show &&
				<>
					{content}
<div className="location-results__page-links"><span>Count: {offsetInfo.totalCount}</span>{pageLinks}</div>
				</>
			}
		</div>
	);
};

LocationSearchResults.propTypes = {
	show: PropTypes.bool,
	loading: PropTypes.bool,
	locations: PropTypes.arrayOf(PropTypes.object),
	offsetInfo: PropTypes.object,
	selectLocation: PropTypes.func,
	changePage: PropTypes.func
};

export default LocationSearchResults;