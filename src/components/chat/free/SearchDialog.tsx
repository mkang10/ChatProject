import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ArrowUp, Search } from "lucide-react";
import { useState } from "react";

// Search Dialog Component
export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [searchQuery, setSearchQuery] = useState("")

  const searchResults = [
    { id: 1, title: "3D Model Tutorial", content: "Learn basic 3D modeling techniques...", time: "2h ago" },
    { id: 2, title: "Animation Basics", content: "Understanding keyframes and timing...", time: "1d ago" },
    { id: 3, title: "Lighting Setup", content: "Professional lighting for 3D scenes...", time: "2d ago" },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-gray-900/95 backdrop-blur-xl border border-teal-500/20">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gradient-teal">Search Chats</DialogTitle>
          <DialogDescription className="text-gray-400">Find messages and conversations</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search messages, chats, or topics..."
              className="pl-10 bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-teal-500"
            />
          </div>

          {searchQuery && (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {searchResults
                .filter((result) => result.title.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((result) => (
                  <div
                    key={result.id}
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-white mb-1">{result.title}</h4>
                        <p className="text-sm text-gray-400 mb-2">{result.content}</p>
                        <span className="text-xs text-gray-500">{result.time}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowUp className="w-4 h-4 rotate-45" />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {!searchQuery && (
            <div className="text-center py-8">
              <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Start typing to search your chats</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}