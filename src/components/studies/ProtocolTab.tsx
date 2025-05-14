
import React from "react";
import { ProtocolViewer } from "./ProtocolViewer";

/**
 * @deprecated This is a generic protocol tab component. 
 * Please use study-specific protocol tabs instead:
 * - ScopingReviewProtocolTab
 * - CaregiverWeekProtocolTab
 * - AIBridgesProtocolTab
 * Each study should have its own dedicated protocol tab component.
 */
export const ProtocolTab = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 border border-red-300 bg-red-50 rounded-md">
        <p className="text-red-700 font-medium">
          ⚠️ Warning: Using deprecated generic ProtocolTab component. 
          Please use the study-specific Protocol components instead.
        </p>
      </div>
      <ProtocolViewer 
        title="Protocol"
        documentContent="Please use study-specific protocol components instead of this generic component."
        fileName="protocol.md"
      />
    </div>
  );
};
