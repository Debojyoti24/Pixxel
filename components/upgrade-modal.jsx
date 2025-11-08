// "use client";

// import React from "react";
// import { X, Crown, Zap } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { PricingTable } from "@clerk/nextjs";

// export function UpgradeModal({ isOpen, onClose, restrictedTool, reason }) {
//   const getToolName = (toolId) => {
//     const toolNames = {
//       background: "AI Background Tools",
//       ai_extender: "AI Image Extender",
//       ai_edit: "AI Editor",
//     };
//     return toolNames[toolId] || "Premium Feature";
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-4xl bg-slate-800 border-white/10 max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <div className="flex items-center gap-3">
//             <Crown className="h-6 w-6 text-yellow-500" />
//             <DialogTitle className="text-2xl font-bold text-white">
//               Upgrade to Pro
//             </DialogTitle>
//           </div>
//         </DialogHeader>

//         <div className="space-y-6">
//           {/* Restriction Message */}
//           {restrictedTool && (
//             <Alert className="bg-amber-500/10 border-amber-500/20">
//               <Zap className="h-5 w-5 text-amber-400" />
//               <AlertDescription className="text-amber-300/80">
//                 <div className="font-semibold text-amber-400 mb-1">
//                   {getToolName(restrictedTool)} - Pro Feature
//                 </div>
//                 {reason ||
//                   `${getToolName(restrictedTool)} is only available on the Pro plan. Upgrade now to unlock this powerful feature and more.`}
//               </AlertDescription>
//             </Alert>
//           )}

//           <PricingTable />
//         </div>

//         <DialogFooter className="justify-center">
//           <Button
//             variant="ghost"
//             onClick={onClose}
//             className="text-white/70 hover:text-white"
//           >
//             Maybe Later
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

// p-02

// "use client";

// import React from "react";
// import { X, Crown, Zap } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Alert, AlertDescription } from "@/components/ui/alert";

// export function UpgradeModal({ isOpen, onClose, restrictedTool, reason }) {
//   const getToolName = (toolId) => {
//     const toolNames = {
//       background: "AI Background Tools",
//       ai_extender: "AI Image Extender",
//       ai_edit: "AI Editor",
//     };
//     return toolNames[toolId] || "Premium Feature";
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-4xl bg-slate-800 border-white/10 max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <div className="flex items-center gap-3">
//             <Crown className="h-6 w-6 text-yellow-500" />
//             <DialogTitle className="text-2xl font-bold text-white">
//               Upgrade to Pro
//             </DialogTitle>
//           </div>
//         </DialogHeader>

//         <div className="space-y-6">
//           {/* Restriction Message */}
//           {restrictedTool && (
//             <Alert className="bg-amber-500/10 border-amber-500/20">
//               <Zap className="h-5 w-5 text-amber-400" />
//               <AlertDescription className="text-amber-300/80">
//                 <div className="font-semibold text-amber-400 mb-1">
//                   {getToolName(restrictedTool)} - Pro Feature
//                 </div>
//                 {reason ||
//                   `${getToolName(
//                     restrictedTool
//                   )} is only available on the Pro plan. But during beta, all features are completely free! 🎉`}
//               </AlertDescription>
//             </Alert>
//           )}

//           {/* ✅ Replace the PricingTable with a free message */}
//           <div className="text-center text-white bg-slate-700/50 rounded-2xl p-10 border border-white/10">
//             <h3 className="text-3xl font-bold mb-4">Enjoy Full Access 🎉</h3>
//             <p className="text-gray-300 mb-6">
//               All Pro features are currently <strong>100% free</strong> while
//               we’re in beta. No upgrades or billing required!
//             </p>
//             <Button
//               onClick={onClose}
//               className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl"
//             >
//               Start Creating for Free
//             </Button>
//           </div>
//         </div>

//         <DialogFooter className="justify-center">
//           <Button
//             variant="ghost"
//             onClick={onClose}
//             className="text-white/70 hover:text-white"
//           >
//             Maybe Later
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

// p=3
"use client";

import React from "react";
import { Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function UpgradeModal({ isOpen, onClose, restrictedTool, reason }) {
  const getToolName = (toolId) => {
    const toolNames = {
      background: "AI Background Tools",
      ai_extender: "AI Image Extender",
      ai_edit: "AI Editor",
    };
    return toolNames[toolId] || "Premium Feature";
  };

  // ✅ When the user clicks “Start Creating for Free”, we dispatch a global event
  const handleFreeUnlock = () => {
    onClose?.();

    // Give time for modal to close, then unlock tool
    setTimeout(() => {
      const event = new CustomEvent("unlockProFeature", {
        detail: { tool: restrictedTool },
      });
      window.dispatchEvent(event);
      console.log("✅ Free feature unlocked:", restrictedTool);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl bg-slate-800 border-white/10 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <Crown className="h-6 w-6 text-yellow-500" />
            <DialogTitle className="text-2xl font-bold text-white">
              Upgrade to Pro
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {restrictedTool && (
            <Alert className="bg-amber-500/10 border-amber-500/20">
              <Zap className="h-5 w-5 text-amber-400" />
              <AlertDescription className="text-amber-300/80">
                <div className="font-semibold text-amber-400 mb-1">
                  {getToolName(restrictedTool)} - Pro Feature
                </div>
                {reason ||
                  `${getToolName(
                    restrictedTool
                  )} is only available on the Pro plan. But during beta, all features are completely free! 🎉`}
              </AlertDescription>
            </Alert>
          )}

          {/* ✅ Replace pricing table with a free access message */}
          <div className="text-center text-white bg-slate-700/50 rounded-2xl p-10 border border-white/10">
            <h3 className="text-3xl font-bold mb-4">Enjoy Full Access 🎉</h3>
            <p className="text-gray-300 mb-6">
              All Pro features are currently <strong>100% free</strong> while
              we’re in beta. No upgrades or billing required!
            </p>

            {/* ✅ This button unlocks the restricted tool */}
            <Button
              onClick={handleFreeUnlock}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl"
            >
              Start Creating for Free
            </Button>
          </div>
        </div>

        {/* ✅ Keep the optional close button */}
        <DialogFooter className="justify-center">
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-white/70 hover:text-white"
          >
            Maybe Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
