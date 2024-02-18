import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TodayTasks from "./TodayTasks";
import AiModels from "./AiModels";
import ClockComponent from "./ClockComponent";
import BottomPanel from "./BottomPanel";

type Props = {};

function Dashboard({}: Props) {
  return (
    <div className="max-w-6xl bg-[#17171A] shadow-xl shadow-gray-800  w-full h-[600px] rounded-xl p-2">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={75} minSize={50}>
          {" "}
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={24} minSize={16} maxSize={40}>
              <TodayTasks />
            </ResizablePanel>
            <ResizableHandle className="w-2 bg-[#17171A] h-full" />

            <ResizablePanel>
              <div className="w-full h-full flex gap-2">
                <AiModels />
                <ClockComponent />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle className="h-2 w-full bg-[#17171A]" />
        <ResizablePanel defaultSize={40} minSize={20} className="pt-1">
          <BottomPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default Dashboard;
