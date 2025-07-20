import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Plus } from "lucide-react";

// New Chat Dialog Component
export function NewChatDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
    const [chatTitle, setChatTitle] = useState("")
    const [selectedTemplate, setSelectedTemplate] = useState("")

    const chatTemplates = [
        { id: "general", title: "General Chat", description: "Start a conversation about anything", icon: "💬" },
        { id: "3d", title: "3D Modeling", description: "Get help with 3D design and modeling", icon: "🎨" },
        { id: "coding", title: "Programming", description: "Code assistance and debugging", icon: "💻" },
        { id: "creative", title: "Creative Writing", description: "Story writing and creative content", icon: "✍️" },
    ]

    const handleCreateChat = () => {
        // Logic to create new chat
        onOpenChange(false)
        setChatTitle("")
        setSelectedTemplate("")
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl bg-gray-900/95 backdrop-blur-xl border border-teal-500/20">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-gradient-teal">Create New Chat</DialogTitle>
                    <DialogDescription className="text-gray-400">Start a new conversation with AI</DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Chat Title (Optional)</label>
                        <Input
                            value={chatTitle}
                            onChange={(e) => setChatTitle(e.target.value)}
                            placeholder="Enter a title for your chat..."
                            className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-teal-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-4">Choose a Template</label>
                        <div className="grid grid-cols-2 gap-3">
                            {chatTemplates.map((template) => (
                                <button
                                    key={template.id}
                                    onClick={() => setSelectedTemplate(template.id)}
                                    className={`p-4 rounded-xl text-left transition-all duration-200 ease-in-out transform ${selectedTemplate === template.id
                                            ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 shadow-lg shadow-teal-500/10"
                                            : "bg-gray-800/50 border border-gray-700/50 hover:border-teal-400/30 hover:bg-gray-700/40 hover:shadow-md hover:shadow-teal-500/10 hover:scale-[1.02] cursor-pointer"
                                        }`}
                                >
                                    <div className="text-2xl mb-2">{template.icon}</div>
                                    <h4 className="font-medium text-white mb-1">{template.title}</h4>
                                    <p className="text-xs text-gray-400">{template.description}</p>
                                </button>
                            ))}
                        </div>

                    </div>

                    <div className="flex justify-end space-x-3">
                        <Button variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <GradientButton onClick={handleCreateChat} disabled={!selectedTemplate}>
                            <Plus className="w-4 h-4 mr-2" />
                            Create Chat
                        </GradientButton>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
