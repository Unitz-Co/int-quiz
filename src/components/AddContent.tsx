export interface AddContentProps {}

export function AddContent() {
  return (
    <div className="min-h-full w-full flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="mb-4 text-center text-3xl tracking-tight font-bold text-gray-900">
            Thêm mới nội dung
          </h2>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tên nội dung
              </label>
              <div className="mt-1">
                <input
                  id="content"
                  name="content"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Số thứ tự trong bài viết
              </label>
              <div className="mt-1">
                <input
                  id="content"
                  name="content"
                  type="number"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="example"
                  name="example"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-600 hover:bg-slate-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Lưu
              </button>
            </div>
          </form>
          <div className="mt-2">Mode</div>
        </div>
      </div>
    </div>
  );
}
