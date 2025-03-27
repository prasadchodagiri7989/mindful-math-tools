
import React, { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/ui/ToolLayout";

const WindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [deviceWidth, setDeviceWidth] = useState(window.screen.width);
  const [deviceHeight, setDeviceHeight] = useState(window.screen.height);
  const [devicePixelRatio, setDevicePixelRatio] = useState(window.devicePixelRatio || 1);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Common breakpoints
  const breakpoints = [
    { name: "xs (Extra Small)", width: 320, description: "Small mobile devices" },
    { name: "sm (Small)", width: 640, description: "Mobile devices" },
    { name: "md (Medium)", width: 768, description: "Tablets" },
    { name: "lg (Large)", width: 1024, description: "Laptops/Desktops" },
    { name: "xl (Extra Large)", width: 1280, description: "Large desktops" },
    { name: "2xl (2X Large)", width: 1536, description: "Very large screens" },
  ];

  const getCurrentBreakpoint = () => {
    const width = window.innerWidth;
    if (width < 640) return "xs";
    if (width < 768) return "sm";
    if (width < 1024) return "md";
    if (width < 1280) return "lg";
    if (width < 1536) return "xl";
    return "2xl";
  };

  const copyToClipboard = () => {
    const sizeText = `Window Size: ${windowWidth} × ${windowHeight}px
Viewport Size: ${viewportWidth} × ${viewportHeight}px
Device Size: ${deviceWidth} × ${deviceHeight}px
Device Pixel Ratio: ${devicePixelRatio}
Current Breakpoint: ${getCurrentBreakpoint()}`;

    navigator.clipboard.writeText(sizeText);
    setCopied(true);
    toast.success("Window size info copied to clipboard");
    
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const getBreakpointColor = (breakpointWidth: number) => {
    if (windowWidth >= breakpointWidth) {
      return "bg-green-100 text-green-800 border-green-200";
    }
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <ToolLayout
      title="Window Size"
      description="View your current window and viewport dimensions. Useful for responsive design testing."
      className="bg-white"
    >
      <div className="space-y-8">
        <div className="flex flex-col items-center justify-center">
          <div className="text-6xl font-bold text-primary flex items-end">
            {windowWidth} <span className="mx-2 text-gray-300 text-5xl">×</span> {windowHeight}
          </div>
          <div className="mt-2 text-gray-500">window pixels</div>
          
          <div className="flex items-center mt-6">
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="flex items-center justify-center"
            >
              {copied ? (
                <>
                  <Check size={16} className="mr-1.5" />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={16} className="mr-1.5" />
                  Copy Info
                </>
              )}
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Viewport</div>
            <div className="font-medium flex justify-between">
              <span>Width: {viewportWidth}px</span>
              <span>Height: {viewportHeight}px</span>
            </div>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Device</div>
            <div className="font-medium flex justify-between">
              <span>Width: {deviceWidth}px</span>
              <span>Height: {deviceHeight}px</span>
            </div>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Pixel Ratio</div>
            <div className="font-medium">
              {devicePixelRatio}x 
              <span className="text-xs text-gray-500 ml-2">
                ({devicePixelRatio > 1 ? "High DPI Display" : "Standard Display"})
              </span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Responsive Breakpoints</h3>
          <div className="space-y-3">
            {breakpoints.map((breakpoint, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg border ${getBreakpointColor(breakpoint.width)}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{breakpoint.name}</span>
                    <span className="text-xs ml-2">({breakpoint.description})</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">
                      {breakpoint.width}px
                    </span>
                    {windowWidth >= breakpoint.width && (
                      <span className="ml-2 px-1.5 py-0.5 text-xs bg-green-200 text-green-800 rounded">
                        Active
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full"
                    style={{ 
                      width: `${Math.min(100, (windowWidth / breakpoint.width) * 100)}%`,
                      opacity: windowWidth >= breakpoint.width ? 1 : 0.4
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-sm font-medium text-blue-700 mb-2">Did you know?</h3>
          <p className="text-sm text-blue-700">
            The window size might differ from the viewport size due to browser chrome (like toolbars and scrollbars). 
            For web development, the viewport size is what matters for responsive design.
            {devicePixelRatio > 1 && ` Your device has a pixel ratio of ${devicePixelRatio}x, which means each CSS pixel is displayed using ${devicePixelRatio} physical device pixels.`}
          </p>
        </div>
      </div>
    </ToolLayout>
  );
};

export default WindowSize;
