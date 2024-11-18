'use client';

import React from 'react';
import { useEditor, useNode } from '@craftjs/core';
import Accordion from '@/components/Accordion/Accordion';
import LayoutForm from '@/components/Forms/LayoutForm/LayoutForm';
import SpacingForm from '@/components/Forms/SpacingForm/SpacingForm';
import SizeForm from '@/components/Forms/SizeForm/SizeForm';
import {
    BubbleMenu,
    EditorContent,
    useEditor as useTipTapEditor,
} from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import classnames from 'classnames';

export const RichText = ({ content, layout, margin, padding, size }: any) => {
    const {
        connectors: { connect, drag },
        actions: { setProp },
    } = useNode();

    const { enabled } = useEditor((state: any) => {
        return { enabled: state.options.enabled };
    });

    const editor = useTipTapEditor({
        extensions: [StarterKit, Underline],
        editorProps: {
            attributes: {
                class: 'focus:outline-none',
            },
        },
        content: content,
        onUpdate({ editor }) {
            setProp((props: any) => (props.content = editor.getJSON()), 500);
        },
    });

    if (!editor) {
        return null;
    }

    return (
        <div
            ref={(ref: any) => connect(ref)}
            className={classnames('relative', {
                '!w-full !h-20': enabled,
            })}
            style={{
                ...layout,
                marginLeft:
                    margin?.left?.unit === 'auto'
                        ? 'auto'
                        : `${margin?.left?.value}${margin?.left?.unit}`,
                marginTop:
                    margin?.top?.unit === 'auto'
                        ? 'auto'
                        : `${margin?.top?.value}${margin?.top?.unit}`,
                marginRight:
                    margin?.right?.unit === 'auto'
                        ? 'auto'
                        : `${margin?.right?.value}${margin?.right?.unit}`,
                marginBottom:
                    margin?.bottom?.unit === 'auto'
                        ? 'auto'
                        : `${margin?.bottom?.value}${margin?.bottom?.unit}`,
                width: size?.width?.value
                    ? `${size?.width?.value}${size?.width?.unit}`
                    : 'auto',
                height: size?.height?.value
                    ? `${size?.height?.value}${size?.height?.unit}`
                    : 'auto',
                paddingLeft: `${padding?.left}px`,
                paddingTop: `${padding?.top}px`,
                paddingRight: `${padding?.right}px`,
                paddingBottom: `${padding?.bottom}px`,
            }}
        >
            {editor && (
                <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                    <div className="bubble-menu">
                        <button
                            onClick={() => editor.chain().focus().undo().run()}
                            disabled={!editor.can().undo()}
                        >
                            Undo
                        </button>
                        <button
                            onClick={() => editor.chain().focus().redo().run()}
                            disabled={!editor.can().redo()}
                        >
                            Redo
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleBold().run()
                            }
                            className={
                                editor.isActive('bold') ? 'is-active' : ''
                            }
                        >
                            Bold
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleItalic().run()
                            }
                            className={
                                editor.isActive('italic') ? 'is-active' : ''
                            }
                        >
                            Italic
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleUnderline().run()
                            }
                            className={
                                editor.isActive('underline') ? 'is-active' : ''
                            }
                        >
                            Underline
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleStrike().run()
                            }
                            className={
                                editor.isActive('strike') ? 'is-active' : ''
                            }
                        >
                            Strike
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleOrderedList().run()
                            }
                            className={
                                editor.isActive('orderedList')
                                    ? 'is-active'
                                    : ''
                            }
                        >
                            Numbered List
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleBulletList().run()
                            }
                            className={
                                editor.isActive('bulletList') ? 'is-active' : ''
                            }
                        >
                            Bullet List
                        </button>
                    </div>
                </BubbleMenu>
            )}
            <EditorContent editor={editor} />
        </div>
    );
};

export const RichTextSettings = () => {
    const {
        actions: { setProp },
    } = useNode((node) => ({}));

    return (
        <div className={'grid grid-cols-12 gap-1 w-full'}>
            <div className={'col-span-12'}></div>
        </div>
    );
};

export const RichTextStyle = () => {
    const {
        actions: { setProp },
        layout,
        margin,
        padding,
        size,
    } = useNode((node) => ({
        layout: node.data.props.layout,
        margin: node.data.props.margin,
        padding: node.data.props.padding,
        size: node.data.props.size,
    }));

    return (
        <div
            className={
                'flex flex-col w-full items-start bg-slate-50 h-full select-none'
            }
        >
            <Accordion>
                <Accordion.Item title={'Layout'}>
                    <LayoutForm
                        record={layout}
                        onChange={(value: any) => {
                            setProp((props: any) => (props.layout = value));
                        }}
                        exclude={['flex', 'grid']}
                    />
                </Accordion.Item>
                <Accordion.Item title={'Spacing'}>
                    <SpacingForm
                        record={{ margin, padding }}
                        onChange={(value: any) => {
                            setProp((props: any) => {
                                props.margin = value.margin;
                                props.padding = value.padding;
                            });
                        }}
                    />
                </Accordion.Item>
                <Accordion.Item title={'Size'}>
                    <SizeForm
                        record={size}
                        onChange={(value: any) => {
                            setProp((props: any) => {
                                props.size = value;
                            });
                        }}
                    />
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export const RichTextDefaultProps = {
    layout: {
        display: 'inline-block',
    },
    content: 'Mumu',
};

RichText.craft = {
    props: RichTextDefaultProps,
    related: {
        settings: RichTextSettings,
        style: RichTextStyle,
    },
};
