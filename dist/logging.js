/**
 * A simple logging class that can be enabled or disabled at will, based on the console class.
 * @author William Murphy
 */
export default class logging {
    /** Writes an error message to the console if the assertion is false when enabled.
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/assert_static
     * @param {boolean} condition - condition to test
     * @param {any[]} params - anything to write to the error message
     */
    static assert(condition, ...params) {
        if (logging.enabled) {
            console.assert(condition, params);
        }
    }
    /**
     * Clears the console when enabled.
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/clear_static
     */
    static clear() {
        if (logging.enabled) {
            console.clear();
        }
    }
    /** Logs the number of times that it has been called.
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/count_static
     * @param {string | undefined} label - An optional label allowing multiple counters to run concurrently when enabled.
     */
    static count(label) {
        if (logging.enabled) {
            console.count(label);
        }
    }
    /**
     * Resets a logging.count() count to 0 when enabled.
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/countreset_static
    */
    static countReset(label) {
        if (logging.enabled) {
            console.countReset(label);
        }
    }
    /** Outputs a message to the console when it is set to the 'debug' level when enabled.
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/debug_static
     * @param {any[]} params - anything to be logged.
     */
    static debug(...params) {
        if (logging.enabled) {
            console.debug(...params);
        }
    }
    /**
     * Writes the list of properties of the provided object. It *does not* pretty-print in browser consoles, instead displaying the properties when enabled.
     * The options provide the ability to customize the output in terminal runtimes.
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/dir_static
     * @param {Object} object
     * @param {Options} options
     */
    static dir(object, options) {
        if (logging.enabled) {
            console.dir(object, options);
        }
    }
    /** When enabled in the browser, Writes an interactive tree of the descendant elements of the specified XML/HTML element. If it is not possible to display as an element, the JavaScript Object view is shown instead. The output is presented as a hierarchical listing of expandable nodes that let you see the contents of child nodes.
     *
     * In terminal runtimes, it acts as a logging.log() equivalent.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/dirxml_static
     * @param {Object} object - Object to be printed.
    */
    static dirxml(object) {
        if (logging.enabled) {
            console.dirxml(object);
        }
    }
    /** When enabled in the browser, writes to the "error" log level.
     *
     * When enabled in terminal runtimes, it logs to stderr.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/error_static
     * @param {...any} params - Values to be output.
     */
    static error(...params) {
        if (logging.enabled) {
            console.error(...params);
        }
    }
    /** When enabled, begins a nested group that contains any subsequent messages in indentation.
     * It is ended by logging.groupEnd().
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/group_static
     * @param {string | undefined} label - The group's label.
     */
    static group(label) {
        if (logging.enabled) {
            console.group(label);
        }
    }
    /** When enabled, begins a nested group that contains any subsequent messages in indentation.
     * Unlike `logging.group()`, it starts the group as collapsed in supported consoles.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/groupcollapsed_static
     * @param {string | undefined} label - The group's label
     */
    static groupCollapsed(label) {
        if (logging.enabled) {
            console.groupCollapsed(label);
        }
    }
    /**
     * Exits the group created by `logging.group()` or `logging.groupCollapsed()`
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/groupend_static
     */
    static groupEnd() {
        if (logging.enabled) {
            console.groupEnd();
        }
    }
    /** When enabled in the browser, writes to the "info" log level.
     *
     * When enabled in terminal runtimes, it behaves like `logging.log()`.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/info_static
     * @param {...any} params - Values to be output.
     */
    static info(...params) {
        if (logging.enabled) {
            console.info(...params);
        }
    }
    /** When enabled in the browser, writes to the default "log" level.
     *
     * When enabled in terminal runtimes, it prints to stdout.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/log_static
     * @param {...any} params - Values to be output.
     */
    static log(...params) {
        if (logging.enabled) {
            console.log(...params);
        }
    }
    /** When enabled, starts recording performance profiling data.
     * This is ***not*** a standard method, and is only included for firefox compatibility.
     * ***Do not*** use this for cross-platform code.
     * @deprecated Non-standard
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/profile_static
     * @param {string | undefined} name - name of the profile.
     */
    static profile(name) {
        if (logging.enabled && console.profile) {
            console.profile(name);
        }
    }
    /**
     * When enabled, stops a profile recording.
     * - When provided a valid name, it stops the specified profile.
     * - When provided an invalid name, does nothing.
     * - When not given a name, ends most recent profile.
     *
     * As with `logging.profile`, this is ***not*** a standard method, and is only included for firefox compatibility.
     * ***Do not*** use this for cross-platform code.
     * @deprecated Non-standard
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/profileend_static
     * @param {string | undefined} name - profile name
     */
    static profileEnd(name) {
        if (logging.enabled && console.profileEnd) {
            console.profileEnd(name);
        }
    }
    /**
     * When enabled, displays tabular data, like objects or arrays as a table.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/table_static
     * @param tabularData - A tabular data type, to be printed
     * @param columns - A list of column names to be displayed
     */
    static table(tabularData, columns) {
        if (logging.enabled) {
            console.table(tabularData, columns);
        }
    }
    /**
     * When enabled, starts a timer, which can be used to time operations.
     * You end a timer using `logging.timeEnd()`.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/time_static
     * @param label - Label for the timer, if absent, the label is "default"
     */
    static time(label) {
        if (logging.enabled) {
            console.time(label);
        }
    }
    /**
     * When enabled, ends a timer created by `logging.time()`.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/timeend_static
     * @param label - Label for the timer to end, if absent, the label is "default"
     */
    static timeEnd(label) {
        if (logging.enabled) {
            console.timeEnd(label);
        }
    }
    /**
     * When enabled, logs the time of a timer created by `logging.time()`.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/timelog_static
     * @param label - name of the timer to log
     * @param params - Any additional values to be logged.
     */
    static timeLog(label, ...params) {
        if (logging.enabled) {
            console.timeLog(label, ...params);
        }
    }
    /**
     * When enabled, marks the call to `logging.timeStamp()` to the browser's profiler.
     *
     * This ***is not*** a standard method, and terminal-based runtimes or certain browsers ***may not*** support it.
     * @deprecated Non-standard
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/timestamp_static
     * @param label - label of timer to stamp
     */
    static timeStamp(label) {
        if (logging.enabled && console.timeStamp) {
            console.timeStamp(label);
        }
    }
    /**
     * When enabled, writes a stack trace to the console.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/trace_static
     * @param {any[]} params - A list of parameters to write along with the trace.
     */
    static trace(...params) {
        if (logging.enabled) {
            console.trace(...params);
        }
    }
    /** When enabled in the browser, writes to the "warning" logging level,
     * accompaied by yellow text and relevant iconography.
     *
     * When enabled in terminal runtimes, it may either use colored text,
     * or print to stderr.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/console/warn_static
     * @param {...any} params - Values to be output.
     */
    static warn(...params) {
        if (logging.enabled) {
            console.warn(...params);
        }
    }
}
