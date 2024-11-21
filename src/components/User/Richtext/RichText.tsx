'use client';

import React, { useEffect } from 'react';
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
import HtmlEditorModal from '@/components/User/Richtext/HtmlEditorModal';
import { useEditorStore } from '@/hooks/useEditorStore';
import { translate } from '@/lib/utils';

export const RichText = ({ content, layout, margin, padding, size }: any) => {
    const {
        connectors: { connect, drag },
        actions: { setProp },
    } = useNode();

    const { enabled } = useEditor((state: any) => {
        return { enabled: state.options.enabled };
    });

    const currentLanguage = useEditorStore(
        (state: any) => state.currentLanguage,
    );

    const extensions = [StarterKit, Underline];

    const editor = useTipTapEditor({
        extensions,
        editorProps: {
            attributes: {
                class: 'focus:outline-none',
            },
        },
        content: translate(content?.html, currentLanguage?.code),
        onUpdate({ editor }) {
            setProp(
                (props: any) =>
                    (props.content = {
                        json: {
                            ...props.content.json,
                            [currentLanguage?.code || 'en']: editor.getJSON(),
                        },
                        html: {
                            ...props.content.html,
                            [currentLanguage?.code || 'en']: editor.getHTML(),
                        },
                    }),
                500,
            );
        },
    });

    useEffect(() => {
        const translatedHtmlContent = translate(
            content?.html,
            currentLanguage?.code,
        );

        if (editor && editor.getHTML() !== translatedHtmlContent) {
            editor.commands.setContent(translatedHtmlContent);
        }
    }, [content, currentLanguage]);

    if (!editor) {
        return null;
    }

    return (
        <div
            ref={(ref: any) => connect(drag(ref))}
            className={classnames('relative', {
                '!min-h-20': enabled && !size?.height?.value,
                '!w-full': enabled && !size?.width?.value,
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
                        <button
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 1 })
                                    .run()
                            }
                            className={
                                editor.isActive('heading', { level: 1 })
                                    ? 'is-active'
                                    : ''
                            }
                        >
                            H1
                        </button>
                        <button
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 2 })
                                    .run()
                            }
                            className={
                                editor.isActive('heading', { level: 2 })
                                    ? 'is-active'
                                    : ''
                            }
                        >
                            H2
                        </button>
                        <button
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 3 })
                                    .run()
                            }
                            className={
                                editor.isActive('heading', { level: 3 })
                                    ? 'is-active'
                                    : ''
                            }
                        >
                            H3
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
        content,
    } = useNode((node) => ({
        content: node.data.props.content,
    }));

    const currentLanguage = useEditorStore(
        (state: any) => state.currentLanguage,
    );

    return (
        <div className={'grid grid-cols-12 gap-1 w-full'}>
            <div className={'col-span-12'}>
                <HtmlEditorModal
                    value={content.html}
                    onChange={(value: string | undefined) => {
                        setProp(
                            (props: any) =>
                                (props.content = {
                                    ...props.content,
                                    html: translate(
                                        value,
                                        currentLanguage?.code,
                                    ),
                                }),
                            500,
                        );
                    }}
                />
            </div>
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
    content: {
        html: {
            en: 'Some default content',
        },
    },
};

RichText.craft = {
    props: RichTextDefaultProps,
    related: {
        settings: RichTextSettings,
        style: RichTextStyle,
    },
};
