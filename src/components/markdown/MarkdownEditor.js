import React, { useEffect, useState } from "react";
import Vditor from "vditor";
import 'vditor/dist/index.css';
import PropTypes from 'prop-types';

function MarkdownEditor({ content, setContent }) {

    useEffect(() => {
        const vditor = new Vditor("markdown-editor", {
            after: () => {
                vditor.setValue(content);
            },
            input: (value) => {
                console.log(value);
                setContent(value);
            }
        });
    }, []);


    return (
        <div id="markdown-editor" style={{ minHeight: "300px" }}>
        </div>
    )
}

MarkdownEditor.propTypes = {
    content: PropTypes.string,
    setContent: PropTypes.func
}

export default MarkdownEditor;