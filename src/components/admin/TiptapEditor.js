"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { useRef, useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";

const MenuBar = ({ editor }) => {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  if (!editor) {
    return null;
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        editor.chain().focus().setImage({ src: data.url }).run();
      } else {
        alert("Upload failed: " + data.message);
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const addImageFromUrl = () => {
    const url = prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

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
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className="px-3 py-1 rounded bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
        title="Upload image from computer"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {uploading ? "Uploading..." : "📷 Upload"}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      <button
        type="button"
        onClick={addImageFromUrl}
        className="px-3 py-1 rounded bg-white hover:bg-gray-100"
        title="Add image from URL"
      >
        🔗 URL
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
      Image.configure({
        inline: true,
        allowBase64: true,
        HTMLAttributes: {
          class: "rounded-sm max-w-full h-auto my-4",
        },
      }),
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
      <style jsx global>{`
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 0.25rem;
          margin: 1rem 0;
          cursor: pointer;
        }
        .ProseMirror img.ProseMirror-selectednode {
          outline: 3px solid #90221a;
        }
      `}</style>
    </div>
  );
}
