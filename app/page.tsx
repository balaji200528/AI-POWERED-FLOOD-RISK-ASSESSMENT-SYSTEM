import { Globe } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br
     from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-1 py-8 max-w-6xl">

      {/* Header */}
      <div className='text-center mb-8'>
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full mr-4">
              <Globe className="h-8 w-8 text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Flood detection system</h1>
        </div>
        <p className="text-slate-900">Analyze flood risk using coordinate or upload images for AI-powered terrain anaylysis</p>
      </div>
      </div>
      <p>hello world</p>
    </div>
  );
}
