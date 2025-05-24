"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  description?: string;
  filename?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  title,
  description,
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const getLanguageColor = (lang: string) => {
    const colors = {
      typescript: "text-blue-400",
      javascript: "text-yellow-400",
      bash: "text-green-400",
      json: "text-orange-400",
      plaintext: "text-gray-400",
    };
    return colors[lang as keyof typeof colors] || "text-gray-400";
  };

  return (
    <div className="mb-6 bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-slate-800/70 hover:border-purple-500/30">
      {(title || filename) && (
        <div className="px-6 py-4 border-b border-slate-700/50">
          <h3 className="text-lg text-purple-100 font-semibold">
            {title || filename}
          </h3>
          {description && (
            <p className="text-slate-400 text-sm mt-1">{description}</p>
          )}
        </div>
      )}
      <div className="bg-slate-900 rounded-lg border border-slate-700/50 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span
              className={`text-xs px-2 py-1 rounded border border-slate-600 ${getLanguageColor(
                language
              )}`}
            >
              {language}
            </span>
          </div>
          <Button
            onClick={copyToClipboard}
            variant="ghost"
            size="sm"
            className="h-8 px-3 text-slate-400 hover:text-white hover:bg-slate-700/50"
          >
            {copied ? (
              <>
                <Check size={14} className="mr-1.5" />
                Copied!
              </>
            ) : (
              <>
                <Copy size={14} className="mr-1.5" />
                Copy
              </>
            )}
          </Button>
        </div>
        <div className="max-h-96 overflow-auto">
          <pre className="p-4 text-sm leading-relaxed font-mono">
            <code className="text-slate-100">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
