import React from 'react';
import './LocationSearchResults.css';
import PropTypes from 'prop-types';
import Spinner from "../../UI/Spinner";

const getPages = (offsetInfo) => {

	const { currentOffset, totalCount } = offsetInfo;

	const pagesCnt = parseInt(totalCount / 10, 10),
		currPage = parseInt(currentOffset / 10, 10);

	const isMoreThenOnePage = pagesCnt > 0;

	let pages = [
		{ text: 'First', offset: 0, disabled: !(isMoreThenOnePage && currPage > 0) },
		{ text: 'Prev', offset: (currPage - 1) * 10, disabled: !(isMoreThenOnePage && currPage > 0 && currPage !== 1) },
		{ text: 'Next', offset: (currPage + 1) * 10, disabled: !(isMoreThenOnePage && pagesCnt > currPage && pagesCnt - currPage > 1) },
		{ text: 'Last', offset: (pagesCnt) * 10, disabled: !(isMoreThenOnePage && pagesCnt > currPage) },
	];
	return pages;
};

const LocationSearchResults = ({ show, loading, locations, selectLocation, offsetInfo, changePage }) => {
	let content = <Spinner />;
	let summaryText;
	let pageLinks;
	if (!loading) {
		if (locations.length === 0) {
			content = <p>No results</p>;
		}
		else {
			content = (<ul className="location-results__list">
				{locations.map((city, i) => (
					<ol location-results__element key={i} onClick={(ev) => selectLocation(i)}>
						<p className="location-results__location-name">{city.city}, ({city.countryCode})</p>
						<p className="location-results__location-country">{city.country} ({city.region})</p>
					</ol>
				))}
			</ul>);

			if (offsetInfo.totalCount > 10) {
				summaryText = `Results: ${offsetInfo.currentOffset+1} - 
				${offsetInfo.totalCount > 10 ? offsetInfo.currentOffset+10 : offsetInfo.totalCount} of 
				${offsetInfo.totalCount}`;
			}
			else {
				summaryText = `Results: ${offsetInfo.totalCount}`;
			}

			const pages = getPages(offsetInfo);

			pageLinks = pages.map((page, i) => <button key={i} 
					className="location-results__page-link"
					onClick={() => changePage(page.offset)}
					disabled={page.disabled}
				>
					{page.text}
				</button>);
		}
	}

	return (
		<section className="location-results">
			{show &&
				<>
					{content}
					<footer className="location-results__footer">
						<span className="location-results__sumary">{summaryText}</span>
						<span className="location-results__page-links">{pageLinks}</span>
					</footer>
				</>
			}
		</section>
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