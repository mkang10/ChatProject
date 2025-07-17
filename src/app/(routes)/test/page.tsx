// page.tsx
export default async function Page() {
  // giả lập delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return <div className="text-white bg-black p-8">Page Loaded</div>
}
