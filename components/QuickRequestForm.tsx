"use client";

import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const QuickRequestForm = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    description: "",
    email: "",
    urgency: "standard",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 shadow-2xl"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-100 mb-2">
          Get Your Solution in 24-48 Hours
        </h3>
        <p className="text-gray-400">
          Tell us about your Next.js/React challenge and we&apos;ll handle the rest
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            What do you need help with?
          </label>
          <select
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-100"
            value={formData.projectType}
            onChange={(e) =>
              setFormData({ ...formData, projectType: e.target.value })
            }
          >
            <option value="">Select project type...</option>
            <option value="component">Custom React Component</option>
            <option value="npm-package">NPM Package Development</option>
            <option value="api-integration">API Integration</option>
            <option value="bug-fix">Bug Fix & Optimization</option>
            <option value="full-feature">Complete Feature Development</option>
            <option value="other">Other (specify in description)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Describe your requirements
          </label>
          <textarea
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-100 h-24 resize-none"
            placeholder="Explain what you need, any specific requirements, tech stack preferences..."
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-100"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Timeline
            </label>
            <select
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-100"
              value={formData.urgency}
              onChange={(e) =>
                setFormData({ ...formData, urgency: e.target.value })
              }
            >
              <option value="standard">Standard (2-3 days)</option>
              <option value="urgent">Urgent (24-48 hours)</option>
              <option value="flexible">Flexible (1 week+)</option>
            </select>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-xl"
        >
          <Send className="mr-2 h-5 w-5" />
          Send Request & Get Quote
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          💡 Free consultation • 💰 Pay only after approval • 🚀 Fast delivery
        </p>
      </div>
    </motion.div>
  );
};

export default QuickRequestForm;