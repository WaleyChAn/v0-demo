export default function DataEntryFormPage() {
  const formText = '具体表单页（如"患者建档"）内容区域';
  
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">患者建档</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="h-96 rounded-lg border-2 border-dashed border-gray-300 p-4">
            <p className="text-center text-gray-500">{formText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}