import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {

  ArrowUp,

  User,
  Bell,
  Shield,
  Palette,
  Volume2,
  Moon,
  Sun,
  Globe,
 
} from "lucide-react"
import { useState } from "react";

export function SettingsDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [activeTab, setActiveTab] = useState("account")

  const settingsTabs = [
    { id: "account", label: "Account", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "audio", label: "Audio", icon: Volume2 },
    { id: "language", label: "Language", icon: Globe },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[600px] bg-gray-900/95 backdrop-blur-xl border border-teal-500/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient-teal">Settings</DialogTitle>
          <DialogDescription className="text-gray-400">Manage your account settings and preferences</DialogDescription>
        </DialogHeader>

        <div className="flex h-full">
          {/* Settings Sidebar */}
          <div className="w-64 border-r border-gray-700/50 pr-6">
            <nav className="space-y-2">
              {settingsTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl text-left transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-400"
                      : "hover:bg-gray-800/50 text-gray-300"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Settings Content */}
          <div className="flex-1 pl-6">
            {activeTab === "account" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Account Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input
                        value="user@email.com"
                        disabled
                        className="bg-gray-800/50 border-gray-700/50 text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Plan</label>
                      <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                        <span className="text-gray-300">Free Plan</span>
                        <GradientButton size="sm">
                          <ArrowUp className="w-4 h-4 mr-2" />
                          Upgrade
                        </GradientButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Notification Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                      <div>
                        <span className="text-white font-medium">Email Notifications</span>
                        <p className="text-sm text-gray-400">Receive updates via email</p>
                      </div>
                      <Button variant="outline" size="sm" disabled>
                        Pro Feature
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                      <div>
                        <span className="text-white font-medium">Push Notifications</span>
                        <p className="text-sm text-gray-400">Browser notifications</p>
                      </div>
                      <Button variant="outline" size="sm" disabled>
                        Pro Feature
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "appearance" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Theme Settings</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-teal-500/30">
                      <div className="flex items-center space-x-3 mb-3">
                        <Moon className="w-5 h-5 text-teal-400" />
                        <span className="font-medium text-white">Dark Mode</span>
                      </div>
                      <p className="text-sm text-gray-400">Currently active</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 opacity-50">
                      <div className="flex items-center space-x-3 mb-3">
                        <Sun className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-400">Light Mode</span>
                      </div>
                      <p className="text-sm text-gray-500">Pro Feature</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
