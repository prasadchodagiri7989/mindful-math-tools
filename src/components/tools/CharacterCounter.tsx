
import React, { useState, useEffect } from "react";
import { BarChart, Hash, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const CharacterCounter = () => {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [charNoSpacesCount, setCharNoSpacesCount] = useState(0);
  const [linesCount, setLinesCount] = useState(0);
  const [paragraphsCount, setParagraphsCount] = useState(0);
  const [sentencesCount, setSentencesCount] = useState(0);
  const [mostFrequentChar, setMostFrequentChar] = useState({ char: "", count: 0 });
  const { toast } = useToast();

  useEffect(() => {
    analyzeText(text);
  }, [text]);

  const analyzeText = (text: string) => {
    // Count all characters
    const chars = text.length;
    
    // Count characters without spaces
    const charsNoSpaces = text.replace(/\s+/g, "").length;
    
    // Count lines (split by newlines)
    const lines = text ? text.split("\n").length : 0;
    
    // Count paragraphs (groups of text separated by at least one empty line)
    const paragraphs = text.trim() ? text.trim().split(/\n\s*\n/).filter(Boolean).length : 0;
    
    // Count sentences (roughly - split by ., !, ?)
    const sentences = text.trim() ? text.trim().split(/[.!?]+/).filter(Boolean).length : 0;
    
    // Find most frequent character (excluding spaces)
    if (text.length > 0) {
      const charFrequency: Record<string, number> = {};
      for (const char of text) {
        if (char !== " " && char !== "\n" && char !== "\t") {
          charFrequency[char] = (charFrequency[char] || 0) + 1;
        }
      }
      
      let maxChar = "";
      let maxCount = 0;
      for (const char in charFrequency) {
        if (charFrequency[char] > maxCount) {
          maxChar = char;
          maxCount = charFrequency[char];
        }
      }
      
      setMostFrequentChar({ char: maxChar, count: maxCount });
    } else {
      setMostFrequentChar({ char: "", count: 0 });
    }
    
    setCharCount(chars);
    setCharNoSpacesCount(charsNoSpaces);
    setLinesCount(lines);
    setParagraphsCount(paragraphs);
    setSentencesCount(sentences);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handlePaste = () => {
    navigator.clipboard.readText()
      .then(clipText => {
        setText(clipText);
        toast({
          title: "Text pasted",
          description: "Text has been pasted from clipboard",
        });
      })
      .catch(err => {
        toast({
          title: "Failed to read clipboard",
          description: "Please check your browser permissions",
          variant: "destructive",
        });
      });
  };

  const handleClear = () => {
    setText("");
    toast({
      title: "Text cleared",
      description: "Text area has been cleared",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`Characters: ${charCount}
Characters (no spaces): ${charNoSpacesCount}
Lines: ${linesCount}
Paragraphs: ${paragraphsCount}
Sentences: ${sentencesCount}
Most frequent character: "${mostFrequentChar.char}" (${mostFrequentChar.count} times)`);
    
    toast({
      title: "Copied to clipboard",
      description: "Statistics have been copied to clipboard",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-md">
        <CardHeader className="bg-primary/5">
          <div className="flex items-center">
            <Hash className="mr-2 text-primary" size={24} />
            <CardTitle>Character Counter</CardTitle>
          </div>
          <CardDescription>
            Analyze characters, lines, and more in your text
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4 space-y-4">
          <Textarea
            placeholder="Type or paste text here to analyze characters..."
            className="min-h-[250px] font-mono text-base"
            value={text}
            onChange={handleTextChange}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card className="bg-primary/5">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Characters</span>
                  <FileText size={16} className="text-primary" />
                </div>
                <p className="text-2xl font-bold">{charCount}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/5">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Characters (no spaces)</span>
                  <FileText size={16} className="text-primary" />
                </div>
                <p className="text-2xl font-bold">{charNoSpacesCount}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/5">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Lines</span>
                  <BarChart size={16} className="text-primary" />
                </div>
                <p className="text-2xl font-bold">{linesCount}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/5">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Paragraphs</span>
                  <FileText size={16} className="text-primary" />
                </div>
                <p className="text-2xl font-bold">{paragraphsCount}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/5">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Sentences</span>
                  <FileText size={16} className="text-primary" />
                </div>
                <p className="text-2xl font-bold">{sentencesCount}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/5">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Most Frequent Char</span>
                  <Hash size={16} className="text-primary" />
                </div>
                <p className="text-2xl font-bold">
                  {mostFrequentChar.char ? `"${mostFrequentChar.char}" (${mostFrequentChar.count}x)` : "-"}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button onClick={handlePaste}>Paste from Clipboard</Button>
            <Button variant="outline" onClick={handleClear}>Clear</Button>
            <Button variant="outline" onClick={handleCopy}>Copy Statistics</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
