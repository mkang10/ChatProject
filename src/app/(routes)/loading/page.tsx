import { PageLoading } from "@/components/ui/page-loading";

// app/test/loading/page.tsx
export default function TestLoadingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageLoading text="Đang test..." />
    </div>
  );
}
