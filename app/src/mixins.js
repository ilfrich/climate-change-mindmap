/**
 * Created by Peter Ilfrich
 *
 *
 */
const mixins = {
    right: {
        textAlign: "right",
    },
    center: {
        textAlign: "center",
    },
    clickable: {
        cursor: "pointer",
    },
    white: {
        color: "#bbb",
    },
    bold: {
        fontWeight: "bold",
    },
    backdrop: {
        position: "fixed",
        top: "0",
        left: "0",
        background: "rgba(60, 60, 60, 0.3)",
        width: "100%",
        height: "100%",
    },
    clearFix: {
        clear: "both",
    },
    popup: {
        container: {
            margin: "auto",
            marginTop: "150px",
            background: "#eee",
            border: "1px solid #eee",
            borderRadius: "10px",
            position: "relative",
        },
        header: {
            borderBottom: "1px solid #ccc",
            fontSize: "18px",
            color: "#aaa",
            fontWeight: "bold",
            padding: "30px",
        },
        body: {
            padding: "10px 30px",
        },
        footer: {
            borderTop: "1px solid #ccc",
            textAlign: "right",
            padding: "30px",
        },
        close: {
            position: "absolute",
            right: "30px",
            top: "10px",
            cursor: "pointer",
        },
    },
    label: {
        display: "inline-block",
        maxWidth: "!00%",
        fontWeight: "700",
        marginTop: "10px",
        marginBottom: "5px",
        marginLeft: "-10px",
        fontSize: "14px",
    },
    textInput: {
        fontSize: "14px",
        lineHeight: "1.2",
        color: "#555",
        backgroundColor: "#fff",
        borderLeft: "0px",
        borderRight: "0px",
        borderTop: "0px",
        borderBottom: "1px solid #666666",
        borderRadius: "0px",
        outline: "none",
        display: "block",
        width: "100%",
        height: "31px",
        margin: "0px 5px",
        padding: "0px 6px",
    },
    button: {
        borderRadius: "0px",
        padding: "6px 10px",
        minWidth: "100px",
        borderColor: "#2e6da4",
        backgroundColor: "#3B4D65",
        fontSize: "14px",
        color: "#eee",
        cursor: "pointer",
        outline: "none",
    },
    inverseButton: {
        borderRadius: "0px",
        padding: "6px 20px",
        minWidth: "120px",
        borderColor: "#fff",
        color: "#3B4D65",
        fontSize: "14px",
        backgroundColor: "#eee",
        cursor: "pointer",
        outline: "none",
    },
    formLine: {
        textAlign: "left",
        padding: "0px 15px",
    },
    card: {
        backgroundColor: "#fff",
        padding: "10px",
        marginTop: "20px",
    },
    percentage(base, percent) {
        if (Math.isNaN(percent)) {
            return {
                ...base,
                color: "#666",
            }
        }
        if (percent < 20) {
            return {
                ...base,
                color: "#660000",
            }
        }
        if (percent < 40) {
            return {
                ...base,
                color: "#88450a",
            }
        }
        if (percent < 60) {
            return {
                ...base,
                color: "#a18d4b",
            }
        }
        if (percent < 80) {
            return {
                ...base,
                color: "#496613",
            }
        }
        return {
            ...base,
            color: "#090",
        }
    },
}

mixins.buttonDisabled = {
    ...mixins.button,
    background: "#79818f",
    cursor: "not-allowed",
}
mixins.buttonPending = {
    ...mixins.button,
    background: "#79818f",
    cursor: "wait",
}

export default mixins
