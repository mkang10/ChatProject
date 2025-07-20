import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  

  Trash2,
  Edit3,
  Copy,
  Download,
} from "lucide-react"

export function ChatOptionsDialog({
  open,
  onOpenChange,
//   chatId,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  chatId: number
}) {
  const chatOptions = [
    { id: "rename", label: "Rename Chat", icon: Edit3, action: () => console.log("Rename chat") },
    { id: "copy", label: "Copy Chat Link", icon: Copy, action: () => console.log("Copy link") },
    { id: "export", label: "Export Chat", icon: Download, action: () => console.log("Export chat") },
    { id: "delete", label: "Delete Chat", icon: Trash2, action: () => console.log("Delete chat"), danger: true },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-gray-900/95 backdrop-blur-xl border border-teal-500/20">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-white">Chat Options</DialogTitle>
          <DialogDescription className="text-gray-400">Manage this conversation</DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          {chatOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                option.action()
                onOpenChange(false)
              }}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl text-left transition-all ${
                option.danger
                  ? "hover:bg-red-500/10 hover:border-red-500/30 text-red-400"
                  : "hover:bg-gray-800/50 hover:border-teal-500/30 text-gray-300"
              } border border-transparent`}
            >
              <option.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{option.label}</span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}