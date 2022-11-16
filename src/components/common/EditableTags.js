import React, { Fragment, useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import { Input, message, Tag, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './EditableTags.less';

/**
 * @copyfrom https://ant.design/components/tag-cn/ 
 *  
 * @returns 
 */
function EditableTags({ tags, setTags, max = 10 }) {

    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef(null);
    const editInputRef = useRef(null);

    useEffect(() => {
        if (inputVisible) {
            inputRef.current ? inputRef.current.focus() : null;
        }
    }, [inputVisible]);

    useEffect(() => {
        editInputRef.current ? editInputRef.current.focus() : null;
    }, [inputValue]);

    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setInputValue('');
    }

    const handleClose = (removeTag) => {
        const newTags = tags.filter(tag => tag !== removeTag);
        setTags(newTags);
    }

    const handleInputConfirm = () => {
        if (tags.length >= max) {
            message.error(`max add ${max} tags`);
        } else if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    }

    return (<Fragment>
        {
            tags.map((tag, index) => {
                if (editInputIndex === index) {
                    return (
                        <Input
                            ref={editInputRef}
                            key={tag}
                            size="small"
                            className="tag-input"
                            value={editInputValue}
                            onChange={e => setEditInputValue(e.target.value)}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm} />
                    );
                }
                const tagElem = (
                    <Tag
                        key={tag}
                        className="edit-tag"
                        closable
                        onClose={handleClose}>
                        <span onDoubleClick={(e) => {
                            setEditInputIndex(index);
                            setEditInputValue(tag);
                            e.preventDefault();
                        }}>{tag}</span>
                    </Tag>
                );

                return <Tooltip title={tag} key={tag}>{tagElem}</Tooltip>
            })
        }
        {
            inputVisible && (
                <Input
                    ref={inputRef}
                    type="text"
                    className="tag-input"
                    size="small"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm} />
            )
        }
        {
            !inputVisible && (
                <Tag
                    className="site-tag-plus"
                    onClick={() => setInputVisible(true)}>
                    <PlusOutlined /> new Tag
                </Tag>
            )
        }
    </Fragment>)
}

EditableTags.propTypes = {
    tags: PropTypes.array,
    setTags: PropTypes.func
}

export default EditableTags;