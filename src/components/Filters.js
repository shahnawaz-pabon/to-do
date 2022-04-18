import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { FILTERS } from "../constants/filter";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(FILTERS).map((filterKey) => {
        const currentFilter = FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
