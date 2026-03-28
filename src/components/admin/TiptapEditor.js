"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-gray-300 p-2 flex flex-wrap gap-1 bg-gray-50">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("bold")
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        <strong>B</strong>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("italic")
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        <em>I</em>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("underline")
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        <u>U</u>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("strike")
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        <s>S</s>
      </button>
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("heading", { level: 1 })
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        H1
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("heading", { level: 2 })
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("heading", { level: 3 })
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        H3
      </button>
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("bulletList")
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        • List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("orderedList")
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        1. List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("blockquote")
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        Quote
      </button>
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`px-3 py-1 rounded ${
          editor.isActive({ textAlign: "left" })
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        Left
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`px-3 py-1 rounded ${
          editor.isActive({ textAlign: "center" })
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        Center
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`px-3 py-1 rounded ${
          editor.isActive({ textAlign: "right" })
            ? "bg-brand-primary text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        Right
      </button>
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        className="px-3 py-1 rounded bg-white hover:bg-gray-100"
      >
        ↶ Undo
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        className="px-3 py-1 rounded bg-white hover:bg-gray-100"
      >
        ↷ Redo
      </button>
    </div>
  );
};

export default function TiptapEditor({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border border-gray-300 rounded-sm overflow-hidden">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="prose max-w-none p-4 min-h-[400px] focus:outline-none"
      />
    </div>
  );
}
