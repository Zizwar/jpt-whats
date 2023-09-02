import { useEffect } from "preact/hooks";
export default function Admin() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};

    for (let [name, value] of formData.entries()) {
      if(value)
      data[name] = value;
    }

    console.log("start", { data });

    try {
      const response = await fetch("/api/abrakadabra", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      alert(JSON.stringify ({ responseData }));
      // Handle response from the API
    } catch (error) {
      alert(JSON.stringify({ error }));
      // Handle error
    }
  };
  //
  const FormField = ({ name, label, type, icon }) => {
    const id = `field-${name}`;
    return (
      <div class="mb-4">
        <div class="flex justify-between">
          <label class="block text-gray-700 text-sm font-bold mb-2" for={id}>
            {icon && <i class={`fas ${icon} mr-1`}></i>} {name}
          </label>
          <label class="block text-gray-700 text-sm font-bold mb-2" for={id}>
            {label}
          </label>
        </div>
        {type === "checkbox" ? (
          <input
            class="mr-2 leading-tight"
            type="checkbox"
            id={id}
            name={name}
          />
        ) : type === "textarea" ? (
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={id}
            name={name}
            rows={3}
          />
        ) : (
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={id}
            type={type}
            name={name}
          />
        )}
      </div>
    );
  };
  ///

  const fields = [
    { name: "status", label: "الحالة", type: "text", icon: "fa-flag" },
    {
      name: "title_ar",
      label: "العنوان (عربي)",
      type: "text",
      icon: "fa-heading",
    },
    {
      name: "title_en",
      label: "العنوان (إنجليزي)",
      type: "text",
      icon: "fa-heading",
    },
    { name: "comment", label: "التعليق", type: "textarea", icon: "fa-comment" },
    { name: "method", label: "الطريقة", type: "text", icon: "fa-code" },
    {
      name: "endpoint",
      label: "النقطة النهائية",
      type: "text",
      icon: "fa-link",
    },
    { name: "table", label: "الجدول", type: "text", icon: "fa-table" },
    { name: "columns", label: "الأعمدة", type: "text", icon: "fa-columns" },
    { name: "prefix", label: "البادئة", type: "text", icon: "fa-code-branch" },
    {
      name: "single",
      label: "واحد فقط",
      type: "checkbox",
      icon: "fa-check-square",
    },

    { name: "role", label: "الدور", type: "text", icon: "fa-user" },
    { name: "filters", label: "الفلاتر", type: "textarea", icon: "fa-filter" },
    {
      name: "select",
      label: "الاختيار",
      type: "text",
      icon: "fa-hand-pointer",
    },
    { name: "function", label: "الدالة", type: "textarea", icon: "fa-code" },
    { name: "rpc", label: "RPC", type: "text", icon: "fa-network-wired" },
    { name: "data", label: "البيانات", type: "textarea", icon: "fa-database" },
    { name: "sql", label: "استعلام مخصص", type: "text", icon: "fa-terminal" },
    { name: "log", label: "السجل", type: "checkbox", icon: "fa-file-alt" },
  ];

  return (
    <>
      <div class="bg-gray-100 p-4">
        <div class="max-w-md mx-auto bg-white p-4 rounded shadow-md">
          <h2 class="text-xl font-semibold mb-4">Mojo Land</h2>
          <div class="p-4">
            <form
              onSubmit={handleSubmit}
              class="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4"
            >
              {fields.map((field) => (
                <FormField
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  icon={field.icon}
                  key={field.name}
                />
              ))}
              <div class="flex items-center justify-between mt-4">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  حفظ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}