import { connect } from "dva";
import React, { Fragment } from "react";

function Navigation({ app }) {


    return (
        <Fragment>
            
        </Fragment>
    )
}

export default connect((({ app }) => ({
    app
})))(Navigation)