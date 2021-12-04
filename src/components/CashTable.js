/** @format */

const CashTable = ({ number, denomination, status }) => {
  const obj = denomination.reduce((acc, val, ind) => {
    acc[val] = number[ind];
    return acc;
  }, {});

  return (
    <>
      {status && (
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-indigo-500 mt-5">
          <div class="p-3">
            <table class="table-auto w-full">
              <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Denomination</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Number of notes</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                {Object.entries(obj).map((item, idx) => (
                  <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="font-medium text-gray-800">₹ {item[0]}</div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">{item[1]}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default CashTable;
