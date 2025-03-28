
import React, { useState } from "react";
import { Copy, Check, ArrowDownUp } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/ui/ToolLayout";
import { GuidanceSection } from "../GuidanceSection";

const UrlEncode = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const encodeUrl = () => {
    if (!input) {
      toast.error("Please enter text to encode");
      return;
    }

    try {
      const encoded = encodeURIComponent(input);
      setOutput(encoded);
      toast.success("Text URL encoded");
    } catch (error) {
      toast.error("Error encoding text");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copied to clipboard");
    
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const swapTool = () => {
    window.location.href = "/tools/url-decode";
  };

  return (
    <>
    <ToolLayout
      title="URL Encode"
      description="Encode text for use in URLs by replacing characters that are not allowed in URLs."
    >
      <div className="space-y-6">
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={swapTool}
            className="flex items-center text-xs"
          >
            <ArrowDownUp size={14} className="mr-1.5" />
            Switch to Decode
          </Button>
        </div>

        <div className="space-y-2">
          <label 
            htmlFor="inputText" 
            className="block text-sm font-medium text-gray-700"
          >
            Text to URL Encode
          </label>
          <textarea
            id="inputText"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to encode..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all min-h-[120px]"
          />
        </div>

        <Button 
          onClick={encodeUrl}
          className="w-full"
        >
          Encode for URL
        </Button>

        {output && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-700">URL Encoded Output</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="flex items-center text-xs"
              >
                {copied ? (
                  <>
                    <Check size={14} className="mr-1.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} className="mr-1.5" />
                    Copy to Clipboard
                  </>
                )}
              </Button>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg break-all min-h-[120px] max-h-[240px] overflow-y-auto text-sm">
              {output}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
    <GuidanceSection title="How to Use the URL Encoder">
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-1">Using the URL Encoder</h4>
      <p>The URL Encoder helps you convert text into a safe format for use in URLs by replacing special characters with their encoded equivalents.</p>

      <p className="mt-2"><strong>How to Use:</strong></p>
      <ol className="list-decimal pl-5">
        <li>Enter the text you want to encode in the input field.</li>
        <li>Click "Encode for URL" to convert special characters into URL-safe encoding.</li>
        <li>Copy the encoded URL for use in links, APIs, or web applications.</li>
        <li>Use the "Switch to Decode" option to revert encoded text back to its original form.</li>
      </ol>
    </div>

    <div>
      <h4 className="font-medium mb-1">Why Use This Tool?</h4>
      <ul className="list-disc pl-5">
        <li>Ensures special characters in URLs do not break links.</li>
        <li>Prevents errors when passing data through query parameters.</li>
        <li>Useful for web development, APIs, and SEO-friendly URLs.</li>
      </ul>
    </div>
  </div>
</GuidanceSection>

    </>
  );
};

export default UrlEncode;
