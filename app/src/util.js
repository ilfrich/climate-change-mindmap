/**
 * Created by Peter Ilfrich
 *
 *
 */
import moment from "moment"

/**
 * Utilities used across components
 */
export default {
    /**
     * Uses the hard-coded date format to format the provided date. If no valid date is provided, null is returned.
     * @param {Date} date - the date to format
     * @returns {String} the formatted string or null
     */
    formatDate(date) {
        const d = moment(date)
        if (d.isValid()) {
            return moment(date).format("YYYY-MM-DD")
        }
        return null
    },

    /**
     * Returns the action.type suffixes for the promise redux middleware (used in the reducers)
     */
    actionTypeSuffixes: {
        pending: "_PENDING",
        fulfilled: "_FULFILLED",
        rejected: "_REJECTED",
    },

    normalise(val, min, max) {
        if (val < min) {
            return 0.0
        }
        if (val > max) {
            return 1.0
        }
        let minValue = min
        let maxValue = max
        if (max < min) {
            minValue = max
            maxValue = min
        }

        if (max === min) {
            return 1.0
        }
        return (val - minValue) / (maxValue - minValue)
    },
}
