import React from 'react';

function Alert(props) {
    const capitalize = (word) => {
        if (!word) return "";  // Prevents errors if word is null/undefined
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); // Fixed .toUpperCase()
    };

    return (
        <div style={{height: '50px'}}>
        {props.alert && (  // ✅ Correct JSX return
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
            </div>
            
        )}
        </div>
    );
}

export default Alert;
