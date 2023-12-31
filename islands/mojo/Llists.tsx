import { useState } from 'preact/hooks';

// Data


export default function lists({ data: { data = [] } }) {

  console.log("datatatat,", data);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [projects, setProjects] = useState(data);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
const edit=(endpoint)=>document.location.href = "/mojo/edit?endpoint="+endpoint;
const add=()=>document.location.href = "/mojo/edit";
  return (
    <div class="bg-gray-100 p-8">
      <div class="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 class="text-xl font-semibold mb-4">Striped Table</h1>
            <button class="bg-green-300 text-blanc-700 px-4 py-2 rounded-md ml-2" onClick={add}>New -جديد</button><table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="py-2 px-4 border">ID</th>
              <th class="py-2 px-4 border">Endpoint</th>
              <th class="py-2 px-4 border">Methode</th>
              <th class="py-2 px-4 border">Table</th>
              <th class="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((field, index) => (
              <tr class={index % 2 === 0 ? 'bg-gray-200' : ''}>
                <td class="py-2 px-4 border">{field.id}</td>
                <td class="py-2 px-4 border">{field.endpoint}</td>
                <td class="py-2 px-4 border">{field.method}</td>
                <td class="py-2 px-4 border">{field.table}</td>
                <td class="py-2 px-4 border">
                  <button class="text-blue-500 hover:text-blue-700" onClick={()=>edit(field.endpoint)}><i class="fas fa-edit"></i></button>
                  <button class="text-red-500 hover:text-red-700 ml-2" onClick={openDeleteModal}><i class="fas fa-trash"></i></button>
                  <button class="text-blue-500 hover:text-blue-700" onClick={()=>edit(field.endpoint)}>
                    <i class="fas fa-eye"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isDeleteModalOpen && (
        <div class="fixed inset-0 flex justify-center items-center z-10 bg-gray-500 bg-opacity-50">
          <div class="bg-white p-6 rounded-md shadow-md max-w-md">
            <p class="mb-4">هل أنت متأكد من رغبتك في حذف هذا العنصر؟</p>
            <input type="text" placeholder="أكتب 'نعم' للتأكيد" class="w-full border p-2 mb-4" />
            <div class="flex justify-end">
              <button class="bg-red-500 text-white px-4 py-2 rounded-md">حذف</button>
              <button class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2" onClick={closeDeleteModal}>إلغاء</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
